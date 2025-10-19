---
layout: default
title: Restoring Your Kindle
parent: Backing Up
grand_parent: Legacy
nav_order: 2
---

# Restoring Your Kindle
If your Kindle becomes bricked and you have a [backup](./backing-up.html), then you can restore it as so:

<blockquote class="warning">
This only works on Kindle's which are 8th generation or **OLDER**, such as:
- PW2
- PW3
- KT2
- KT3
- KV
- KOA

This is because newer devices such as the KT4/PW4 have different partition layouts as well as *secure boot*,  making it impossible to resture backed up partitions.
</blockquote>

## Prerequisites
- A computer
- Soldering and Electronics Expertise
- A `1.8v` Serial to USB Adapter connected to a Kindle
- Software which can access the serial port installed, such as [`PuTTY`](https://www.putty.org/)

## Restoring up your Kindle
1. Make sure that `PuTTY` is installed
2. Open a serial connection to your Kindle, the baud rate is usually `115200bps`
3. Boot the Kindle and interrupt the boot process by rapidly hitting enter until you see `uboot >`
4. Once you see `uboot >`, boot into `DIAGS` by entering the command: `boom 0xE41000`
5. Once you are in `DIAGS`, export the userpace partition by running the `usb export` command
6. Then, copy your `RootFS` image file to the Kindle. Make sure you name it `rootfs.img`
    <blockquote class="warning">
    DO NOT FLASH THE KINDLE OR WRITE THE IMAGE TO IT DIRECTLY. Simply copy the image file to the Kindle
</blockquote>
8. Eject **BUT DO NOT UNPLUG** your Kindle
9. Exit `DIAGS` mode by entering `x` at the prompt and enter a shell using the following command: `exit login`
10. Now we will flash your `RootFS` image on the Kindle, simply run the following command: `dd if=/mnt/us/rootfs.img of=/dev/mmcblk0p1 bs=4096`
11. Once it is finished, simply reboot the device via the `reboot` command

With any luck, your Kindle should reboot good as new!

## Credits
- Original guide written by [Neon](https://www.mobileread.com/forums/member.php?u=329187)