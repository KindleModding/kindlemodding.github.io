---
layout: default
parent: Jailbreaking Your Kindle
title: Kindle Jailbreak FAQ
weight: 98
---

# Frequently Asked Questions

We recommend reading this article before or after jailbreaking your Kindle device and share it with other people.

<p class="important">
Most of these instructions are subjected to changes due to newer jailbreaks, patches, extensions, firmware versions, etc. <br><code>(Last updated: Apr 09, 2026)</code>
</p>

## General/Account
---

### My Kindle updated to a firmware version that doesn't have any jailbreak method! Can I still jailbreak it?

**No**.

You'll have to wait for a new jailbreak method (or patch) to be released. **This may take weeks or even months**. To protect your Kindle from automatic updates, **forget** all saved internet connections, enable Airplane mode, and wait.

If you still want to use the internet on your Kindle while avoiding automatic updates, you might find [this guide helpful](https://kindlemodding.org/jailbreaking/prevent-auto-update).

#### Can I downgrade my Kindle so I can jailbreak it?

**No**.

Your Kindle must be jailbroken first in order to downgrade. This is because Amazon has never provided a way to downgrade on stock firmware.

### Can I jailbreak my Kindle if my device is unregistered/blacklisted?

[Nosebleed Jailbreak](../jailbreaking/Nosebleed) reportedly, works for some blacklisted devices.

For devices on firmware `5.16.2.1.1` or below, you can try any of the jailbreaking methods listed in [Legacy Jailbreaks](../jailbreaking/Legacy/).

### Can I deregister my Kindle after jailbreaking?

Yes, your Kindle will remain jailbroken whether you log back in or log out.

However, deregistering will delete all files within the documents folder, including the KUAL launcher booklet and any other scriplets transferred to the device, which may partially break extensions. Be sure to back up all your files first.

### Can I un-jailbreak my Kindle?

Yes, re-enable automatic updates first (`Restore` option in `renametobin`) to avoid an update block. Then, perform a factory reset on the device and install the same firmware update (or any higher version).

### Will the jailbreak get my Amazon account banned?

No reports of Amazon accounts being banned after jailbreaking have been reported so far. However, **please refrain** from telling support that you have modified your device.

### Will this void the warranty on my Kindle device?
Probably.

### How do I get the Amazon store back again?

[Read and follow this guide](https://kindlemodding.org/jailbreaking/post-jailbreak/re-enabling-the-store/).

### What does soft-float and hard-float firmware means?

Starting with version 5.16.3, Kindles started using hard-float architecture (on-chip floating point unit) for most processing tasks, compared to the soft-float architecture, which emulated in software.

While the underlying system appears mostly the same, many internal changes have made a lot of jailbreaking tools and extensions unusable in modern firmware versions.

This ultimately means that most extensions found on MobileRead/Discord servers won't work on hard-float firmware or viceversa unless explicitly stated (i.e NiLuJe's Screensaverhack).

## Apps and eBooks
---

### Can I still use the default reader after jailbreaking?

Yes.

#### Can I still sideload books after jailbreaking?

Yes.

#### Will my books and highlights be deleted after jailbreaking?

No.

<p class="warning">
If your device has been in Airplane mode for a long period of time, there is a possibility that <a href="https://www.mobileread.com/forums/showpost.php?p=4419300&postcount=409">Amazon will delete all sideloaded books</a> from your device after reconnecting to Wi-Fi due to an internal book tag. This can happen regardless of whether your device is jailbroken or not. Backup your books whenever you can

</p>

### Will Libby/Readwise/GoodReads/Kindle Unlimited/Send To Kindle still work after jailbreaking?

Yes. Jailbreaking doesn’t interfere with any of these services.

#### Can I use those applications within KOReader?

Unless there's a plugin for it, no.

### Can I install Android apps on my jailbroken Kindle (Libby, Nook, Webtoon)?

Unless there's a extension/port for any of them, no.

### How do I read my Amazon ebooks within KOReader?

KOReader currently doesn’t (and likely never will) support the proprietary formats that Amazon converts all ebooks into (KFX, AZW3, and very limited support for MOBI). It is recommended to get all your books as EPUB and store them in a separate folder for easy access.

### How do I read my Libby books?

You cannot use the Libby service within KOReader. You can get the EPUB file from Libby by following [this guide](https://help.libbyapp.com/en-us/6059.htm).

### Where can I download free e-books?

**You can Google this.**

## KOReader
---

### What is the difference between the three KOReader launch options?

- `"Start KOReader"`: The designed way to start KOReader.
- `"Start KOReader (no framework)"`: Temporarily "kills" the Kindle UI to allocate more resources to KOReader.
- `"Start KOReader (ASAP)"`: Skips a couple of checks and starts KOReader as soon as possible.

### I can't no longer transfer files through USB while I am on KOReader!

KOReader currently does not support USBMS mode (USB transfer) and will only charge the device, if you want to transfer files you must exit KOReader to do so. 

### Do I have to launch KOReader through KUAL?

Not necessarily.

You can launch it with simple [scriptlets](https://kindlemodding.org/kindle-dev/scriptlets.html), specifically, Marek's launcher that is available [here](https://scriptlets.notmarek.com/).

[KOR booklet launcher (made by yparitcher)](https://github.com/yparitcher/KUAL_Booklet/releases/) is also available to install. You can further customize both the KUAL booklet and the KOReader launcher with the [coversetter extension made by Stanner](https://www.mobileread.com/forums/showpost.php?p=4222466&postcount=15).

## Technical
---

### What is the "root directory"?

It's the first directory you see when you plug the device into your computer.

If you have SSH access to the device, this directory can be found at `/mnt/us/`.

### Can I update/factory reset/downgrade my Kindle after jailbreaking?

Yes, but you must first enable Airplane mode and enable automatic updates again (`Restore` option in `renametobin`) to avoid any potential update blocks or unwanted automatic updates.

When updating, ensure that the newer version supports a jailbreak.

<p class="note">
After updating/factory reset/downgrading, reinstall the hotfix from scratch. KUAL and some others extensions <strong>may</strong> need to be reinstalled too.
</p>

### How do I downgrade my Kindle?

[Read and follow this guide](../firmware-and-flashing/downgrading/#downgrading-your-kindle).

### Where can I download firmware update files?

[Read and follow this guide](../firmware-and-flashing/downloading-updates.html).

Find your exact model, find the download link and re-type the numbers to get the firmware version you want.

### How do I use Scriptlets (.sh)?

As explained in the [Scriptlets section](https://kindlemodding.org/kindle-dev/scriptlets.html#siptlets), copy the scriptlet file into the documents folder (`/documents`). Once you're in the library view mode on Kindle, simply click on it.

### How can I check that the automatic updates have been disabled after using `renametobin`?

Download the "Check OTA Status" scriptlet from [here](https://scriptlets.notmarek.com/)

### Is it possible to change screensavers in the native Kindle UI?

There are currently no extensions to change the screensavers in hard-float firmware. If you're running on soft-float firmware it is still possible to change them with the [NiLuJe's screensaver hack](https://www.mobileread.com/forums/showthread.php?t=195474). Keep in mind that this extension may not work on some final soft-float firmware versions.

<p class="caution">
<strong>Please do not make the mistake of installing this extension under hard-float firmware</strong>

</p>

<p class="note">
You can easily change screensavers with <a href="https://koreader.rocks/user_guide/">KOReader</a> (search for the "screensavers" feature)
</p>

## Jailbreaking
---

### How can I check if my device is jailbroken?

Type `;log` into the search bar, if a message pop ups, you're jailbroken.

### KUAL stopped working!/I can't no longer launch any of my extensions!
Verify if your device is still jailbroken by typing `;log` into the search bar.

- If it prompted any text, [reinstall the hotfix and KUAL](https://kindlemodding.org/jailbreaking/post-jailbreak/setting-up-a-hotfix/) from scratch.
- If not [re-jailbreak](https://kindlemodding.org/kindle-models) your device.
- If everything else failed, factory reset your device and start the jailbreak from scratch. 

### I can't no longer update my Kindle after a factory reset/update!

If you reset your Kindle in a jailbroken state with renametobin left enabled, your Kindle may be in a locked state. To fix this, read [this guide](https://kindlemodding.org/jailbreaking/recovering-from-a-reset.html).

### I get a message saying "Failed to remount rootfs RO, waiting"!

This is expected, you can safely reboot your device manually (holding the power button until you get the `Restart` option)

### My device hasn't rebooted after the jailbreaking pop-up!

If you're using Winterbreak, unless the Kindle displays the message "You are now ready to install the hotfix" in small text, you can safely continue with the post-jailbreak instructions . If it doesn't, something went wrong during the jailbreak process, and you'll have to try again.

<p class="important">
Remember to delete any automatic update file that might have appeared.
</p>

### I kept getting random "KPPMainAppV2" books added to my Kindle library, what should I do!?

Kindles usually generate those books after detecting any kind of error (mostly common after exiting KOReader frameworkless), you can safely delete them. You can also disable the generation of these books by creating an empty file named `DISABLE_CORE_DUMP` to the visible USB storage root of your device.

This is also the case for the "Collecting Debug Info" message.

### I have successfully jailbroken my device, what now?

You can do one of the following:

- [Install KOReader](https://kindlemodding.org/jailbreaking/post-jailbreak/koreader.html)
- [Downgrade your Kindle](https://kindlemodding.org/firmware-and-flashing/downgrading/)
- Download scriptlets:
    - [Marek's Scriplets](https://scriptlets.notmarek.com/)
    - [Kindle Modding Tools & Resources](https://kindlemodshelf.me/)
- [Develop more extensions](https://kindlemodding.org/kindle-dev/) 
- Browse [MobileRead](https://www.mobileread.com/forums/forumdisplay.php?f=150) or the Kindle Modding Community Discord Server for more scriplets and extensions.
- Install Alpine Linux
- [Support Winterbreak & the Wiki ❤️](https://ko-fi.com/hackerdude) 

### What does the KFT option in the settings menu do?

<p>¯\_(ツ)_/¯</p>

## Credits
- Written by Bundlerocks
