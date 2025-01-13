---
layout: default
grand_parent: Kindle Development
parent: GTK Tutorial
title: Prerequisites
nav_order: 1
has_children: true
---

# Prerequisites
You will need to be running a Linux operating system* or WSL/msys2 under Windows<br/>
*MacOS is untested but may work

You will need a jailbroken Kindle and you will need to know what firmware your Kindle is running on.

You will also need to compile a toolchain targetting your device, the details of which are explained further on this page.

You will also need the following packages installed on your system for the toolchain:
- git
- ncurses
- gperf
- help2man
- bison
- texinfo
- flex
- gawk
- unzip
- wget (also used by this tutorial)

And specifically for this tutorial:
- meson
- gtk2 (with development headers)
- compilation tools

## Installing The Required Packages
### For Arch Linux
```sh
# For the toolchain
sudo pacman -S base-devel curl git gperf help2man unzip wget

# For this tutorial
sudo pacman -S meson gtk2
```

### For Debian/Ubuntu
```sh
# For the toolchain
sudo apt-get install build-essential autoconf automake bison flex gawk libtool libtool-bin libncurses-dev curl file git gperf help2man texinfo unzip wget

# For this tutorial
sudo apt-get install meson gtk2.0 libgtk2.0-dev
```

## Building The Toolchain

#### 1. Clone the toolchain
```sh
git clone --recursive --depth=1 https://github.com/KindleModding/kmctoolchain.git
```

#### 2. Build the toolchain for your device
```sh
cd kmctoolchain
chmod +x ./gen-tc.sh
./gen-tc.sh <target>
```

Where target should be replaced as follows:
|     TC    |              Supported Devices              |               Target             |
|:---------:|:-------------------------------------------:|:--------------------------------:|
|   kindle  |             Kindle 2, DX, DXg, 3            | [not supported by this tutorial] |
|  kindle5  |             Kindle 4, Touch, PW1            | [not supported by this tutorial] |
| kindlepw2 | Kindle PW2 & everything since on FW <5.16.3 |             kindlepw2            |
|  kindlehf |          Any Kindle on FW >= 5.16.3         |              kindlehf            |

{: .note}
If you want to support multiple Kindles, you can compile multiple toolchain targets just by running `./gen-tc.sh <other_target>` and the new toolchain be added to your `~/x-tools` directory

{: .note}
Compilation usually takes around 30-minutes per target on most PCs


## Obtaining The Kindle rootfs
In order to link against libraries on the Kindle, we need those libraries themselves, this can be done by extracting a firmware update via `kindletool`.

### Getting KindleTool
KindleTool is a utility which allows you to extract Kindle OTA packages as well as create your own.

It is recommended to compile `kindletool` from source to ensure it has the latest model support:
```sh
git clone https://github.com/KindleModding/KindleTool
cd KindleTool
make
sudo make install
```

Next, you'll need the latest firmware for your target, you can download it from Amazon:<br/>
[Kindle E-Reader Software Updates](https://www.amazon.co.uk/gp/help/customer/display.html?nodeId=GKMQC26VQQMM8XSW)

{: .warning}
If you are targeting `armel`/`kindlepw2` and the latest firmware available for that device is `>=5.16.3` then simply use the Kindle Oasis firmware (`15.16.2.1.1`)

### Extracting The Firmware
Once your firmware is downloaded, make sure you have stored it in a safe place, and use KindleTool to extract it:
```sh
kindletool extract update_kindle*.bin ./firmware/
```

Now your OTA file will have been extracted to the `firmware` folder, if you run
```sh
ls firmware
```
You should see an output similar to:
```
mt8110_bellatrix  rootfs.img.gz.sig   update-payload.dat.sig
rootfs.img.gz     update-payload.dat
```

Now we will need to extract and mount the Kindle's rootfs:
```sh
cd firmware
gunzip rootfs.img.gz
```
Now your `rootfs.img.gz` will be extracted to a `rootfs.img` file, and it can be mounted:
```sh
mkdir mnt # Create the mountpoint
sudo mount -o loop rootfs.img mnt # Mount the firmware
```

Now run:
```sh
cd mnt
pwd
```
To get the path to the Kindle's mounted rootfs, keep this safe as you'll need it in the later steps.