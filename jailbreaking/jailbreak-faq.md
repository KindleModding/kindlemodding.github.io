---
layout: default
parent: Jailbreaking Your Kindle
title: Kindle Jailbreak FAQ
nav_order: 98
---

# Frequently Asked Questions

We recommend reading this article before or after jailbreaking your Kindle device and share it with other people.

{: .note}
Most of these instructions are subjected to changes due to newer jailbreaks, patches, extensions, firmware versions, etc. <br>`(Last updated: Aug 28, 2025)`

## General/Account
---

### Can I jailbreak my Kindle with Winterbreak if my device is unregistered/blacklisted?

Winterbreak needs your Kindle to be registered, it also needs a valid, internet-connected WiFi network saved.

It's still possible to jailbreak an unregistered/blacklisted device, but currently, the only jailbreaking methods for those devices work on or below firmware `5.16.2.1.1`. You can find these jailbreaking methods in [Legacy Jailbreaks](https://kindlemodding.org/jailbreaking/Legacy/).

### My Kindle updated to a firmware version that doesn't have any jailbreak method! Can I still jailbreak it?

**No**.

You'll have to wait for a new jailbreak method (or patch) to be released. **This may take weeks or even months**. To protect your Kindle from automatic updates, **forget** all saved internet connections, enable Airplane mode, and wait.

If you still want to use the internet on your Kindle while avoiding automatic updates, you might find [this guide helpful](https://kindlemodding.org/jailbreaking/prevent-auto-update.html).

#### Can I downgrade my Kindle so I can jailbreak it?

**No**.

Your Kindle must be jailbroken first in order to downgrade. This is because Amazon has never provided a way to downgrade on stock firmware.

### Can I remove my account after jailbreaking?

Yes, but for Winterbreak, you will have to log in again if you want to jailbreak from scratch. Your Kindle will remain jailbroken whether you log back in or log out.

{: .info}
After unregistering, the Kindle will delete all files located in the documents folder, including the KUAL Launcher booklet and any other scripts that have been transferred. Be sure to back up these files first.

### Can I un-jailbreak my Kindle?

Yes, re-enable automatic updates first (`Restore` option in `renametobin`) to avoid an update block. Then, perform a factory reset on the device and install the same firmware update (or a higher version). 

### Will the jailbreak get my Amazon account banned?

No reports of Amazon accounts being banned after jailbreaking have been reported so far. However, please refrain from telling support that you have modified your device.

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

{: .note}
If your device has been in Airplane mode for a long period of time, there is a possibility that [Amazon will delete all sideloaded books](https://www.mobileread.com/forums/showpost.php?p=4419300&postcount=409) from your device after reconnecting to WiFi due to an internal book tag. This can happen regardless of whether your device is jailbroken or not. Backup your books whenever you can

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

A [KUAL booklet launcher (made by yparitcher)](https://github.com/yparitcher/KUAL_Booklet/releases/) extension is also available to install. You can further customize both the KUAL booklet and the KOR launcher with the [coversetter extension made by Stanner](https://www.mobileread.com/forums/showpost.php?p=4222466&postcount=15).

## Technical
---

### What is the "root directory"?

It's the first directory you see when you plug the device into your computer.

If you have SSH access to the device, this directory can be found at `/mnt/us/`.

### Can I update/factory reset/downgrade my Kindle after jailbreaking?

Yes, but you must first enable Airplane mode and enable automatic updates again (`Restore` option in `renametobin`) to avoid any potential update blocks or unwanted automatic updates.

When updating, ensure that the newer version supports a jailbreak.

{: .info}
After updating/factory reset/downgrading, re-install the hotfix from scratch. KUAL and some others extensions *may* need to be re-installed too.

### How do I downgrade my Kindle?

[Read and follow this guide](https://kindlemodding.org/firmware-and-flashing/downgrading/#downgrading-your-kindle).

### Where can I download firmware update files?

[Read and follow this guide](https://kindlemodding.org/firmware-and-flashing/downloading-updates.html).

Find your exact model, find the download link and re-type the numbers to get the firmware version you want.

### How do I use Scriptlets (.sh)?

As explained in the [Scriptlets section](https://kindlemodding.org/kindle-dev/scriptlets.html#siptlets), copy the scriptlet file into the documents folder (`/documents`). Once you're in the library view mode on Kindle, simply click on it.

### How can I check that the automatic updates have been disabled after using `renametobin`?

Download the "Check OTA Status" scriptlet from [here](https://scriptlets.notmarek.com/)

### Is it possible to change screensavers in the native Kindle UI?

Although there are currently no extensions to change the screensavers in hard-float firmware, it is still possible to change them, but it is not recommended as it is very easy to brick the device.

If you still want to change the screensavers, check the details of your default Kindle screensavers inside the `/usr/share/blanket/screensavers` folder, get root writing permissions, and set the custom ones with the same name prefix and settings (bit-depth and resolution). You can either replace them all or add them to the slideshow queue.

Please note that even after following these precautions, it is not guaranteed your device won’t brick, especially if you're using GIMP to export the images.

{: .info}
If you are, however, running soft-float firmware prior to or on 5.16.2.1.1 you can install [NiLuJe's screensaver hack](https://www.mobileread.com/forums/showthread.php?t=195474). **Please do not make the mistake of installing this extension on hard-float firmware.**

{: .note}
You can easily change screensavers with [KOReader](https://koreader.rocks/user_guide/) (search for the "screensavers" feature).

## Jailbreaking
---

### How can I check if my device is jailbroken?

Type `;log` into the search bar, if a message pop ups, you're jailbroken.

### KUAL stopped working!/I can't no longer launch any of my extensions!
Verify if your device is still jailbroken by typing `;log` into the search bar.

- If it prompted any text, [re-install the hotfix and KUAL](https://kindlemodding.org/jailbreaking/post-jailbreak/setting-up-a-hotfix/) from scratch.
- If not [re-jailbreak](https://kindlemodding.org/jailbreaking/kindle-models.html) your device.
- If everything else failed, factory reset your device and start the jailbreak from scratch. 

### I can't no longer update my Kindle after a factory reset/update!

If you reset your Kindle in a jailbroken state with renametobin left enabled, your Kindle may be in a locked state. To fix this, read [this guide](https://kindlemodding.org/jailbreaking/recovering-from-a-reset.html).

### I get a message saying "Failed to remount rootfs RO, waiting"!

This is expected, you can safely reboot your device manually (holding the power button until you get the `Restart` option)

### My device hasn't rebooted after the jailbreaking pop-up!

If you're using Winterbreak, unless the Kindle displays the message "You are now ready to install the hotfix" in small text, you can safely continue with the post-jailbreak instructions . If it doesn't, something went wrong during the jailbreak process, and you'll have to try again.

{: .info}
Remember to delete any automatic update file that might have appeared.

### I kept getting random "KPPMainAppV2" books added to my Kindle library, what should I do!?

Kindles usually generate those books after detecting any kind of error (mostly common after exiting KOReader frameworkless), you can safely delete them. You can also disable the generation of these books by creating an empty file named `DISABLE_CORE_DUMP` to the visible USB storage root of your device.

This is also the case for the "Collecting Debug Info" message.

### I have successfully jailbroken my device, what now?

You can do one of the following:

- [Install KOReader](https://kindlemodding.org/jailbreaking/post-jailbreak/koreader.html)
- [Downgrade your Kindle](https://kindlemodding.org/firmware-and-flashing/downgrading/)
- [Download some scriptlets](https://scriptlets.notmarek.com/)
- [Develop more extensions](https://kindlemodding.org/kindle-dev/) 
- Browse [MobileRead](https://www.mobileread.com/forums/forumdisplay.php?f=150) or the Kindle Modding Community Discord Server for more scriplets and extensions.
- Install Alpine Linux
- [Support Winterbreak & the Wiki ❤️](https://ko-fi.com/hackerdude) 

### What does the KFT option in the settings menu do?

<p>¯\_(ツ)_/¯</p>

## Credits
- Written by Bundlerocks
