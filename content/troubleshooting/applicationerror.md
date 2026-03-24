---
title: Application Error Popup
type: docs
prev: docs/Database/
---

A scary error with a less scary meaning. 

## Should I be worried 
The error will only be visible on application launch, e.g. an invalid appreg entry, which could occur for example in an Illusion app if you don't copy the folder and only the .sh (or if the app has no config XML)

If the app itself has an error it'll just tweak out. It'll look wrong because there's a bug or crash

App error happens when you launch something with lipc with appmgrd and the app doesn't exist, is misconfigured, etc.
By the way you see this most often in Illusion apps due to user error (not copying correctly) or because of elder firmwares which make the scriptlet be a bit funky (thanks HackerDude)

Also this shouldn't appear in AdBreak but you should document collecting debug info which is the popup that occurs when a process (mesquite) crashes (the exploit in AdBreak does that). However if it does pop up in Adbreak or the Hotfix don't be worried, it's common behavior.

## Credits 
- [Penguins184](https://github.com/penguins184) - Explanation
- [GreenCat777](https://github.com/GreenCat-777) - Polishing up the page
