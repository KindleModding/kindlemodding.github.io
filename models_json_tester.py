import argparse
import json

parser = argparse.ArgumentParser(prog='Models Json Tester',
                    description='Point to a deviceTypes.conf file and a models.json file to find missing serials',
                    epilog='Created by Hackerdude (https://ko-fi.com/hackerdude)')

parser.add_argument("deviceTypes", help="The path to the deviceTypes.conf file")
parser.add_argument("modelsJson", help="The path to the models.json file")

args = parser.parse_args()

deviceTypesFile = open(args.deviceTypes, 'r')

modelsJsonData = None
with open(args.modelsJson, 'r') as file:
    modelsJsonData = json.loads(file.read())

missing = []
mismatched = {}

count = 0
for line in deviceTypesFile.readlines():
    if (not "=" in line):
        continue

    count += 1
    deviceCode = line.split('=')[0].strip()
    amazonModel = line.split('=')[1].strip()

    found = False
    for model in modelsJsonData:
        if (deviceCode in model["device_codes"]):
            found = True
            if (model["device_codes"][deviceCode]["amazon_model_id"] == amazonModel):
                print(f"{deviceCode} -> {model['device_codes'][deviceCode]['kindletool_name']} ({amazonModel})")
            else:
                print(f"[MISMATCHED] {deviceCode} -> {model['device_codes'][deviceCode]['kindletool_name']} ({model['device_codes'][deviceCode]['amazon_model_id']} SHOULD BE {amazonModel})")
                mismatched[deviceCode] = (model['device_codes'][deviceCode]['amazon_model_id'], amazonModel)
            break

    if (not found):
        print(f"[NOTFOUND] {deviceCode} -> {amazonModel}")
        missing.append((deviceCode, amazonModel))

print(f"Checked {count} serials")
print(f"{len(missing)} missing")
print(f"{len(mismatched)} mismatched")

if (len(missing) > 0):
    print("\nMissing:")
    for missingSerial in missing:
        print(f"- {missingSerial[0]} -> {missingSerial[1]}")

if (len(mismatched) > 0):
    print("\nMismatched:")
    for mismatchedSerial in mismatched:
        print(f"- {mismatchedSerial} -> {mismatched[mismatchedSerial][0]} SHOULD BE {mismatched[mismatchedSerial][1]}")

print("\n\nDone")