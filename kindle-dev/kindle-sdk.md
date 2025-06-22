---
layout: default
title: Kindle SDK
parent: Kindle Development
---

# Kindle SDK

The Kindle SDK is an unofficial SDK developed by KMC.  
It supplants an existing koxtoolchain installation with libraries and pkg-config support.  
It is designed to be used with Meson.

## Installation
Once koxtoolchain is installed, the SDK can be installed on top of it as such:

#### 1. Clone the SDK
```sh
git clone --recursive --depth=1 https://github.com/KindleModding/kindle-sdk.git
```

#### 2. Install the SDK for your target
```sh
cd kindle-sdk
chmod +x ./gen-sdk.sh
./gen-sdk.sh <target>
```
Where `<target>` is the same as the toolchain you want to install the SDK for.  

|     TC    |              Supported Devices              |               Target             |
|:---------:|:-------------------------------------------:|:--------------------------------:|
|   kindle  |             Kindle 2, DX, DXg, 3            | [not supported by this tutorial] |
|  kindle5  |             Kindle 4, Touch, PW1            | [not supported by this tutorial] |
| kindlepw2 | Kindle PW2 & everything since on FW <5.16.3 |             kindlepw2            |
|  kindlehf |          Any Kindle on FW >= 5.16.3         |              kindlehf            |

## Usage
The toolchain is designed to be used with Meson in the following manner:  
```sh
meson setup --cross-file <meson_crosscompile_path> builddir_<target>
```

(note that the crosscompile file path is outputted when the sdk installer is run, it will typically be under `~/x-tools/<toolchain>/meson-crosscompile.txt`)

## Additional information
The SDK works by downloading the target firmware from Amazon, copying the libraries into the toolchain's `sysroot` and setting up `.pc` files for pkgconfig on supported libraries