---
layout: default
parent: Jailbreaking Your Kindle
title: WinterBreak
nav_order: 3
---

# WinterBreak
<a href='https://ko-fi.com/hackerdude' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://storage.ko-fi.com/cdn/brandasset/v2/support_me_on_kofi_dark.png' border='0' alt='Buy Me a Coffee at ko-fi.com' />

> After all, all devices have their dangers. The discovery of speech introduced communication – and lies.
> <br/>
> \- Isaac Asimov

WinterBreak is a jailbreak which was released on New Year's Day 2025 by [HackerDude](https://www.mobileread.com/forums/member.php?u=330416)

It is based on [Mesquito](../../mesquito/)

{: .note}
> Special thanks to Marek, NiLuJe, Katadelos and all the beta-testers during the development of this jailbreak.
>
> RIP bricked Kindles during beta-testing
> <br/>
> RIP the original deadlines

{: .warning}
Winterbreak/Mesquito does NOT work on firmware `5.18.1` and beyond.


## Prerequisites
- You will need a PC
- Your Kindle must be registered
- Your Kindle must have a valid, internet-connected WiFi network saved to it that it can connect to during steps 8 to 10 (inclusive)
- File archiver software to unzip files ([7-zip](https://www.7-zip.org/) or [WinRar](https://www.win-rar.com/start.html?&L=0) for Windows)

{: .highlight}
If you face any issues, please check the [troubleshooting](#troubleshooting) section

{: .note}
If your Kindle is running a firmware version lower than `5.18.1` and **is not yet registered**, make sure to follow [these steps to prevent your Kindle from automatically updating](../prevent-auto-update/) before registering your device with Amazon. This will help you avoid an automatic firmware update during the registration process.

## Installation Guide

<div id="guide">
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Download the latest WinterBreak release:</h2>
            <div class="stepContent">
                <a href="https://github.com/KindleModding/WinterBreak/releases/latest/download/WinterBreak.tar.gz" class="btn btn-purple">Download</a>
            </div>
        </div>
        <div class="step">
            <h2>Airplane Mode</h2>
            <div class="stepContent">
                <p>Turn on Airplane mode on your Kindle</p>
                <img src="./airplane_mode.png" />
            </div>
        </div>
        <div class="step">
            <h2>Rebooting</h2>
            <div class="stepContent">
                <p>Reboot your Kindle</p>
                <img src="./reboot.png" />
            </div>
        </div>
        <div class="step">
            <h2>Extracting WinterBreak</h2>
            <div class="stepContent">
                <p>Once it has booted, plug the Kindle into your computer and extract the contents of the <code>WinterBreak.tar.gz</code> file to a safe place on your computer</p>
                <p>Then copy the files to your Kindle (do not extract direcly to the Kindle as this may fail). Replace any files if you are prompted to</p>
                <p class="highlight">
                    For Linux/MacOS users, ENSURE the hidden folder <code>.active_content_sandbox</code> has been copied to your Kindle
                </p>
                <img src="./file_list.png" />
            </div>
        </div>
<div class="step">
            <h2>Entering Mesquito</h2>
            <div class="stepContent">
                <p>Eject the Kindle from your computer</p>
                <p>Open the Kindle Store on your Kindle by clicking on the cart icon on the home screen</p>
                <p>When prompted, click <code>Yes</code> to turn off Airplane mode</p>
                <img src="./store_aeroplane.png" />
            </div>
        </div>
        <div class="step">
            <h2>Running WinterBreak</h2>
            <div class="stepContent">
                <p>Once Mesquito has loaded, re-enable Airplane mode and click on the WinterBreak icon</p>
                <img src="./winterbreak_launcher.png" />
            </div>
        </div>
        <div class="step">
            <h2>Done</h2>
            <div class="stepContent">
                <p>Wait around 30 seconds, and your Kindle will say something along the lines of "Now you are ready to install the hotfix"</p>
                <p>If no funky text appears, retry the guide again with Airplane mode off. Once it does, turn Airplane mode back on and continue to the post-jailbreak stage
                </p>
                <p class="warning">
                    If present, delete the <code>update.bin.tmp.partial</code> file from your device to prevent an automatic update
                </p>
                <img src="./winterbreak_run.png" />
            </div>
        </div>
    </div>
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "../post-jailbreak/setting-up-a-hotfix", "Setting Up A Hotfix");</script>

# Troubleshooting
## Kindle Store encountered an unexpected error
> Faced this error and found a solution [DiabloSat](https://github.com/progzone122) & [Rexathion1](https://github.com/Rexathion1)

If an **“Unexpected error”** occurs when you try to log in to the Kindle Store or **only the Kindle Store home page** is displayed, try the following solutions:

1. Factory Reset your Kindle
2. Before registering - plug your Kindle into your PC, move the WinterBreak files to the root of your storage space
3. Login to your account, and enable Airplane mode as soon as possible
4. Connect your Kindle into your PC and delete the cache directory at the path `.active_content_sandbox/store/resource/LocalStorage` (skip this step if the `LocalStorage` directory does not exist)
5. Reboot your Kindle
6. Open the Kindle Store on your Kindle
7. When prompted, click `Yes` to turn off Airplane mode

### Alternative solution

1. After successfully registered, plug your Kindle into your PC and delete the `.active_content_sandbox` folder,  make sure to also delete any files with a name similar to `update.bin.tmp.partial` from your Kindle to prevent an automatic update
2. Reboot your Kindle
3. Disable Airplane mode and connect to a WiFi connection
4. Browse the regular Kindle Store for a couple of minutes to generate the files needed for Winterbreak to work, browse the book categories and download a free sample of any book
5. After a couple of minutes, enable Airplane mode and plug your Kindle into your PC again
6. Delete the cache directory in the path `.active_content_sandbox/store/resource/LocalStorage`. If this folder has not yet been generated, browse the Kindle Store for another couple of minutes until it is generated. Make sure to always delete the previously mentioned `update.bin.tmp.partial` file, especially before any rebooting
7. Once deleted, copy the Winterbreak files to your Kindle and reboot
8. Open the Kindle Store on your Kindle, when prompted, click `Yes` to turn off Airplane mode

# Special Thanks To Our Courageous Beta Testers
- Crystals (Bricked their PW4 testing)
- mergen3107 (Came up with the "WinterBreak" name)
- Bomberfish
- BionicGecko
- Juliet
- Rie
- Robotic
- scrad
- shamanNS
- akane
- BlackNinja
- Gimzie
- Elaine Roberts
- Lux
- Marek
- terra
