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
KUAL and MRPI both rely on each other, so you must install them both together

## Prerequisites
- A PC
- [7-Zip](https://www.7-zip.org/) is recommended to extract the `tar.xz` files
- Download `KUAL` and `MR Package Installer` using the provided links

{: .highlight}
For any device newer than a K5 (Every model since and including the PW2), you will want to install `KUAL (Coplate)` rather than `Kual`

[Download MRPI](https://fw.notmarek.com/khf/kual-mrinstaller-khf.tar.xz){: .btn .btn-purple }

[Download KUAL (Coplate)](https://www.mobileread.com/forums/showthread.php?t=225030#:~:text=A%20%7C%20Upstream-,KUAL%20(coplate),-%7C%20KUAL%2D7202402){: .btn .btn-purple }

[Download KUAL](https://www.mobileread.com/forums/showthread.php?t=225030#:~:text=A%20%7C%20MRPI-,KUAL,-%7C%20KUAL%2Dv2.7.33){: .btn .btn-purple }
<br/>
(The above MRPI is provided by [Marek](https://fw.notmarek.com/khf/))

## Installing KUAL+MRPI
1. Connect your Kindle to your PC
2. Copy the `extensions` and `mrpackages` folders from the `MR Package Installer` file you downloaded to the root of your Kindle
3. In the KUAL file you downloaded, open it and locate the `Update_KUALBooklet_*_install.bin` and copy it into the `mrpackages` folder on the Kindle
4. Eject and unplug your Kindle
5. Enter `;log mrpi` into the search bar and click enter
6. `Hush, little baby...` should show up at the bottom of the screen, you have now installed KUAL and MRPI


Now we can disable OTA updates in-case Amazon releases an update which breaks the hotfix (this has happened in the past)

[Disabling OTA Updates](./disable-ota){: .btn .btn-purple}

## Troubleshooting
- Verify the location of all the folders and files on the Kindle
- Try copying the `Update_KUALBooklet_hotfix_*_install.bin` file to the root of your Kindle when connected to your PC, and then go to `Settings` > `Update Your Kindle`, then resume from `step 5`

## Credits
- Original guide written by [Neon](https://www.mobileread.com/forums/member.php?u=329187)