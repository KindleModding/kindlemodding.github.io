---
layout: default
title: Backing Up Your Kindle
parent: Backing Up
grand_parent: Legacy
nav_order: 1
---

# Backing Up Your Kindle
This guide will briefly go over how to back-up your Kindle's partitions, allowing you to recover it if it becomes bricked.

{: .warning}
> This only works on Kindle's which are 8th generation or **OLDER**, such as:
> - PW2
> - PW3
> - KT2
> - KT3
> - KV
> - KOA
> 
> This is because newer devices such as the KT4/PW4 have different partition layouts as well as *secure boot*,  making it impossible to resture backed up partitions.

## Prerequisites
- A computer
- A Jailbroken Kindle with KUAL installed
- [kterm](https://github.com/bfabiszewski/kterm) installed on your Kindle
- knc1's [Kindle Backup Script](https://www.mobileread.com/forums/showthread.php?t=289690)

## Backing up your Kindle
1. Plug your Kindle into your computer
2. Download the [latest](https://github.com/bfabiszewski/kterm/releases/latest) kterm zip file
3. Extract the `kterm` folder into the `extensions` folder on your Kindle
4. Extract the `backup-0.3.tar.gz` file (knc1's backup script) somewhere on your computer
5. Copy the `esys` and `unjail` folders to the root of your Kindle when plugged in (same place as `documents` folder)
6. Eject and unplug your Kindle
7. Go to `KUAL` > `kterm`
8. Type the following commands:
    ~~~bash
    cd /mnt/us/unjail
    ./mkbackup.sh
    exit
    ~~~
    The `./mkbackup.sh` step may take a few minutes as it backs up your Kindle
9. Plug the Kindle back into your computer
10. There should be a `backups` folder, this contains your Kindle's system images, make sure you copy it to a safe location!

{: .info}
If you ever want to back up your Kindle again, you can start from `step 7`, assuming you didn't remove `kterm` or the `backup script`

## Credits
- Original guide written by [Neon](https://www.mobileread.com/forums/member.php?u=329187)