---
layout: default
parent: Troubleshooting Kindle Issues
title: Application Error Popup
weight: 1
---

# Application Error Popup

## Explanation - [Penguins184](#credits)
The error will only be visible on application launch, like an invalid [appreg entry](../kindle-hacking/appreg), which could occur for example in an Illusion app if you don't copy the folder and only the .sh (or if the app has no config XML).

If the app itself has an error it will obviously be bugged. It'll look wrong because there's a bug or crash.

App error happens when you launch something with `lipc` with `appmgrd` and the app doesn't exist, is misconfigured, etc. Y
ou see this most often in Illusion apps due to user error (not copying correctly) or because of older firmwares which can mess with the scriptlet functionality.

Also this shouldn't appear in AdBreak but you should see "Collecting Debug Info", which is the popup that occurs when a process (mesquite) crashes (the exploit in AdBreak does that). However if it does pop up in Adbreak or the Hotfix don't be worried, it's common behavior.

## Credits 
- [Penguins184](https://github.com/penguins184) - Wrote the Page 
- [GreenCat777](https://github.com/GreenCat-777) & [MonkeyInPrivite](https://github.com/MonkeyInPrivite) - Polishing up the page
