---
layout: default
parent: Firmware and Flashing
title: Downgrading Your Kindle
nav_order: 2
---

# Downgrading Your Kindle

{: .warning }
A jailbroken Kindle is required - You cannot downgrade a Kindle on stock firmware


## Before You Start

- You do this at your own risk
- You obviously cannot downgrade to a lower firmware than the one your Kindle originally had. You also cannot downgrade with updates marked for other devices different than yours
- Backup any important data from your Kindle as this process will **wipe** everything in the device
- [Restore OTA updates](../../jailbreaking/post-jailbreak/disable-ota) (Click on `Restore`)
- Disable USBNetwork (USBMS mode) if you have the USBNetwork extension installed

## Prerequisites
- A PC
- A jailbroken Kindle (using the [Universal Hotfix](../../jailbreaking/post-jailbreak/setting-up-a-hotfix))
- [Appropriate Update Firmware .bin you want to downgrade](../downloading-updates).

## Downgrading
1. Turn on Airplane Mode, disable USBNetwork and enable OTA updates.
2. Download the [Allow Downgrade scriplet](./AllowDowngrade.sh) created by [Marek](https://www.mobileread.com/forums/member.php?u=340787).
3. Plug your Kindle into your PC and copy the scriplet into the `documents` folder.
4. Eject and unplug your Kindle.
5. Navigate your library and click on the "Allow Downgrade" booklet.
6. Your Kindle will print text on screen for a couple of seconds and will return to the library menu. Downgrading should be enabled now.
7. Copy the `update_kindle_*.bin` file to your Kindle root directory. <span style="color: #cf4444">**Do not unplug your Kindle**</span>, hold the power button until your device reboots.
8. Your Kindle will now install the firmware you copied to it.

## Post-Downgrading

Congratulations! Your Kindle has been downgraded.

{: .note}
Devices using the Universal Hotfix will need to re-install it and re-run the booklet.

{: .note}
Large jumps in firmware versions might cause your Kindle to display a white screen after downgrading. This can be easily fixed by plugging your Kindle back into your PC, sideload an empty file named `DO_FACTORY_RESTORE` (without extension) into the root directory and force a reboot by holding the power button for 20 or 30 seconds.

{: .warning }
Keep in mind that not every extension out there was not made for hard float firmware (`>=5.16.3`) or soft float firmware (`<=5.16.2.1.1`), if you make a jump between those two updates, make sure you're installing the correct packages and extensions.

{: .highlight }
Some devices may let you skip the initial device set-up by simply restarting the device. But if your device keeps prompting the set-up, do it quickly (skipping Wi-Fi), and then delete the partial OTA download located in your Kindle root directory.


After downgrading, you will need to re-do the post-jailbreak instructions:

[Setting Up A Hotfix](../../jailbreaking/post-jailbreak/setting-up-a-hotfix/){: .btn .btn-purple}


## Credits
- Written by Bundlerocks, adapted from [Neon](https://kindlemodding.gitbook.io/kindlemodding/miscellaneous/downgrading-your-kindle-firmware)
