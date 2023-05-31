---
layout: default
grand_parent: Jailbreaking Your Kindle
parent: Post Jailbreak
title: Installing KUAL/MRPI
nav_order: 2
---

# Installing KUAL/MRPI
You will need to install KUAL (Kindle Unified Application Launcher) and MRPI (MobileRead Package Installer) to run homebrew on your Kindle.

{: .highlight}
KAUL and MRPI both rely on each other, so you must install them both together

## Prerequisites
- A PC
- [7-Zip](https://www.7-zip.org/) is recommended to extract the `tar.xz` files
- Download `KUAL` and `MR Package Installer` from [NiLuJe's Snapshots Thread](https://www.mobileread.com/forums/showthread.php?t=225030)

    {: .warning}
    There are multiple versions of KUAL!<br/>
    For Firmware `5.9+`, download `KUAL Booklet (coplate)`<br/>
    For Firmware `<=5.8.x`, download `KUAL Booklet`

## Installing KUAL+MRPI
1. Connect your Kindle to your PC
2. Copy the `extensions` and `mrpackages` folders from the `MR Package Installer` file you downloaded to the root of your Kindle
3. In the KUAL file you downloaded, open it and locate the `Update_KUALBooklet_*_install.bin` and copy it into the `mrpackages` folder on the Kindle
4. Eject and unplug your Kindle
5. Enter `;log mrpi` into the search bar and click enter
6. `Hush, little baby...` should show up at the bottom of the screen, you have now installed KUAL and MRPI

## Troubleshooting
- Verify the location of all the folders and files on the Kindle
- Try copying the `Update_KUALBooklet_hotfix_*_install.bin` file to the root of your Kindle when connected to your PC, and then go to `Settings` > `Update Your Kindle`, then resume from `step 5`

## Credits
- Original guide written by [Neon](https://www.mobileread.com/forums/member.php?u=329187)