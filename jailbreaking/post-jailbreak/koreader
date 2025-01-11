---
layout: default
grand_parent: Jailbreaking Your Kindle
parent: Post Jailbreak
title: KOReader
nav_order: 4
---

# KOReader
*KOReader is a document viewer for E Ink devices. Supported fileformats include EPUB, PDF, DjVu, XPS, CBT, CBZ, FB2, PDB, TXT, HTML, RTF, CHM, DOC, MOBI and ZIP files. It’s available for Kindle, Kobo, PocketBook, Android and desktop Linux.*[*](https://koreader.rocks/)

Installing KOReader is as easy as just dragging and dropping a couple of folders to your device, but identifying which version you need can be confusing.

{: .highlight }
Your Kindle must be jailbroken and have MPRI and KUAL installed to be able to run KOReader.

# Downloading 

### For firmware <=5.16.2.1.1

If you're currently running soft float firmware (<=5.16.2.1.1), you can download KOReader from the [official release page](https://github.com/koreader/koreader/releases).

Make sure to download the correct package for your Kindle:

- `kindle-legacy`: K2, DX, K3 (and all their variants).
- `kindle`: K4, K5, PW1
- `kindlepw2`: Everything else, starting from the PW2 (i.e., PW2, KV, KT2, PW3, KOA, KT3, KOA2, PW4, KT4, KOA3, PW5, KS).

Once downloaded, go ahead to [Installation](#installation)

### For firmware =>5.16.3

{: .note }
Any device running firmware =>5.16.3 has to download the `kindle-hf` package.

{: .highlight }
As of 10th of January 2025, there aren't stable releases for Kindle hard float firmware (codename kindle-hf), because of this you will need to download a *nightly* build. This guide will be updated as soon as this changes.

For most users, [Marek's nightly build for KOReader](https://fw.notmarek.com/khf/koreader/) seems to work for the majority of users.

If you're feeling daring, you can try [KOReader nightly builds](https://build.koreader.rocks/download/nightly/). Click on the most recent build, and download the `koreader-kindlehf` file. Take in mind that these builds might not work for everyone.

Once downloaded, go to [Installation](#installation)

If you're feeling particulary adventurous, you can try downloading [Marek's KOReader downloader scriplet](https://cdn.discordapp.com/attachments/1324761128709914646/1324761128940736675/KoreaderInstall.sh?ex=6783df72&is=67828df2&hm=ba8ae764fe5d387f633333c716fc3bfbcbe3eca75ed2f15d445d8ee9237df61f&). You will need to copy this scriplet into the `documents` folder on your Kindle, run the scriplet on your Library, and it will automatically download and install it for you. Take in mind again, that this might not work for everyone.

## Installation

- Plug your device into your PC.
- Unzip the downloaded zip file and copy the `extensions` and `koreader` folders to the Kindle root directory. When prompted, confirm to merge or replace.
    - If you downloaded Marek's nightly build, you may need to unzip the file two times. 
- Unplug your Kindle
- Start KUAL
- Click on KOReader

You may see three options to open KOR:

- "`Start KOReader`" opens KOR normally.
- "`Start KOReader (no framework)`" will *kill* the native GUI first to free up resources and restart it once you've quit.
- "`Start KOReader (ASAP)`" skips a few checks and will load KOR as soon as possible.

Once KOReader is up and running, it is recommended to read the [extensive but very helpful guide for KOReader.](https://koreader.rocks/user_guide/)

## Troubleshooting

If KOReader appears in KUAL but doesn't work when you click on it, delete the two `koreader` folders: the one in the root directory of your Kindle and the one within the `extensions` folder. Then, download the latest KOReader build from [Marek's nightly build](https://fw.notmarek.com/khf/koreader/).

{: .warning }
Connecting your Kindle into your PC while KOReader is running is advised against, as it's currently broken, unsupported, and it may damage files from your Kindle. If you need to charge your device while KOReader is running, either do it with a charger, or switch your device to USBNet mode first.

## Credits
- Written by Bucks, adapted from the [official KOReader Github installation page](https://github.com/koreader/koreader/wiki/Installation-on-Kindle-devices#err-there-are-four-kindle-packages-to-choose-from-which-do-i-pick).
