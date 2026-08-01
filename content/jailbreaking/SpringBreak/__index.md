---
layout: default
parent: Jailbreaking Your Kindle
title: SpringBreak
weight: 1
slug: index
kofi: https://ko-fi.com/penguins186
---

# SpringBreak

> If we had no winter, the spring would not be so pleasant.
> <br/>
> \- Anne Bradstreet

SpringBreak is a jailbreak released on 22/06/26 by [Penguins184](https://ko-fi.com/penguins186).

You can read the writeup [here](https://penguins184.xyz/blog/springbreak-jailbreak/).

## Prerequisites

- A PC, Cable
- A Registered `KT5`, `PW5(SE)`, `KT4`, or `PW4`, running `5.19.2(.0.1)` or `5.18.1.1.1`
- Patience, Wi-Fi connection.

> [!INFO]
> If you face any difficulty in following these guides, please navigate to the [troubleshooting](#troubleshooting) section, and/or make a ticket in the KindleModding Discord support forums.

## Installation Guide

<div id="guide">
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Download the latest SpringBreak release:</h2>
            <div class="stepContent">
                <a href="https://github.com/KindleModding/SpringBreak/releases/latest/download/springbreak.zip" class="button">Download</a>
                <p class="note">
                    <b>Filler files may make this process FAIL.</b> This process creates thousands of nested folders to work on your Kindle, if there is not enough space it won't work! Preferably, leave more space and don't use Wi-Fi. Also, do it fast.
                </p>
                <p class="tip">
                    On MacOS, you do not need to do this. The command you will run later in this guide does it automatically!
                </p>
            </div>
        </div>
        <div class="step">
            <h2>Aeroplane Mode</h2>
            <div class="stepContent">
                <p>Turn on Aeroplane Mode, on your Kindle.</p>
                <img src="./airplane_mode.png">
            </div>
        </div>
        <div class="step">
            <h2>Reboot</h2>
            <div class="stepContent">
                <p>Restart your Kindle.</p>
                <img src="./reboot.png">
            </div>
        </div>
        <div class="step">
            <h2>Plug in your Kindle</h2>
            <div class="stepContent">
                <p>Connect the Kindle to your PC via USB.</p>
                <p class="warning">
                    If the screen does not look <b>exactly</b> like below, especially if it has a 'disconnect' button, you have already gone wrong. Your Kindle is not supported.
                </p>
                <p class="tip">
                    <b>For Linux users, at this stage open your Kindle in your file explorer to mount it if it doesn't happen automatically. Then close the explorer, it is not necessary.</b>
                </p>
                <img src="./usb.jpg">
            </div>
        </div>
        <div class="step">
            <h2>Unzip</h2>
            <div class="stepContent">
                <p>Unzip the SpringBreak release on your computer.</p>
                <img src="./unzip.png">
            </div>
        </div>
        <div class="step">
            <h2>Run the Binary</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Windows:</p>
                    <p>Double-click <code>springbreak.exe</code> to begin.</p>
                </div>
                <div class="version-block">
                    <p class="version-label">Linux:</p>
                    <p><code>chmod +x ./springbreak-linux && ./springbreak-linux</code></p>
                </div>
                <div class="version-block">
                    <p class="version-label">MacOS:</p>
                    <p>Run this whole snippet in a terminal: <code style="text-wrap: wrap; overflow-wrap: anywhere;">curl -L https://github.com/KindleModding/SpringBreak/releases/latest/download/springbreak.zip -o springbreak.zip && unzip springbreak.zip && cd springbreak && chmod +x ./springbreak-darwin && ./springbreak-darwin</code></p>
                </div>
            </div>
        </div>
        <div class="step">
            <h2>Select your Kindle</h2>
            <div class="stepContent">
                <p>Choose your Kindle from the Device list. If it is plugged in (<b>and mounted</b> - see step 4), it will show up.</p>
                <p class="note">
                    Type in the number that corresponds to the Kindle and press enter.
                </p>
                <img src="./select.png">
            </div>
        </div>
        <div class="step">
            <h2>Wait...</h2>
            <div class="stepContent">
                <p>Your Kindle will now be filled up using filler files.</p>
                <p class="tip">
                    This will take a considerably greater amount of time on Windows than it will Linux.
                </p>
                <img src="./filling.png">
            </div>
        </div>
        <div class="step">
            <h2>Open the Kindle Store</h2>
            <div class="stepContent">
                <p>Unplug the Kindle, on the Homescreen press the 'store' icon.</p>
                <p class="note">
                    When prompted, turn off aeroplane mode. <b>Yes, you need Wi-Fi! You can turn it off immediately after SpringBreak has loaded.</b>
                </p>
                <img src="./store_aeroplane.png">
            </div>
        </div>
        <div class="step">
            <h2>Jailbreak!</h2>
            <div class="stepContent">
                <p>SpringBreak should load, give it time and text should appear.</p>
                <img src="./jailbreak.png">
            </div>
        </div>
        <div class="step">
            <h2>Success!</h2>
            <div class="stepContent">
                <p>After a few seconds you should see this screen, indicating that the jailbreak is successful.</p>
                <img src="./jailbreak2.png">
            </div>
        </div>
        <div class="step">
            <h2>Clean-up</h2>
            <div class="stepContent">
                <p>Plug the Kindle back in once you're on the homepage and the system UI has restarted. Run the binary (or, on MacOS, the command), select the Kindle, and it will clean-up.</p>
                <p class="caution">
                    If you don't do this, the Kindle will take upwards of <b>15 minutes</b> to boot.
                </p>
                <img src="./cleaning.png">
            </div>
        </div>
        <div class="step">
            <h2>Complete</h2>
            <div class="stepContent">
                <p>You're almost done!
                    1) Double check that you don't have any update files.
                    2) Remove filler files you used for preventing updates. This new JB method blocks them for you.
                    3) Restart your Kindle after unplugging it from USB!
                    
You can now copy scriplets (.sh files) to documents and they should show up in Kindle menu once you unplug.
                                      
<br>SpringBreak is shipped on a <b>new</b> jailbreak stack (called <code>hdnext</code>). The Hotfix is pre-installed and the store is re-enabled for you! You can commence by downloading KUAL directly.<br><br>...Additionally, you get a new <i>package manager</i> called KPM. To try out the basics on your device, use <code>;kpm update</code> and <code>;kpm install koreader</code>.</p>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "../post-jailbreak/installing-kual-mrpi", "Installing KUAL & MRPI");</script>

## Troubleshooting

1. Opening the store says 'Application Error'; Unplug and re-plug the Kindle once or a couple of times until it works.
2. Don't see your Kindle? Ensure it is mounted if you are on Linux (Open it in a file explorer).
3. Filling fails due to lack of space? Delete some filler files, re-run the script to delete the old partial fillers, and retry.

## Credits

- [Penguins184](https://ko-fi.com/penguins186) - Creator of this Jailbreak, Wiki Page
- Hhhhhhhhh - Initial LPE, Core ideas
- [Hackerdude](https://ko-fi.com/hackerdude) - Thought of using filler files so the Kindle Store could become a vector
- [Scam.net](https://ko-fi.com/scamdotnet1) - Reminded me of numerous key details during my exploit discovery which pointed me in the correct direction.
- Thanks to all beta-testers: EastLancsRaceway, redbullguzzler, ava
