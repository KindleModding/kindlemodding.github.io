# Experimental offline SpiderCat builder

This tool prepares a local-file variant of SpiderCat for review. It changes
only the two initial downloads: the book copies a staged `jb.so` from Kindle
user storage, and that library reads a staged `jb.sh` instead of fetching it.
The builder itself makes no network requests or executes Kindle code. It
writes only to the new output directory you specify; choose a directory on
your computer, not a mounted Kindle.

**Status:** The generated book and library have been checked for fixed size,
file structure, command location, and SHA-256. One PW4 owner on firmware
5.18.1.1.1 reports that an offline attempt produced a `uid=0` marker and a
`JAILBROKEN` marker identifying `jb.sh` v1.3.7. They also saw a core-dump
prompt and Application Error, so this is not a clean success. A `;log` command
response after a full restart suggests the command handler persisted. The
report has not been independently reproduced. Airplane-mode operation, update
protection, KPM, and other post-jailbreak tools remain unverified. The book
still uses a `127.0.0.1` request for its exploit. These modified files are
unsigned and are no longer identical to the upstream binaries.

## Build

Obtain `jb.sh` v1.3.7 from the [KindleModding release][jb-release]. The
builder accepts only the pinned script hash and the pinned SpiderCat assets
in this repository. From the repository root:

```sh
python3 tools/spidercat-offline/build.py \
  --jb-sh /path/to/reviewed/jb.sh \
  --output /path/to/new-output-directory
```

It produces `spidercat-offline.azw3`, `spidercat-jb.so`, `jb.sh`, and
`manifest.json`. The output directory must be new and outside this repository.
Before use, compare each staged file's SHA-256 with the manifest.

| Generated file | Intended Kindle path |
| --- | --- |
| `spidercat-offline.azw3` | `/mnt/us/documents/spidercat-offline.azw3` |
| `spidercat-jb.so` | `/mnt/us/spidercat-jb.so` |
| `jb.sh` | `/mnt/us/jb.sh` |

The fixed-length ebook patch preserves PalmDB record offsets. The ELF patch
shortens the launch command so its NUL terminator is inside the file-backed
load segment; it also shortens the displayed header to `SpiderCat`.
The patched ELF retains the original GNU BuildID, which is stale and must not
be used to identify the modified bytes. Use the manifest SHA-256 instead.

This only removes network use from the initial bootstrap. The installed
hotfix runner may fetch online `jb.sh` when explicitly invoked, and KPM may
fetch package indexes and packages when used. The existing pipe-based
installer may fail unclearly if a local file is missing. The SpiderCat book
must still be opened for the exploit to run, so staging the files alone does
not test or execute it.

This is a binary patch because the SpiderCat ebook and ELF source/build recipe
are not in this repository. A source-built offline loader with an explicit
hash check before executing `jb.sh` would be preferable to publishing these
generated binaries as a supported release.

[jb-release]: https://github.com/KindleModding/jb.sh/releases/tag/1.3.7
