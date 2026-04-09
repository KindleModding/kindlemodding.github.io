---
layout: default
parent: Troubleshooting Kindle Issues
title: Unbricking a Kindle
weight: 6
---

# Unbricking a Kindle
<p class="caution">This guide will only cover simple bootloops, more complex bricks or "hard bricks" are usually much more complex and unknown. Please ask in the Kindle Modding Server for support if this is your scenario.</p>
Sometimes things go wrong when jailbreaking or messing around. Here is a known method of fixing most bricks.
## Prerequisites
- **Patience**

- Preferably a PC, but a Mac can work
- Decent technical experience (don't worry, I'll try to make it easy)
- A cable that supports data transfer
- *Potential experience with soldering and/or disassembling devices* **(worst-case scenario)**
## Is it actually bricked?
First, lets figure out if your Kindle is actually bricked  

1. See if holding down the power button for about 5 seconds pops up a screen thats lets you restart and if it does then do so.
2. If it does not or your Kindle is still bricked, then hold down the power button for about a minute and it should force restart.

If this still does not work/did not fix your issue, it is safe to say your Kindle is bricked.  
You have a few options now:  

1. Wait for the battery to run out *(This could take an **extremely** long time)* and then plug it in.
2. If you are comfortable with doing so, open up your Kindle and unplug the battery. Then just plug it back in.  
  
Unless the physics that apply everywhere else on Earth are suspended in your house, your Kindle should have now restarted.
## Accessing your Kindle with a Computer
> [!IMPORTANT]  
> If you are not able to access your Kindle with a computer, you will have to continue to the [advanced steps](#advanced-steps).

Now, we need to gain access to your Kindle's filesystem with a computer!
### PC Instructions 
1. Grab a data supported USB cable
2. Plug in your Kindle to your computer
3. If it's not showing up, try waiting a bit or restarting your Kindle
4. Once you have access to the Kindle, open the root (where the documents and audible folders are).
5. Create a file on the root ***with no extension*** called "DO_FACTORY_RESTORE" and restart your Kindle
6. Your Kindle should now go back to the initial setup, you are officially unbricked!

### Mac Instructions 
- If you are on an older Kindle, you should be able to follow the PC instructions. The instructions below are for newer (MTP) Kindles
- You can tell if your Kindle is MTP if it does not appear when you plug it in on Mac

If your Kindle is MTP, you will need to install either the [Amazon Send to Kindle App](https://www.amazon.com/sendtokindle/mac?&linkCode=ll2&tag=ter000-20&linkId=07f7c7db67889bf36e836471c479526e&la) or [OpenMTP](https://openmtp.ganeshrvel.com/).
You should now be able to follow the PC instructions.
## Advanced Steps
> [!CAUTION]
> **Follow these steps at your own risk**

This is where things start to get complicated. You absolutely follow all of these instructions at your own risk and accept the responsibility  for any consequences of messing it up.  
- You could try [this guide](https://gist.github.com/TobiasWooldridge/22f0cdca75190b9a473f) about using the Serial interface if you are on a Paperwhite. **This may not work on newer Kindles**
- Or you could check out the [Mobileread Tools](https://wiki.mobileread.com/wiki/Kindle_Tools_Index#Debricking).
- Join the [Kindle Modding Community Discord Server](https://discord.kindlemodding.org/) and ask there.

## Conclusion 
Hopefully this Debricked your Kindle! If you still need support, join the [Kindle Modding Community](https://discord.kindlemodding.org/) and open a ticket in #questions-and-support!  

## Credits 
- MonkeyInPrivite - Wrote this Guide
- kindlemodshelfguy ([NemesisHubris](https://github.com/NemesisHubris)) - Originally showcased this guide on https://kindlemodshelf.me
- Mobileread - Advanced Instructions
- [TobiasWooldridge](https://github.com/TobiasWooldridge) - Paperwhite Serial Interface Unbricking Guide
