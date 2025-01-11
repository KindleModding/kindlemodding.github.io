---
layout: default
parent: Firmware and Flashing
title: Downgrading your Kindle
nav_order: 3
---

# Downgrading your Kindle
Downgrading your Kindle is a simple and painless process if you **read the notes and instructions first**.

{: .warning }
**It is currently not possible to downgrade your Kindle if is not jailbroken. I repeat, you cannot downgrade, without jailbreaking.**

## Notes

- You do this at your own risk
- You obviously cannot downgrade to a lower firmware than the one your Kindle originally had. You also cannot downgrade with updates marked for other devices different than yours
- Backup any important data from your Kindle as this process will **wipe** everything in the device
- To avoid an automatic update after successfully downgrading, you will need to forget all near internet connections: Settings > Wi-Fi > Wi-Fi networks > Click on any Wi-fi connection > Forget
- [Restore OTA updates](../jailbreaking/post-jailbreak/disable-ota) (Click on `Restore`)
- Disable USBNetwork (USBMS mode) if you have the USBNetwork extension installed

## Prerequisites
- A PC
- A jailbroken Kindle
- [Appropriate Update Firmware .bin you want to downgrade](./downloading-updates).

## Downgrading

***Read the notes and the instructions first.***

1. Forget all near Wi-Fi connections, turn on Airplane Mode, disable USBNetwork and enable OTA updates (see [Notes](#notes))
2. Download the following [Allow Downgrade scriplet](https://cdn.discordapp.com/attachments/1325151306083733626/1325151306280861826/AllowDowngrade.sh?ex=67835093&is=6781ff13&hm=1a0d7b836fb84ba25a59426bb78d317225c24df5a4a2473bea9146485ac4e0f7&) made by Marek
3. Connect your Kindle into your PC and copy the scriplet into the `documents` folder
5. Eject and unplug your Kindle
6. Navigate your library and click on the "Allow Downgrade" booklet
7. Your Kindle should reboot automatically, now set *internally* with the lowest firmware possible
8. Once rebooted, copy the `update_kindle_*.bin` file to your Kindle root directory. <span style="color:#cf4444">**Do not unplug your Kindle just yet**</span>, hold the power button until your device reboots
9. Your Kindle should be "upgrading" to lower firmware
10. Go to [Post-Downgrading](#post-downgrading)

## Post-Downgrading

Congratulations! Your Kindle has been downgraded.

***But*, you will need to setup the hotfix once again to keep the jailbreak alive** as the "Run Hotfix" booklet will not work. It is also recommended to factory reset then "update" the device with the same firmware to clear any left residue.

(Downgrade > Setup hotfix w/booklet > Factory reset > Setup hotfix w/booklet > Update same version > Run "Hotfix" Booklet)

{: .highlight }
Keep in mind that not every extension out there was not made for hard float firmware (5.16.3=>) or soft float firmware (<=5.16.2.1.1), if you made a jump between those two updates, make sure you're installing the correct packages and extensions.

{: .highlight }
Some devices may let you skip the initial device set-up by simply restarting the device. But if your device keeps prompting the set-up, do it quickly (skipping Wi-Fi), and then delete the partial OTA download located in your Kindle root directory.

After installing the hotfix, you will need to install KUAL and MPRI to block OTA updates.

[Install KUAL and MRPI](../jailbreaking/post-jailbreak/installing-kual-mrpi){: .btn .btn-purple}

## Credits
- Written by Bucks, adapted from [Neon](https://kindlemodding.gitbook.io/kindlemodding/miscellaneous/downgrading-your-kindle-firmware)
