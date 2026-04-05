---
layout: default
parent: Troubleshooting Kindle Issues
title: Installing USBNet(Lite)
weight: 6
---

USBNetwork/USBNetLite allows you to manage your Kindle over the Internet, allowing for easily installing apps or managing files in general.

## Installing
> [!IMPORTANT]
> If you do not have an `mrpackages` folder in the root of your Kindle, please continue to the [Alternate Instructions](#alternate-instructions).

### On Kindle Firmwares 5.16.3 or Later:
1. Download the latest release of USBNetLite [here](https://github.com/notmarek/kindle-usbnetlite/releases/latest). Download the 11th gen plus version if you are on a 11th Gen or higher Kindle.
2. Move the .bin file to the mrpackages folder on your Kindle
3. In KUAL, open the "Helper" app and click "Install MR Packages" **OR** on the Kindle homescreen, you can enter ```;log mrpi``` in the search bar and hit enter.

### On Supported Kindle Firmwares Under 5.16.3:
1. Download [this file](https://storage.gra.cloud.ovh.net/v1/AUTH_2ac4bfee353948ec8ea7fd1710574097/mr-public/Touch/kindle-usbnet-0.22.N-r19297.tar.xz) and extract it until you get a bin file, then follow the previous instructions.
## Alternate Instructions 
If you do not have an mrpackages folder (ex. you used PEKI to get KUAL) then you need to install it a little differently.
1. Download the version for your Kindle from the standard instructions.
2. Move the file to the root of your Kindle
3. Enable Airplane Mode
4. Restore OTA Updates
5. Go to your Kindles Settings < 3 dots menu < Update your Kindle
6. Once your Kindle finishes "Updating" Block OTA's again and you can now disable Airplane Mode

## Credits
- [Marek](https://github.com/notmarek) - Wrote USBNetLite
- [NiLuJe](https://www.mobileread.com/forums/member.php?u=69624) - Wrote USBNetwork
- pumpkinlime132 - Provided original links and Guide in KMC
