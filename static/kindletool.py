# Python reimplementation of some Kindletool functions
# Written by Hackerdude

import base64
from enum import Enum
from io import BytesIO
import struct

def device_code_from_string(serial_snippet: str):
    converted = ""
    if len(serial_snippet) == 2:
        return int(serial_snippet, 16)

    parsed = ""
    for c in serial_snippet.upper():
        if ord(c) > ord('I'):
            c = chr(ord(c) - 1)
        if ord(c) > ord('O'):
            c = chr(ord(c) - 1)

        parsed += c
    return int(parsed, 32)

def device_code_to_string(device_code: int):
    encoded = ""
    while device_code > 0:
        next = min(device_code, 31)
        if next < 10:
            encoded += str(next)
        else:
            encoded += chr(ord("A") + (next - 10))
        device_code -= next
    processed = ""

    for c in encoded:
        if (ord(c) > ord('O') - 1):
            c = chr(ord(c) + 1)
        if (ord(c) > ord('I') - 1):
            c = chr(ord(c) + 1)
        processed += c
    return processed

class OTAType(Enum):
    RECOVERY_UPDATE = 0
    RECOVERY_UPDATE_V2 = 1
    OTA_UPDATE = 2
    OTA_UPDATE_V2 = 3
    UPDATE_SIGNATURE = 4
    USER_DATA_PACKAGE = 5
    ANDROID_UPDATE = 6
    COMPONENT_UPDATE = 7

class OTAFile:
    def read_devices(stream: BytesIO):
        ota_type = None

        raw_ota_type = stream.read(4)
        if raw_ota_type in [ b"FB02", b"FB01" ]:
            ota_type = OTAType.RECOVERY_UPDATE
        elif raw_ota_type in [ b"FB03" ]:
            ota_type = OTAType.RECOVERY_UPDATE_V2
        elif raw_ota_type in [ b"FC02", b"FD03" ]:
            ota_type = OTAType.OTA_UPDATE
        elif raw_ota_type in [ b"FC04", b"FD04", b"FL01" ]:
            ota_type = OTAType.OTA_UPDATE_V2
        elif raw_ota_type in [ b"\x1F\x8B\x08\x00" ]:
            ota_type = OTAType.USER_DATA_PACKAGE # GZIP
        elif raw_ota_type in [ b"\x50\x4B\x03\x04" ]: # ZIP
            ota_type = OTAType.ANDROID_UPDATE
        elif raw_ota_type in [ b"CB01" ]:
            ota_type = OTAType.COMPONENT_UPDATE # What is this?
        else:
            raise Exception(f"No such OTA type found for magic {repr(raw_ota_type)}")

        if (ota_type != OTAType.RECOVERY_UPDATE_V2):
            raise Exception(f"This type of OTA {repr(ota_type)} is not supported by the tool at this time, contact Hackerdude")

        stream.seek(4 + 8 + 32 + 4 + 4 + 4 + 4 + 4 + 4 + 1, 1)
        num_devices = struct.unpack("<B", stream.read(1))
        devices = []
        for i in range(num_devices):
            devices.append(struct.unpack("<H", stream.read(2)))

        return devices

if __name__ == "__main__":
    print("Testing...")
    #i = 0x14DD
    #print(f"{i} -> {device_code_to_string(i)} -> {device_code_from_string(device_code_to_string(i))}")
    for i in [
        "56V",
        "5R1",
        "5R2",
        "5R0",
        "5R5",
        "5R4",
        "5R3",
        "65N",
        "65P",
        "65Q"
    ]:
        print(i, hex(device_code_from_string(i)))
