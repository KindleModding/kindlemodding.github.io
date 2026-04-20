---
layout: default
parent: Jailbreaking Your Kindle
title: Recovering From a Reset
weight: 99
---

# Recovering From a Reset
Factory resetting a jailbroken Kindle with renametobin (`Rename`) left enabled will make it impossible to install either the hotfix or official update files. To fix this, follow these steps:

1. Follow the [MRPI and KUAL installation instructions](./post-jailbreak/installing-kual-mrpi/)
2. Install the Hotfix through MRPI (copy the [hotfix](../jailbreaking/post-jailbreak/setting-up-a-hotfix/) file to the `mrpackages` folder and type `;log mrpi` into the search bar)
3. Click the `Run Hotfix` booklet  
2. Follow the [Disable OTA instructions](./post-jailbreak/disable-ota.html)
3. Instead of choosing the `Rename` option, use the `Restore` option

<p class="note">
If you come from an un-jailbreak attempt, you can also force an update by copying the firmware update file to your Kindle and, while still plugged in, hold down the power button until it restarts
</p>

<p class="caution">
Remember that performing a factory reset followed by an update will remove any jailbreak remnants
</p>
