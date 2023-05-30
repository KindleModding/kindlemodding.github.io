---
layout: default
parent: Firmware and Flashing
title: Forcing KV to run 5.14+
nav_order: 2
---

# Forcing KV to run 5.14+
Thanks to [`katadelos`](https://www.mobileread.com/forums/showthread.php?t=343385) for figuring this out.

{: .warning}
This is **extremely advanced** and can brick your Kindle Voyage. This is also highly experimental. There will be little support if things go wrong as there are few people who can even help you recover if this goes wrong.

<br/>
In terms of hardware, like iPhones, the PW3 and KV are almost identical. They have an identical partition layout, meaning that it is possible to cross-flash the firmware from one device to another.
In fact, even the [KT2 with 256MB of ram can run 5.14+](https://www.reddit.com/r/kindle/comments/qvgerd/teaching_old_dogs_new_tricks_newest_update/)... although, the 5.13.7+ React UI certainly takes up more resources and can cause instabilities from memory consumption.
<br/>
<br/>
This can theoretically be done to any device in the Wario hardware family (PW2, PW3, KT2, KV) **EXCEPT** for the PW2 as it has a slightly smaller RootFS than the rest, as [Neon found out, unfortunately](https://www.mobileread.com/forums/showthread.php?t=348801). Whilst it is theoretically possible, modifications to the image are needed.

{: .warning}
By following this guide, I bear no responsibility if you break your Kindle, caused a house fire, or accidentally open up a wormhole to the 818th dimension. You have been warned!

{: .warning}
This should **ONLY** be attempted on Kindle Voyages with `512MB RAM`. Even then, caution should be used as there is presumably a reason `5.14.1` did not ship on the Voyage...

## Prerequisites
- A Kindle Voyage
- A `1.8v` USB-to-Serial adapter soldered to the Kindle Voyage
- Software which can access the serial port installed, such as [`PuTTY`](https://www.putty.org/)
- NiLuJe's [KindleTool](https://github.com/NiLuJe/KindleTool) installed
- A PW3 Update File (see [Manually Downloading Firmware Update Files](./downloading-updates.html))

## Extracting the image and flashing your Kindle
1. Extract the PW3 update file via `KindleTool` as shown:
    ~~~bash
    kindletool extract ~/Downloads/update_kindle_all_new_paperwhite_5.XX.X.bin /tmp/pw3
    ~~~
    (replace the path to the file to wherever you saved yours)
2. Extract the `rootfs.img` file from the `rootfs.img.gz` fle as so:
    ~~~bash
    gzip -d /tmp/pw3/rootfs.img.gz
    ~~~
3. Make sure you have `PuTTY` launched and connected to the Kindle's serial port (use baudrate `115200bps`)
4. Boot the Kindle and interrupt the boot process by rapidly hitting enter until you see `uboot >`
5. Boot into `DIAGS` mode by running the command:
    ~~~bash
    uboot > bootm 0xE41000
    ~~~
6. Once you are in `DIAGS` mode, run the following command to export the userspace partition:
    ~~~bash
    usb export
    ~~~
7. **COPY** the `rootfs.img` file to the Kindle
    {: .warning}
    DO NOT FLASH THE IMAGE ONTO THE KINDLE. Simply copy it to the device via your preffered file manager.
8. Eject the Kindle from the PC **BUT DO NOT UNPLUG IT**
9. Exit USB Export mode by entering `x` at the prompt
10. Exit `DIAGS` mode and enter a shell by running:
    ~~~bash
    exit login
    ~~~
11. Run the following command to begin flashing your Kindle:
    ~~~bash
    dd if=/mnt/us/rootfs.img of=/dev/mmcblk0p1 bs=4096
    ~~~
12. Reboot your Kindle via the following command:
    ~~~bash
    reboot
    ~~~

If everything works, the Kindle should boot to whichever firmware you flashed.

{: .warning}
If your Kindle does not boot, try flashing it again