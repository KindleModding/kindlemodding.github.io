---
layout: default
grand_parent: Jailbreaking Your Kindle
parent: Post Jailbreak
title: Setting Up A Hotfix
nav_order: 1
---

# Setting Up A Hotfix
A hotfix allows your Kindle's jailbreak to persist after updating. There are two different hotfixes and which one you need to install depends on which method you used to jailbreak your Kindle.

## Kindle Modding Community Universal Hotfix (recommended)
1. Download the latest hotfix from [here](https://github.com/KindleModding/Hotfix/releases/latest)

[Download Hotfix](https://github.com/KindleModding/Hotfix/releases/latest/download/Update_hotfix_universal.bin){: .btn .btn-purple}

2. Connect your Kindle to your PC
3. Copy the `Update_hotfix_universal.bin` to your Kindle
4. Eject and unplug your Kindle
5. On your Kindle, go to `Settings` > `Update Your Kindle` to install the hotfix
6. Once your Kindle has restarted, click on the new `Run Hotfix` "book", this will run the hotfix itself

{: .note }
> You will need to run the hotfix after every update
>

# Troubleshooting

## Impossible update hotfix
There is a good chance that after installing an older version of HotFix you immediately disabled OTA updates, so the update file may be ignored!

**Follow these steps to update the HotFix:**
1. Activate airpline mode
2. Enable OTA update (KUAL -> Rename OTA binaries -> Restore)
3. Quickly download HotFix on Kindle and reboot
4. Update HotFix via Kindle settings
5. Disable OTA update (KUAL -> Rename OTA binaries -> Rename)


Now that we have our hotfix setup, we can install `KUAL` and `MRPI`

[Install KUAL and MRPI](./installing-kual-mrpi){: .btn .btn-purple}