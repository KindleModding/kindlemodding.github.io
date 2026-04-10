---
layout: default
parent: Firmware and Flashing
title: Downgrading Your Kindle
weight: 2
slug: index
---

# Downgrading Your Kindle

<p class="important">
<strong>Downgrading is only possible on a jailbroken Kindle.</strong> This means that if your device is not jailbroken, you will not be able to downgrade. You can either jailbreak your device if your current firmare version has any method available, or wait for a compatible one to be released
<p>

<p class="note">
<strong>Newer</strong> Kindle models <em>might</em> not be able to downgrade below<code>5.18.x</code> or across versions within the <code>5.18.x</code> branch, due to Amazon's bootloader hardening. Any additional information about this would be appreciated
<p>

## Before You Start

- You do this at your own risk
- Downgrading to a firmware version lower than the one originally installed on your Kindle is not possible. Aditionally, update files intended for devices different from your own also cannot be used.
- Enable Airplane mode and [Restore OTA updates](../../jailbreaking/post-jailbreak/disable-ota) (click on `Restore`)
- Disable USBNetwork (USBMS mode) if you have the USBNetwork extension installed

## Prerequisites
- A PC
- A jailbroken Kindle (using the [Universal Hotfix](../../jailbreaking/post-jailbreak/setting-up-a-hotfix))
- [An appropriate firmware .bin file for the version you want to downgrade to](../downloading-updates).

## Downgrading
1. Turn on Airplane Mode, disable USBNetwork and enable OTA updates.
2. Download the [Allow Downgrade scriplet](./AllowDowngrade.sh) created by [Marek](https://www.mobileread.com/forums/member.php?u=340787).
3. Plug your Kindle into your PC and copy the scriplet into the `documents` folder.
4. Eject and unplug your Kindle.
5. Navigate your library and click on the "Allow Downgrade" booklet.
6. Your Kindle will print text on screen for a couple of seconds and will return to the library menu. Downgrading should be enabled now.
7. Copy the `update_kindle_*.bin` file to your Kindle root directory. <span style="color: #cf4444">**Do not eject or unplug your Kindle**</span>, hold the power button until your device restarts.
8. Your Kindle will now install the firmware you copied to it.

<p class="note">
Since firmware <code>5.18.x</code>, some Kindle models may reject the downgrade and return to the UI. You can retry by transferring the <code>.bin</code> file again and rebooting with a closer firmware downgrade. If the downgrade fails again, you will have to wait for a new downgrade method
</p>

## Post-Downgrading

Congratulations! Your Kindle has been downgraded. To keep the jailbreak, you will need to re-do the post-jailbreak instructions:

<p class="note">
Large jumps in firmware versions might cause your Kindle to display a white screen after downgrading. This can be easily fixed by plugging your Kindle back into your PC, sideload an empty file named <code>DO_FACTORY_RESTORE</code> (without a file extension) into the root directory and force a reboot by holding the power button for 20 or 30 seconds. Make sure to backup your files before doing this
</p>

<p class="important">
Extension compatibility differs between hard-float (>=5.16.3) and soft-float (<=5.16.2.1.1) firmware. Downgrading to soft-float firmware or viceversa may cause some extensions to stop working
</p>

<p class="note">
Some devices may let you skip the initial device set-up by simply restarting the device, but some others will keep prompting the set-up. In this case, do sign in but skip the Wi-Fi prompt, then delete the <code>update.bin.tmp.partial</code> file located in your Kindle root directory if present
</p>

<p class="tip">
If you notice a <strong>significantly</strong> slower performance after the downgrade, it is recommended to perform a factory reset. Don't forget to backup your files and setting up the hotfix first
</p>

<a class="button" href="../../jailbreaking/post-jailbreak/setting-up-a-hotfix/">Setting Up A Hotfix</a>

## Credits
- Written by Bundlerocks, adapted from [Neon](https://kindlemodding.gitbook.io/kindlemodding/miscellaneous/downgrading-your-kindle-firmware)
