---
layout: default
title: Creating a Package
weight: 0
---

# Example Package
An example package is available at [https://github.com/KindleModding/example_kpm_package](https://github.com/KindleModding/example_kpm_package) for additional information. It is recommended that you read through the files in this package to gain an understanding for the structure of a KPM package.

# Creating a Package
A KPM package can be created using the [`kpm-helper.py`](https://github.com/KindleModding/KPM/blob/main/kpm-helper.py) script:
```sh
# Step 1. Create a folder to store your package contents
mkdir example_package
# Step 2. Initialise the package folder
python kpm-helper.py package init ./example_package
```

The `example_package` folder will now look like this:
```sh
example_package
└── manifest.json

1 directory, 1 file
```

The manifest file will now be initialised to target all platforms (see: [`targeting specific platforms`](#targeting-specific-platforms))

## Packing
To convert your package folder to a `kpkg` file that can be added to a repository and that KPM can install, use `kpm-helper.py`:
```sh
python kpm-helper.py package pack FOLDER_PATH OUTPUT_PATH
```
Where `FOLDER_PATH` is the path to your package and `OUTPUT_PATH` is the folder to put the `kpkg` file.

### Targeting Specific Platforms
There are many reasons you may want a package to only target a specific platform, `kpm-helper.py` can modify the manifest at pack time with the `--supported-platform` flag. You may also manually set the optional `supported_platforms` array in the `manifest.json` file.

#### Valid Platforms
- `kindle` - Kindles older than the K5
- `kindle5` - K5 and newer
- `kindlepw2` - PW2 and newer
- `kindlehf` - armhf platforms

## Hooks
You can now put any other files in the package folder, however they won't do anything by themselves, this is why we have hooks:

```sh
example_package
├── install.sh
├── launch.sh
├── manifest.json
└── uninstall.sh

1 directory, 5 files
```

| File Name    | Purpose                                                 |
|--------------|---------------------------------------------------------|
| install.sh   | Ran during package installation after it is unpacked    |
| uninstall.sh | Ran during package uninstallation after it is unmounted |
| launch.sh    | Ran when package is launched from a launcher            |

<p class="warning">Hooks <b>MUST NOT</b> write to rootfs or remount it as rw, see below for more details</p>

Hooks are always ran from the package's folder whilst the package is in an unpacked state, this means you can reference local files with relative paths.

It is encouraged to use the `install.sh` hook to place a scriptlet in the `/mnt/us/documents` folder when appropriate.  
It is recommended that the scriptlet runs `/var/local/kmc/bin/kpm launch PACKAGENAME` to run the package's `launch.sh`

### Guidelines
- During upgrades:
  - `uninstall.sh` is ran with the `upgrade` parameter, ie: `uninstall.sh upgrade`
  - The package files are deleted
  - The new package files are extracted
  - `install.sh` is ran on the new version
- The `uninstall.sh` hook should NOT delete package files, this is handled by KPM
 
## Writing To Rootfs
Using the `install.sh` hook to modify the contents of `rootfs` is unsupported. It is recommended that you do not do this for now.  
A solution is planned to be implemented in the near future.