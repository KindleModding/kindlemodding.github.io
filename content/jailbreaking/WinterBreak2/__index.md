---
layout: default
parent: Jailbreaking Your Kindle
title: WinterBreak2
weight: 9
slug: index
summary: WinterBreak2 is a browser-based Kindle jailbreak that works without Amazon registration, created by Scam.Net and Penguins184
---

# WinterBreak2

> Any sufficiently advanced technology is indistinguishable from magic.
> <br/>
> \- Arthur C. Clarke

WinterBreak2 is a browser-based jailbreak created by [Scam.Net](https://github.com/KindleModding/Winterbreak2) and [Penguins184](https://github.com/penguins184). 

## Prerequisites

- A PC, Cable, Kindle.
- Unzipping Software (E.g., <a href="https://7-zip.org/">7-Zip</a>)
- A supported model and firmware, as you have been led here by the <b><a href="../../jailbreak-wizard.html">Jailbreaking Wizard</a></b>.
- You have read <a href="../">this overview</a> and <a href="../prevent-auto-update/">filled the device</a>, if applicable
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
            <h2>Before Jailbreaking...</h2>
            <div class="stepContent">
                <div class="caution">
                    <b>Warning!</b><br>
                    Jailbreaking often involves connecting to the Internet.
                    Before beginning <b>any</b> jailbreaking process, please remember to <a href="../prevent-auto-update/">fill up your Kindle </a> as to avoid ruining the jailbreak mid-process. Additionally, please ensure <b>you have read <a href="../">this</a></b> before you start.
                </div>
                <p>If you have done the above, please commence to the next step.</p>
            </div>
        </div>
        <div class="step">
            <h2>Download the latest WinterBreak2 release:</h2>
            <div class="stepContent">
                <a href="https://github.com/KindleModding/Winterbreak2/releases/latest/download/wb2.zip" class="button">Download</a>
            </div>
        </div>
        <div class="step">
            <h2>Extract WinterBreak2 to your Kindle</h2>
            <div class="stepContent">
                <p>Plug your Kindle into your computer</p>
                <p>Extract the contents of <code>wb2.zip</code> to the root of your Kindle's storage</p>
                <p>You should see the <code>winterbreak2</code> folder on the Kindle's root</p>
            </div>
        </div>
        <div class="step">
            <h2>Eject &amp; Connect to Wi-Fi</h2>
            <div class="stepContent">
                <p>Safely eject the Kindle from your computer</p>
                <p>Make sure your Kindle is connected to a Wi-Fi network</p>
            </div>
        </div>
        <div class="step">
            <h2>Open the Experimental Browser</h2>
            <div class="stepContent">
                <p>On your Kindle, open the <b>Experimental Browser</b></p>
                <p>You can find it under: <code>Menu → Experimental Browser</code> (or <code>Settings → Device Options → Advanced → Experimental Browser</code> depending on your firmware)</p>
                <p>Navigate to the following URL (May not look identical):</p>
                <p><code>https://penguins184.xyz/wb2</code></p>
                <img src="./winterbreak2_browser.png" /> 
            </div>
        </div>
        <div class="step">
            <h2>Run the Jailbreak</h2>
            <div class="stepContent">
                <p>Press the <b>Jailbreak</b> button on the page</p>
                <p>A dialog will open and the jailbreak process will begin</p>
                <p>Wait for the process to complete</p>
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
                    You may now <b>delete</b> any filler files. Updates have been automatically blocked for you.<br><br>
                    Before you do this, also <b>remove any existing update files with a <code>.bin</code> extension</b>, if they exist in the Kindle's root.
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

# Troubleshooting

### The Experimental Browser won't load the page
- Make sure your Kindle is connected to Wi-Fi and has internet access
- Try typing the URL carefully: `https://penguins184.xyz/wb2`
- Reboot your Kindle and try again

### The jailbreak button does nothing
- Ensure you have correctly extracted the `wb2.zip` contents to the root of your Kindle
- Verify the `winterbreak2` folder is on the Kindle's root directory
- Reboot and try again

### Still having issues?
If WinterBreak2 is not working for you, and your firmware is below 5.16.4, try the original [WinterBreak](../WinterBreak/) method instead (requires Amazon registration).

## Credits
- **Scam.Net** - Concept, Discovery
- **Penguins184** - Server, Host
