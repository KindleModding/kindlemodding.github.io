#!/usr/bin/env python3
"""Build an experimental offline SpiderCat payload without running target code."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import struct


REPO = Path(__file__).resolve().parents[2]
BOOK = REPO / "static/spidercat/spidercat.azw3"
LIBRARY = REPO / "static/spidercat/jb.so"

# Pin the exact inputs reviewed for this experiment. Updating any input should
# require rechecking the patch locations and the generated payloads.
INPUT_SHA256 = {
    "spidercat.azw3": "0af591069a315ed9e239af1fcf52c8b8011b742b0ba344985353c53884b6857c",
    "jb.so": "3d1f4bd18d9dd8147e66706d77133794f105654b6696f6f6d75262976ec477e4",
    "jb.sh": "65a63528fbe9515950cc3aa0d931749548680f37898a3819a4ebc0a740588942",
}
OUTPUT_SHA256 = {
    "spidercat-offline.azw3": "d93e3e44fc808c40a196c974193bcd18e5ed2c36d49e25f2556d50487ccd63c5",
    "spidercat-jb.so": "b6e128b321e43b8e616a65a02cdac2cf44d1a5d7083c508ab726992e00e132b0",
    "jb.sh": INPUT_SHA256["jb.sh"],
}

BOOK_OLD = b"curl$IFS-o$IFS/tmp/jb.so$IFS''https://kindlemodding.org/spidercat/jb.so"
# Empty shell quotes pad the replacement to the same byte length without
# adding arguments or URL whitespace.
BOOK_NEW = b"cp$IFS/mnt/us/spidercat-jb.so$IFS/tmp/jb.so" + b"''" * 14
LIBRARY_OLD = b"/bin/sh -c 'curl -L https://kindlemodding.org/jb.sh | RUN_MODE=1 JB_HEADER=\"SpiderCat Jailbreak by sparklerfish\" sh'"
LIBRARY_NEW = b"/bin/sh -c 'cat /mnt/us/jb.sh | RUN_MODE=1 JB_HEADER=SpiderCat sh'"


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def read_pinned(path: Path, name: str) -> bytes:
    data = path.read_bytes()
    if sha256(data) != INPUT_SHA256[name]:
        raise ValueError(f"Unexpected SHA-256 for {name}; inspect updated input before rebuilding")
    return data


def unique_offset(data: bytes, old: bytes) -> int:
    if data.count(old) != 1:
        raise ValueError("Expected exactly one original command")
    return data.index(old)


def book_record_end(data: bytes, offset: int) -> tuple[int, int]:
    count = struct.unpack_from(">H", data, 76)[0]
    offsets = [struct.unpack_from(">I", data, 78 + i * 8)[0] for i in range(count)]
    if struct.unpack_from(">H", data, offsets[0])[0] != 1:
        raise ValueError("Expected an uncompressed PalmDB book")
    for index, start in enumerate(offsets):
        end = offsets[index + 1] if index + 1 < count else len(data)
        if start <= offset < end:
            return index, end
    raise ValueError("Command is outside PalmDB records")


def elf_segment_end(data: bytes, offset: int) -> int:
    if data[:6] != b"\x7fELF\x01\x01":
        raise ValueError("Expected a 32-bit little-endian ELF")
    phoff = struct.unpack_from("<I", data, 28)[0]
    entsize = struct.unpack_from("<H", data, 42)[0]
    count = struct.unpack_from("<H", data, 44)[0]
    for index in range(count):
        ptype, poff, _, _, filesz, _, flags, _ = struct.unpack_from(
            "<IIIIIIII", data, phoff + index * entsize
        )
        if ptype == 1 and flags & 4 and poff <= offset < poff + filesz:
            return poff + filesz
    raise ValueError("Command is outside a readable ELF load segment")


def build(book: bytes, library: bytes, script: bytes) -> tuple[dict[str, bytes], dict]:
    if len(BOOK_OLD) != len(BOOK_NEW):
        raise ValueError("Book replacement would shift PalmDB records")
    book_offset = unique_offset(book, BOOK_OLD)
    record, record_end = book_record_end(book, book_offset)
    if book_offset + len(BOOK_OLD) > record_end:
        raise ValueError("Book replacement crosses a record boundary")
    patched_book = book[:book_offset] + BOOK_NEW + book[book_offset + len(BOOK_OLD) :]

    library_offset = unique_offset(library, LIBRARY_OLD)
    segment_end = elf_segment_end(library, library_offset)
    if library_offset + len(LIBRARY_NEW) + 1 > segment_end:
        raise ValueError("New command exceeds the file-backed ELF segment")
    replacement = LIBRARY_NEW + b"\0" * (len(LIBRARY_OLD) + 1 - len(LIBRARY_NEW))
    patched_library = library[:library_offset] + replacement + library[library_offset + len(replacement) :]

    if len(patched_book) != len(book) or len(patched_library) != len(library):
        raise ValueError("A patched file changed size")
    if BOOK_OLD in patched_book or LIBRARY_OLD in patched_library:
        raise ValueError("An original network command remains")
    if b"https://kindlemodding.org" in patched_book or b"https://kindlemodding.org" in patched_library:
        raise ValueError("A network URL remains in a patched loader")

    files = {
        "spidercat-offline.azw3": patched_book,
        "spidercat-jb.so": patched_library,
        "jb.sh": script,
    }
    hashes = {name: sha256(data) for name, data in files.items()}
    if hashes != OUTPUT_SHA256:
        raise ValueError("Generated files differ from reviewed output hashes")
    manifest = {
        "status": "experimental; statically checked; not device-tested or signed",
        "input_sha256": INPUT_SHA256,
        "output_sha256": hashes,
        "book_patch": {"offset": book_offset, "length": len(BOOK_OLD), "record": record},
        "library_patch": {
            "offset": library_offset,
            "old_length": len(LIBRARY_OLD) + 1,
            "new_length": len(LIBRARY_NEW) + 1,
            "segment_end": segment_end,
        },
    }
    return files, manifest


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--jb-sh", required=True, type=Path, help="Reviewed jb.sh v1.3.7 file")
    parser.add_argument("--output", required=True, type=Path, help="New directory outside this repository")
    args = parser.parse_args()
    output = args.output.resolve()
    if output == REPO or REPO in output.parents or output.exists():
        parser.error("output must be a new directory outside this repository")

    book = read_pinned(BOOK, "spidercat.azw3")
    library = read_pinned(LIBRARY, "jb.so")
    script = read_pinned(args.jb_sh, "jb.sh")
    files, manifest = build(book, library, script)
    output.mkdir(parents=True)
    for name, data in files.items():
        (output / name).write_bytes(data)
    (output / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(files)} files and manifest.json to {output}")


if __name__ == "__main__":
    main()
