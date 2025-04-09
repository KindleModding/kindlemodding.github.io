---
layout: default
parent: Jailbreaking Your Kindle
title: Kindle Jailbreak F.A.Q
nav_order: 98
---

# Frequently Asked Questions

We recommend reading this article before or after jailbreaking your Kindle device and share it with other people.

## General/Account
---

### Can I jailbreak my Kindle with Winterbreak if my device is unregistered/blacklisted?

Winterbreak needs your Kindle to be registered and have a valid, internet-connected WiFi network saved.

If you have a Kindle device that is no longer updated (reached End of Life) or is stuck on firmware version 5.16.2.1.1 or below, or it's simply blacklisted, you can use one of the [Legacy jailbreaking methods](https://kindlemodding.org/jailbreaking/Legacy/).

### Can I remove my account after jailbreaking?

Yes, but you will have to log in again if you want to jailbreak from scratch. The jailbreak will still work whether you log back in or log out. 

Take note that after unregistering the device, the Kindle will erase all documents located in the documents folder, including the KUAL Launcher booklet and any other scripts that have been transferred. Make sure to backup these files first.

### Can I un-jailbreak my Kindle?

Yes, perform a factory reset on the device, then install the same (or higher) firmware update.

### Will this get my Amazon account banned?

No reports of Amazon accounts being banned after jailbreaking have been reported so far. However, please refrain from telling support that you have modified your device.

### My Kindle updated to an unsupported firmware version! Can I still jailbreak?

No 🥀.

If you still want to jailbreak, disconnect the device from the internet (and forget all saved internet connections) and wait for a new jailbreak method (or patch) to be released. This may take weeks or even months.

### How do I get the Amazon store back again?

Delete the `.active_sandbox_folder` folder and reboot. By this point, you should have already disabled the updates with [renametobin](https://kindlemodding.org/jailbreaking/post-jailbreak/disable-ota.html).

### What does soft float and hard float firmware means?

After version 5.16.3, Kindles started using a hard float architecture (on-chip floating point unit) for most processing tasks, compared to the soft float architecture, which was emulated in software.

While the underlying system appears mostly the same, many internal changes have made a lot of jailbreaking tools and extensions unusable in modern Kindles.

This ultimately means that most extensions found on MobileRead/Discord server won't work on hard float firmware unless explicitly stated (i.e NiLuJe's Screensaverhack).

## Apps and eBooks
---

### How do I read my Amazon ebooks within KOReader?

KOReader currently doesn’t (and likely never will) support the proprietary formats that Amazon converts all ebooks into (KFX, AZW3, and very limited support for MOBI). It is recommended to get all your books as EPUB and store them in a separate folder for easy access.

### How do I read my Libby books?

You cannot use the Libby service within KOReader. You can get the EPUB file from Libby by following [this guide](https://help.libbyapp.com/en-us/6059.htm).

### Will Libby/Readwise/GoodReads/Kindle Unlimited still work after jailbreaking?

Yes. Jailbreaking doesn’t interfere with any of these services.

#### Can I use those applications within KOReader?

Unless there's a plugin for it, no.

### Can I install Android apps on my jailbroken Kindle (Libby, Nook, Webtoon)?

Unless there's a extension/port for any of them, no.

### Where can I download free ebooks?

**You can Google this.**

## KOReader
---

### What is the difference between the three KOReader launch options?

- `"Start KOReader"`: The designed way to start KOReader.
- `"Start KOReader (no framework)"`: Temporarily "kills" the Kindle UI to allocate more resources to KOReader.
- `"Start KOReader (ASAP)"`: Skips a couple of checks and starts KOReader as soon as possible.

### Do I have to launch KOReader through KUAL?

Not necessarily.

If you're running hard float firmware, you can launch them with simple [scriplets](https://kindlemodding.org/kindle-dev/scriptlets.html). (BOOKLET SCRIPLETS HERE)

If you're running soft float firmware you can try installing the [KUAL booklet launcher (made by yparitcher)](https://github.com/yparitcher/KUAL_Booklet/tree/V1.4) extension. You can further customize both the booklet and the [KOR launcher with the coversetter extesnion made by Stanner](https://www.mobileread.com/forums/showpost.php?p=4222466&postcount=15).

## Technical
---

### Can I update/restart/downgrade my Kindle after jailbreaking?

Yes, but you must first disable the internet connection and enable automatic updates again (`Restore` option in renametobin) to avoid any potential self-blocks or unwanted automatic updates.

When updating, ensure that the newer version supports the jailbreak.

### How do I downgrade my Kindle?

[Read and follow this guide](https://kindlemodding.org/firmware-and-flashing/downgrading/#downgrading-your-kindle).

### Where can I download firmware update files?

[Read and follow this guide](https://kindlemodding.org/firmware-and-flashing/downloading-updates.html).

### How do I use Scriplets (.sh)?

As explained in the [Scriplets section](https://kindlemodding.org/kindle-dev/scriptlets.html#siptlets), copy the scriptlet file into the documents folder (`/mnt/us/documents`). Once you're in the library view mode on Kindle, simply click on it.

### How can I check that the automatic updates have been disabled?

Download the following scriplet: (OTA CHECKER SCRIPTLET HERE)

### How can I disable ADs (Special Offers)?

Download the following scriplet: (AD DISABLING SCRIPTLET HERE)

### Is it possible to change screensavers in the native Kindle UI?

Yes, but it is not recommended at least on hard float firmware, as it is very easy to brick the device.

If you still want to change the screensavers, check the details of your default Kindle screensavers inside the `/usr/share/blanket/screensavers` folder and set the custom ones with the same name prefix and settings (bit-depth and resolution). You can either replace them all or add them to the slideshow queue.

Please note that even after following these precautions, it is not guaranteed your device won’t brick, especially if you're using GIMP to export.

{: .highlight}
If you are, however, running soft float firmware prior to 5.16.2.1.1 you can install [NiLuJe's screensaver hack](https://www.mobileread.com/forums/showthread.php?t=195474). **Please do not make the mistake in installing this extension on hard float firmware.**

{: .note}
You can easily change screensavers with [KOReader](https://koreader.rocks/user_guide/) /(search for the "screensavers" option).

## Jailbreaking
---

### How can I check if my device is jailbroken?

Type `;log` into the search bar, if a message pop ups, you're jailbroken.

### My Kindle doesn't prompt anything after typing the command mentioned above!

[Re-install the hotfix](https://kindlemodding.org/jailbreaking/post-jailbreak/setting-up-a-hotfix/). If you cannot re-install the hotfix, [re-jailbreak your device](https://kindlemodding.org/jailbreaking/getting-started.html).

### I get a message saying "Failed to remount rootfs RO, waiting"!

This is expected, you can safely reboot your device manually (holding the power button until you get the `Restart` option)

### My device hasn't rebooted after the jailbreaking pop-up!

Unless the Kindle displays in small text the message: “You are now ready to install the hotfix”, you can safely reboot and continue with the post-jailbreak instructions. If not, something wrong happened in the jailbreak process.

Remember to delete any automatic update file that might have appeared.

### I can't no longer update my Kindle after a factory reset/update!

If you reset your Kindle in a jailbroken state with OTABlocker, then your Kindle may be in a broken state, to fix this, read [this guide](https://kindlemodding.org/firmware-and-flashing/downgrading/).

### I have successfully jailbroken my device, what now?

You can do one of the following:

- Install KOReader
- [Downgrade your Kindle](https://kindlemodding.org/firmware-and-flashing/downgrading/)
- [Download some scriplets](https://scriptlets.notmarek.com/)
- [Develop more extensions](https://kindlemodding.org/kindle-dev/) 
- Browse MobileRead or the Kindle Modding Community Discord server for more scriplets and extensions.
- Install Alpine Linux
- [Support Winterbreak & the Wiki ❤️](https://ko-fi.com/hackerdude) 

### What does the KFT option in the settings menu do?

:) 

## Credits
- Written by Bucks
