---
layout: default
parent: Legacy
title: NiLuJe K2/DX/DXG/K3 Jailbreak
weight: 1
slug: index
description: A jailbreak for the now-discontinued K2, DX, DXG and K3 Kindles
---

# NiLuJe K2/DX/DXG/K3 Jailbreak
The NiLuJe K2/DX/DXG/K3 Jailbreak is a legacy jailbreak created by [NiLuJe](https://www.mobileread.com/forums/member.php?u=69624)

## Prerequisites
- Please check that your Kindle is [compatible](../../kindle-models) with the K2 Jailbreak
- You will also need a PC

## Installation Guide
<div id="guide">
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Download Installation File</h2>
            <div class="stepContent">
                <div style="display: flex; flex-direction: row; margin-bottom: 1em; width: 100%;">
                    <input id="serial_input" required style="flex: 2; margin: 1em;" pattern="([0-9]\.?)+" type="text" placeholder="Kindle Serial"/>
                    <input id="version_input" required style="flex: 1; margin: 1em;" pattern="([0-9]\.?)+" type="text" placeholder="Software Version"/>
                </div>
                <p id="searchStatus"></p>
                <table>
                    <thead>
                        <tr>
                            <th>Amazon Name</th>
                            <th>Kindle Nickname</th>
                            <th>Device Code</th>
                            <th>Firmware Version</th>
                            <th>Links</th>
                        </tr>
                    </thead>
                    <tbody id="table">
                    </tbody>
                </table>
            </div>
        </div>
        <div class="step">
            <h2>Copy Installer</h2>
            <div class="stepContent">
                <p>Plug your Kindle into your PC and copy the <code>Update_jailbreak_0.13.N_[whatever]_install.bin</code> file to it</p>
                <p class="warning">
                   If you see any other files on your Kindle ending in <code>.bin</code>, or have a similar name to <code>update.bin.tmp.partial</code>, you must delete them for this to work.
                </p>
            </div>
        </div>
        <div class="step">
            <h2>Eject & Unplug</h2>
            <div class="stepContent">
                <p>Eject and unplug your Kindle</p>
            </div>
        </div>
        <div class="step">
            <h2>Install the jailbreak</h2>
            <div class="stepContent">
                <p>Navigate to:</p>
                <p><code>[HOME]</code> -> <code>[MENU]</code> -> <code>Settings</code> -> <code>[MENU]</code> -> Update Your Kindle</p>
                <br>
                <p>Once your Kindle has rebooted, you are jailbroken</p>
                <br>
                <p class="note">
                    Error <code>U006</code> is normal on firmware <code>2.x</code>, ignore it.
                </p>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "/jailbreaking/post-jailbreak/installing-kual-mrpi/", "Installing KUAL & MRPI");</script>

<script>
/**
 * NOTE: The min_firmware is INCLUSIVE, the max_firmware is EXCLUSIVE
 */
const jbDevices = [
    {
        "device_code": "02",
        "nickname": "K2",
        "installers": [
            {
                "url": "./Update_jailbreak_0.13.N_k2_install.bin",
                "min_firmware": null,
                "max_firmware": null
            }
        ],
        "uninstallers": [
            {
                "url": "./Update_jailbreak_0.13.N_k2_uninstall.bin",
                "min_firmware": null,
                "max_firmware": null
            }
        ]
    },
    {
        "nickname": "K2I",
        "device_code": "03",
        "installers": [
            {
                "url": "./Update_jailbreak_0.13.N_k2i_install.bin",
                "min_firmware": null,
                "max_firmware": null
            }
        ],
        "uninstallers": [
            {
                "url": "./Update_jailbreak_0.13.N_k2i_uninstall.bin",
                "min_firmware": null,
                "max_firmware": null
            }
        ]
    },
    {
        "nickname": "DX",
        "device_code": "04",
        "installers": [
            {
                "url": "./Update_jailbreak_0.13.N_dx_install.bin",
                "min_firmware": null,
                "max_firmware": null
            }
        ],
        "uninstallers": [
            {
                "url": "./Update_jailbreak_0.13.N_dx_uninstall.bin",
                "min_firmware": null,
                "max_firmware": null
            }
        ]
    },
    {
        "nickname": "DXI",
        "device_code": "05",
        "installers": [
            {
                "url": "./Update_jailbreak_0.13.N_dxi_install.bin",
                "min_firmware": null,
                "max_firmware": null
            }
        ],
        "uninstallers": [
            {
                "url": "./Update_jailbreak_0.13.N_dxi_uninstall.bin",
                "min_firmware": null,
                "max_firmware": null
            }
        ]
    },
    {
        "nickname": "DXG",
        "device_code": "09",
        "installers": [
            {
                "url": "./Update_jailbreak_0.13.N_dxg_install.bin",
                "min_firmware": null,
                "max_firmware": null
            }
        ],
        "uninstallers": [
            {
                "url": "./Update_jailbreak_0.13.N_dxg_uninstall.bin",
                "min_firmware": null,
                "max_firmware": null
            }
        ]
    },
    {
        "nickname": "K3G",
        "device_code": "06",
        "installers": [
            {
                "url": "./Update_jailbreak_0.13.N_k3g_install.bin",
                "min_firmware": [3, 3],
                "max_firmware": [3, 4, 4]
            },
            {
                "url": "Update_jailbreak_0.13.N_k3g-3.0-to-3.2_install.bin",
                "min_firmware": [3, 0],
                "max_firmware": [3, 3]
            }
        ],
        "uninstallers": [
            {
                "url": "./Update_jailbreak_0.13.N_k3g_uninstall.bin",
                "min_firmware": null,
                "max_firmware": [3, 4, 4]
            }
        ]
    },
    {
        "nickname": "K3W",
        "device_code": "08",
        "installers": [
            {
                "url": "./Update_jailbreak_0.13.N_k3w_install.bin",
                "min_firmware": [3, 3],
                "max_firmware": [3, 4, 4]
            },
            {
                "url": "Update_jailbreak_0.13.N_k3w-3.0-to-3.2_install.bin",
                "min_firmware": [3, 0],
                "max_firmware": [3, 3]
            }
        ],
        "uninstallers": [
            {
                "url": "./Update_jailbreak_0.13.N_k3w_uninstall.bin",
                "min_firmware": null,
                "max_firmware": [3, 4, 4]
            }
        ]
    },
    {
        "nickname": "K3GB",
        "device_code": "0A",
        "installers": [
            {
                "url": "./Update_jailbreak_0.13.N_k3gb_install.bin",
                "min_firmware": [3, 3],
                "max_firmware": [3, 4, 4]
            },
            {
                "url": "Update_jailbreak_0.13.N_k3gb-3.0-to-3.2_install.bin",
                "min_firmware": [3, 0],
                "max_firmware": [3, 3]
            }
        ],
        "uninstallers": [
            {
                "url": "./Update_jailbreak_0.13.N_k3gb_uninstall.bin",
                "min_firmware": null,
                "max_firmware": [3, 4, 4]
            }
        ]
    }
]

function compareFirmwareVersions(a, b)
{
    toCompare = Math.min(a.length, b.length);
    for (let i=0; i < toCompare; i++)
    {
        if (a[i] != b[i])
        {
            return a[i] - b[i];
        }
    }
    return a.length - b.length; // If comparables are the same then go by length
}

function subtractFirmware(firm)
{
    const newFirm = [];
    for (el of firm)
        newFirm.push(el);

    let targetIndex = newFirm.length-1;
    while (targetIndex > 0 && newFirm[targetIndex] == 0)
        targetIndex--;

    if (newFirm[targetIndex] == 0)
        return 0

    newFirm[targetIndex]--;
    return newFirm;
}

function generateTable()
{
    const table = document.getElementById("table");
    const newChildren = [];
    for (const device of jbDevices)
    {
        let amazon_name = "";
        for (const model of window.kindleModels)
        {
            if (model.serial_version != 0)
                continue

            if (Object.keys(model.device_codes).includes(device.device_code))
            {
                amazon_name = model.amazon_name;
            }
        }

        for (const installer of device.installers)
        {
            const row = document.createElement("tr");
            const td_amazon_name = document.createElement("td");
            const td_nickname = document.createElement("td");
            const td_device_code = document.createElement("td");
            const td_firmware_version = document.createElement("td");
            const td_download_links = document.createElement("td");
            const installer_link = document.createElement("a");
            const uninstaller_link = document.createElement("a");

            td_amazon_name.innerText = amazon_name;
            td_nickname.innerText = device.nickname;
            td_device_code.innerText = device.device_code;

            if (installer.min_firmware != null && installer.max_firmware != null)
                td_firmware_version.innerText = installer.min_firmware.join(".") + ' - ' + subtractFirmware(installer.max_firmware).join(".");
            else if (installer.min_firmware != null)
                td_firmware_version.innerText = ">=" + installer.min_firmware.join(".");
            else if (installer.max_firmware != null)
                td_firmware_version.innerText = "<=" + subtractFirmware(installer.max_firmware).join(".");
            else
                td_firmware_version.innerText = "Any";

            installer_link.innerText = "Installer";
            installer_link.setAttribute("href", installer.url);

            uninstaller_link.innerText = "Uninstaller";
            for (const uninstaller of device.uninstallers)
            {
                if ((uninstaller.min_firmware == null || compareFirmwareVersions(uninstaller.min_firmware, installer.min_firmware) <= 0)
                    && (uninstaller.max_firmware == null || compareFirmwareVersions(uninstaller.max_firmware, installer.max_firmware) >= 0))
                {
                    uninstaller_link.setAttribute("href", uninstaller.url);
                    break;
                }
            }
            td_download_links.appendChild(installer_link);
            td_download_links.appendChild(document.createElement("br"));
            td_download_links.appendChild(uninstaller_link);

            row.appendChild(td_amazon_name);
            row.appendChild(td_nickname);
            row.appendChild(td_device_code);
            row.appendChild(td_firmware_version);
            row.appendChild(td_download_links);
            newChildren.push(row);
        }
    }
    table.replaceChildren(...newChildren);
}

fetch("/models.json").then(response => response.json()).then((data) => {
    window.kindleModels = data;
    generateTable();
});

function getSerialInfo(serial) {    
    if (serial.length == 2 || serial.length == 3)
        return {
            serial_version: serial.length == 2 ? 0 : 1,
            device_code: serial
        }
        
    if (serial[0] == "G") { 
        if (serial.length < 6)
            return -1

        return {
            "serial_version": 1,
            "device_code": serial.substring(3, 6)
        }
    } else if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"].includes(serial[0])) {
        if (serial.length < 4)
            return -1

        return {
            "serial_version": 0,
            "device_code": serial.substring(2, 4)
        }
    }
    else {
        return -2;
    }
}

function search()
{
    const serialNumber = document.getElementById("serial_input").value;
    const firmwareString = document.getElementById("version_input").value;
    let firmwareArray = firmwareString.split('.');
    if (firmwareString.slice(-1) == ".")
    {
        firmwareArray = null;
    }
    else
    {
        if (firmwareArray.length != 0 && firmwareArray[0].length != 0)
        {
            for (let i=0; i < firmwareArray.length; i++)
            {
                try {
                    firmwareArray[i] = Number(firmwareArray[i]);
                } catch {
                    firmwareArray = null;
                    break;
                }
            }
        }
        else
        {
            firmwareArray = null;
        }
    }
    const serialInfo = getSerialInfo(serialNumber.toUpperCase().replaceAll(" ", ""));

    const searchStatus = document.getElementById("searchStatus");
    searchStatus.innerText = "";
    
    for (const child of document.getElementById("table").children)
    {
        child.style = "";
    }
    if (serialNumber.length == 0)
    {
        return;
    }
    
    if (serialInfo === -1) {
        searchStatus.style = "color: red; font-size: 1.2em;";
        searchStatus.innerText = "ERROR: Serial Number Too Short!";
    } else if (serialInfo === -2) {
        searchStatus.style = "color: red; font-size: 1.2em;";
        searchStatus.innerText = "ERROR: Serial Number Invalid!";
    } else {
        const targetIndices = [];
        const allFirmwareTargetIndices = [];
        let actualIndex = 0;
        for (let i=0; i < jbDevices.length; i++)
        {
            if (jbDevices[i].device_code != serialInfo.device_code)
            {
                actualIndex++;
                continue;
            }
            
            console.log("\n\n")
            for (let j=0; j < jbDevices[i].installers.length; j++)
            {
                const installer = jbDevices[i].installers[j];
                if (
                    (
                        firmwareArray == null ||
                        (
                            (installer.min_firmware == null || compareFirmwareVersions(firmwareArray, installer.min_firmware) >= 0) && 
                            (installer.max_firmware == null || compareFirmwareVersions(firmwareArray, installer.max_firmware) < 0)
                        )
                    )
                )
                {
                    targetIndices.push(actualIndex);
                }

                console.log(firmwareArray);
                if (installer.min_firmware != null)
                {
                    console.log(installer.min_firmware);
                    console.log(compareFirmwareVersions(firmwareArray, installer.min_firmware));
                }

                if (installer.max_firmware != null)
                {
                    console.log(installer.max_firmware);
                    console.log(compareFirmwareVersions(firmwareArray, installer.max_firmware));
                }
                allFirmwareTargetIndices.push(actualIndex);
                actualIndex++;
            }
        }

        const table = document.getElementById("table");
        const tableChildren = table.children;

        console.log(targetIndices);
        console.log(allFirmwareTargetIndices);
        for (let i=0; i < tableChildren.length; i++)
        {
            if (targetIndices.length == 0 && allFirmwareTargetIndices.length == 0)
                tableChildren[i].style = "";
            else if (
                targetIndices.includes(i) || 
                (targetIndices.length == 0 && allFirmwareTargetIndices.includes(i))
            )
                tableChildren[i].style = "";
            else
                tableChildren[i].style = "display: none;";
        }

        if (targetIndices.length == 0 && allFirmwareTargetIndices.length == 0)
        {
            searchStatus.style = "color: red; font-size: 1.2em;";
            if (serialNumber.length < 4)
                searchStatus.innerText = "ERROR: Serial Number Too Short!";
            else
                searchStatus.innerHTML = "ERROR: Serial Number Not Found! Please Open a <a style=\"color: red;\" href=\"https://github.com/KindleModding/kindlemodding.github.io\">GitHub Issue.</a>";
        }
    }
}

document.getElementById("serial_input").addEventListener("input", search);
document.getElementById("version_input").addEventListener("input", search);
</script>

## Credits
- Created by [NiLuJe](https://www.mobileread.com/forums/member.php?u=69624)
```
  kindletool: KindleTool, Copyright (C) 2011-2015  Yifan Lu, licensed under the GNU General Public License version 3+ (http://www.gnu.org/licenses/gpl.html).
(https://github.com/NiLuJe/KindleTool/)

    |
    |->   libarchive, Copyright (C) Tim Kientzle, licensed under the New BSD License (http://www.opensource.org/licenses/bsd-license.php)
    |   (http://libarchive.github.com/)
    |
    |->   GMP, GNU MP Library, Copyright 1991-2013 Free Software Foundation, Inc.,
    |   licensed under the GNU Lesser General Public License version 3+ (http://www.gnu.org/licenses/lgpl.html).
    |   (http://gmplib.org/)
    |
    `->   nettle, Copyright (C) 2001-2013 Niels Möller,
        licensed under the GNU Lesser General Public License version 2.1+ (https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html).
        (http://www.lysator.liu.se/~nisse/nettle)

  libz: zlib, Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler,
        Licensed under the zlib license (http://zlib.net/zlib_license.html)
        (http://zlib.net/)
```