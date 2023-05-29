---
layout: default
grand_parent: Jailbreaking Your Kindle
parent: Post Jailbreak
title: Disabling OTA Updates
nav_order: 3
---

# Disabling OTA Updates
Kindles automatically update when connected to WiFi, which despite a `hotfix`, can often cause instabilities on jailbroken systems or outright remove the jailbreak.

## <=5.10.x
Disabling OTA Updates on firmware versions `<=5.10.x` is much easier
1. Plug your Kindle into your PC
2. Create a folder called `update.bin.tmp.partial` in the root fof your Kindle
3. Set it to `read-only` (open properties and select the `read-only` checkbox and then click on `apply`)
4. Eject and unplug your Kindle

## 5.11+

{: .warning}
This portion of the guide is only for Kindles with Firmware 5.11.x or above

### Prerequisites
- A PC

1. Download the [renameotabin](https://www.mobileread.com/forums/showpost.php?p=4076733&postcount=25) extension
2. Plug your Kindle into your PC
3. Copy the `renameotabin` folder from the zip to the `extensions` folder on your Kindle
4. Eject and unplug your Kindle
5. Open `KUAL`
6. Select `Rename OTA Binaries`
7. Select `Rename`
8. Your Kindle will now Reboot

{: .important-title}
If you want to reset your Kindle, you will need to restore the binary, you can do this by opening `KUAL`, selecting `Rename OTA Binaries` and then this time selecting `Restore` instead of rename.