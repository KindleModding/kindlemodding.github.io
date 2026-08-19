---
layout: default
parent: Jailbreaking Your Kindle
title: SpringBreak
weight: 3
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

- A PC, Cable, Kindle.
- Unzipping Software (E.g., <a href="https://7-zip.org/">7-Zip</a>)
- A registered, supported model and firmware, as you have been led here by the <b><a href="../../jailbreak-wizard.html">Jailbreaking Wizard</a></b>.
- You have read <a href="../">this overview</a>
- A Wi-Fi connection.

> [!INFO]
> If you face any difficulty in following these guides, please navigate to the [troubleshooting](#troubleshooting) section, and/or make a ticket in the KindleModding Discord support forums/Community Reddit.

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
                    On the contrary to other jailbreaks, <b>Filler files may make this process FAIL.</b> This process creates thousands of nested folders to work on your Kindle, if there is not enough space it won't work! Preferably, leave more space and don't use Wi-Fi. Also, do it fast. <b>Nethertheless, read <a href="../">this</a> before you start.</b>
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
            <h2>After Jailbreaking...</h2>
            <div class="stepContent">
                <div class="tip">
                    <b>What's Next?</b><br>
                    Commence to the <a href="../whats-next">What's Next</a> section to read about installing scriptlets, homebrew, and KOReader.<br>Read the <b>whole section</b> thoroughly.
                </div>
                <div class="caution">
                    If they exist, <b>remove any existing update files with a <code>.bin</code> extension</b>, in the Kindle's root.
                </div>
                <p>Have fun! :)</p>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "../whats-next", "What's Next?");</script>

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
