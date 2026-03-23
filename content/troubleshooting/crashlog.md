---
title: Disabling Crash Logs
type: docs
prev: docs/Database/
---

Every now and then, you may see random files appearing on your homescreen called "KPPMainApp" or "Mesquite" which can become quite annoying. While sometimes there is an underlying issue that you should fix, it is possible to disable them.

## Method 1 - With a Scriptlet
1. GreenCat777 has provided a scriptlet that does it all for you! You can download it [here](../assets/disable_crash_logs.sh).

## Method 2 - With a Computer
1. Connect your Kindle to your computer.
2. Create a file called `DISABLE_CORE_DUMP` with no file extension.
3. Copy `DISABLE_CORE_DUMP` to the kindle's root

## Method 3 - Through kterm
1. Open kterm
2. Run the command ```touch /mnt/us/DISABLE_CORE_DUMP```

## Credits
- [GreenCat777](https://github.com/GreenCat-777) - Wrote the Scriptlet
