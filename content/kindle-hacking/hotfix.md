---
layout: default
title: Hotfix
weight: 1
---

# Hotfix
The hotfix is an essential component to jailbreaking.

Hotfixes are distributed as [OTA files](./ota-files.html) - this is why jailbreaks start by installing new OTA keys.  
The private key used to sign homebrew OTA files are included [as a part of KindleTool](https://github.com/KindleModding/KindleTool/blob/4fa6d0ca6c5ec24564e0f0f3a90dbe3618d6346a/KindleTool/create.c#L49)

## Hotfix Structure
Using the `Universal Hotfix` as an example:

```
.
├── install.sh
├── kmc.tar
├── libotautils6
├── mkk.tar
├── update-filelist.dat
```

The structure is quite simple, let's walk through it.

The Hotfix uses a special type of OTA, when the Kindle installs it, it runs every `.sh` file in the hotfix.  
In our case, that is the `install.sh` file.

## install.sh
Our `install.sh` file will source the `libotautils6` file which contains some helper functions  
Once this is done, it performs numerous steps:
- Calculate the current space used by `/var/local/kmc` and `/var/local/mkk` if they exist
- Calculate if we have enough free space to install the hotfix (subtracting `kmc` and `mkk` folders from used space as they will be replaced)
    - Error out if we don't!
- Create the `/var/local/kmc` and `/var/local/mkk` folders
- Extract the `mkk.tar` and `kmc.tar` files to their respective folders in `/var/local`
- Set proper permissions for the libraries and binaries in `/var/local/kmc`
- Delete any old leftover `bridge.conf` upstart file
- Copy our `kmc.conf` upstart file
    - The upstart file runs on `framework_ready`
    - It checks if `/mnt/us/emergency.sh` exists, and if so, runs it
    - Otherwise, it ensures that the permissions for `/var/local/kmc` binaries and libraries are correct
    - If they are not, it fixes them
- Soft links are created from the proper CPU architecture to the KMC bin and lib folders, ie:
    - `/var/local/kmc/armhf/bin -> `/var/local/kmc/bin`
    - `/var/local/kmc/armhf/lib -> `/var/local/kmc/lib`
- A link is created between `gandalf` and `su` in the same location
    - `gandalf` is a build of busybox, so it must be named `su` to work properly as a privilege escalation tool
- Gandalf is linked to MKK persistent storage (`/var/local/mkk/`)
- The `dispatch.sh` [debug command](./debug-commands.html) is copied to `/usr/bin/logThis.sh`
- `/var/local/kmc/KMCLog.sh` is given execute permissions
- The `run_bridge.sh` file from old hotfixes is removed and replaced with `Run Hotfix.run_hotfix`
- `appreg.db` is modified to install the hotfix booklet and `sh_integration` (see also: [appreg.db](./appreg.html) and [Scanner](../kindle-apps-and-services/com.lab126.scanner.html))

## Running Hotfix
Once the hotfix is installed, the Kindle is very nearly jailbroken, however, some final stages that cannot be performed in the OTA environment need to be done. As such, the `Run Hotfix` booklet is created to do this.  
When it is run, it performs the following:  
- Check the architecture of the Kindle
- Run the correct `su` binary to elevate the hotfix job runner

From the hotfix job runner:
- Iterate through every job in the hotfix and run it
- Restart the `lab126_gui` service

The jobs can be found on GitHub: https://github.com/KindleModding/Hotfix/tree/rewrite-lite/src/kmc/hotfix/jobs  
Some notable ones:
```
install_mkk_dev_keystore.sh - Installs the Java keystore to make legacy booklets such as KUAL function
install_mkk_kindlet_jb.sh - Installs a legacy jar related to running Kindlets - It is no longer necessary
setup_fbink.sh - Copies fbink binaries to the expected location
```