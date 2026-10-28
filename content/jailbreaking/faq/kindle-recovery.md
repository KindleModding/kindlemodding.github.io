---
layout: default
parent: FAQ
title: Kindle Recovery
weight: 3
---

# Kindle Recovery

The [Jailbreaking Manager](../whats-next/jailbreaking-manager/) ("Jobman") has a recovery feature, if you are on firmwares `5.16.3` and above.

- If you want to learn about recovery, or want to install it, go down [here](#what-is-recovery-mode).
- If you want to recover your device which is currently in recovery mode, read down.

## Recovering my Device

If your device is in recovery mode, identify the reason listed at the bottom of the menu.

- `Manually invoked`: you created a special file over USB, which started jobman. This will be safely deleted when you leave.
- `Boot interrupt`: you tapped in the 10 second window during startup marked by the text "Jobman Recovery" at the top left of your screen.
- `Abnormal reboot count`: it is possible Jobman detected a **bootloop** and entered automatically.
    - Jobman detects bootloops if 3 or more reboots have occurred, spaced less than 180 seconds apart.

> [!NOTE]
> **Note**<br>If you entered by mistake, simply press the 'X' in the top-right corner to leave recovery mode.

If your device is truly in need of recovery, do the following:

- Press `Generate Logs` in the main menu. This may take a couple of minutes to complete.
- You can open a support thread in the [KindleModding Discord](https://discord.kindlemodding.org/) for someone to help you extract this log and potentially fix the problem.
- <b>If you wish to do it yourself:</b>
    - Recovery supports specifically USB SSH for stability (particularly if the Wi-Fi stack is broken), so you must [configure a local network link over the Kindle's USB connection](#notes) - alternatively, you can start KOReader and start SSH over Wi-Fi from there (or even access a terminal emulator).
- The log will usually contain the information necessary for fixing the issue, and you can recreate system files if broken, or sideload updates if possible to fix the issue.

## What is Recovery Mode?

Jailbreaking by itself is <b>highly safe</b>.

However, there has been an increase in usage of lower-level tweaks that tamper with the boot process, bluetooth stack, etc. These have been known to cause bootloops or system instability, and Recovery Mode can potentially mitigate these problems if they occur. If you are not using any of these, or are just doing KOReader, <b>recovery mode is not for you</b>.

Recovery is invoked in one of three ways:

- Tapping during a 10 second window during boot, marked by the text "Jobman Recovery" and a tap message at the top left corner of the screen. This happens before the progress-bar shows in the boot sequence.
- Creating the file `JOBMAN_RECOVERY` over USB
- When Jobman detects a bootloop (3 or more reboots which are spaced less than 180 seconds apart.)

**In order to install it**, open Jobman, press "Recovery Management", and tap "Install Recovery". You can always remove it later if you change your mind.

Recovery Mode is currently experimental, but has been tested on all of [these](https://github.com/KindleTweaks/jobman#tested-devices-default--recovery-mode) devices.

## Notes
    
On Linux, you can configure a local network link like so:

- `ip a`
- `sudo ip addr add 192.168.15.201/24 dev [enp...]` (filling this in with the correct interface)
- `sudo ip link set dev [enp...] up` (same here)
- `ssh root@192.168.15.244` (default password is 'kindle')
