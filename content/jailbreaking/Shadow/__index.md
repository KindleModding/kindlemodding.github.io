---
layout: default
parent: Jailbreaking Your Kindle
title: Shadow
weight: 3
slug: index
kofi: https://ko-fi.com/yubaix
---

# Shadow

> My name is Nobody.
> <br/>
> \- Homer

Shadow is a jailbreak released on 26/10/2026 by [Ava](https://ko-fi.com/yubaix).

You can read the writeup [here](https://chirp.tene7.com/?action=view&url=shadow-dummy-folders-an-obvious-overflow-and-a-rop-chain).

## Prerequisites

- A PC, Kindle.
- A supported model and firmware, as you have been led here by the <b><a href="/jailbreak-wizard.html">Jailbreaking Wizard</a></b>.
- You have read <a href="/jailbreaking">this overview</a>.
- A Wi-Fi connection on your computer.

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
            <h2>Download the latest Shadow release</h2>
            <div class="stepContent">
            <a href="https://github.com/KindleModding/Shadow/releases/latest/download/shadow.zip" class="button">Download</a>
                <div class="note">
                    <p>On the contrary to other jailbreaks, <i>Filler files are not necessary!</i> This is because your Kindle never has to connect to the internet during the jailbreak. They will not make it fail either, so deleting filler files that are already present is also not necessary.</p>
                </div>
                <div class="warning">
                    <b>Warning!</b><br>
                    <p>Enabling airplane mode is still recommended during the jailbreak process to prevent updates!</p>
                </div>
                <p>If you have done the above, please commence to the next step.</p>
            </div>
        </div>
        <div class="step">
            <h2>Note your device's build number</h2>
            <div class="stepContent">
              <p>On your Kindle, open the device info menu. (<code>3 Dots → Settings → Device options → Device info </code>)</p>
                <p>Note down your exact build number for later. This is the 10 digit number in parentheses in the settings menu.</p>
                <p class="note">
                    The specific value should be the one after both "Kindle" and after the number with dots in between multiple numbers.
                </p>
                <img src = "./firmware.png">
                <p>Exit out of the menu by clicking the X in the top right.</p>
            </div>
        </div>
        <div class="step">
            <h2>Ensure MTP compatibility</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Windows:</p>
                    <p>Follow steps 4-6 to setup Zadig.</p>
                </div>
                <div class="version-block">
                    <p class="version-label">Linux:</p>
                    <p>Open a terminal, and run <code>killall kiod6 kiod5 gvfsd-mtp</code>. Additionally, close any file managers you have open (Dolphin, Nautilus, etc).</p>
                </div>
                <div class="version-block">
                    <p class="version-label">MacOS:</p>
                    <p>Open a terminal, and run<code>killall ptpcamerad</code>. Additionally, close any file managers you have open, such as Finder.</p>
                </div>
                <p>If you are not on Windows, you may skip to step 7 at this point. If you are on Windows, please follow steps 4-6.
            </div>
        </div>
        <div class="step">
            <h2>Open Zadig</h2>
            <div class="stepContent">
                <p>If you have not done so already, unzip the .zip file you previously downloaded.</p>
                <p><b>Do not open Shadow yet,</b>instead, open <code>zadig-2.9.exe</code></p>
                <img src="./zadig_file.png">
            </div>
        </div>
        <div class="step">
            <h2>Select the Kindle and driver</h2>
            <div class="stepContent">
                <p>Plug your Kindle into your computer.</p>
                <p>At the top of Zadig, click options, and then click "Show all Devices"</p>
                <p>In the dropdown menu immediately below the top bar, find and select your Kindle.</p>
                <p>After selecting your Kindle, click the down arrow to the right side of the right box until that box says "WinUSB".</p>
                <p>Once all is done correctly, your Zadig menu should look something like the image below:</p>
                <img src="./zadig_setup.png">
            </div>
        </div>
        <div class="step">
            <h2>Replace the driver</h2>
            <div class="stepContent">
                <p>Click "Replace driver" or "Install driver" and wait for the process to complete.</p>
                <p>This can take a few minutes. Once complete, a box will show up. Click "OK."</p>
                <p>Then, unplug and replug your Kindle into your computer. Once this is done, you may close Zadig.</p>
                <div class="warning">
                    <b>Warning!</b><br>
                    <p>Restoring the driver via Zadig is difficult and flaky. Because of this, <b>until you reboot your computer</b>, you will not be able to transfer files over USB to your Kindle. No permanent changes are made, and everything is set back to normal after a reboot.</p>
                </div>
                <img src = "./replace_success.png">
            </div>
        </div>
        <div class="step">
            <h2>Open Shadow!</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Windows:</p>
                    <p>Double click "shadow-windows.exe".</p>
                </div>
                <div class="version-block">
                    <p class="version-label">Linux:</p>
                    <p>Open a terminal in the folder where you extracted the Shadow release, and run <code>chmod +x shadow-linux && sudo ./shadow-linux</code></p>
                    <p>Root privileges are needed to run this, as root is required to talk to devices over USB.</p>
                </div>
                <div class="version-block">
                    <p class="version-label">MacOS:</p>
                    <p>Open a terminal in the folder where you extracted the Shadow release, and run <code>chmod +x shadow-darwin && sudo ./shadow-darwin</code></p>
                </div>
                <img src="./menu.png">
            </div>
        </div>
        <div class="step">
            <h2>Enter in your build number</h2>
            <div class="stepContent">
                <p>In the application, enter in your ten-digit build number from before. Ensure that it matches exactly, as the exploit may not run otherwise.</p>
                <img src="./id.png">
            </div>
        </div>
        <div class="step">
            <h2>Jailbreak!</h2>
            <div class="stepContent">
                <p>After ensuring your build number matches the build number from before <b>exactly</b>, hit enter.</p>
                <p>When prompted, unplug your Kindle, wait a second or two, and then re-plug your Kindle.</p>
                <p class="note">
                    There is a small chance (<1%) that an error message will appear saying that "The exploit did not get a clean address leak this attempt." -- If this happens, try again from the previous step. If this happens repeatedly, join the Discord server for support.
                </p>
                <p>If all goes well, some text should flow down the top left of your Kindle screen, and the output of Shadow should match the image below.</p>
                <img src="./success.png">
            </div>
        </div>
        <div class="step">
            <h2>After Jailbreaking...</h2>
            <div class="stepContent">
                <div class="tip">
                    <b>What's Next?</b><br>
                    After the reboot, you may unplug your Kindle, and commence to the <a href="../whats-next">What's Next</a> section to read about installing scriptlets, homebrew, and KOReader.<br>Read the <b>whole section</b> thoroughly.
                </div>
                <div class="caution">
                    You may now <b>delete</b> any filler files. Updates have been automatically blocked for you.<br><br>
                    Before you do this, also <b>remove any existing update files with a <code>.bin</code> extension</b>, if they exist in the Kindle's root.
                </div>
                <p class="warning">
                    Due to how Shadow works, some empty folders are left behind in the base USB folder of your Kindle. These folders are completely harmless, but if you would like to remove them, you may use the <a href="./cleanup-shadow-dirs.sh" download="cleanup-shadow-dirs.sh">provided scriptlet</a>. See the next section for how to use scriptlets, if you are confused.
                </p>
                <p class="warning">
                    If you are on Windows, you must reboot your computer in order to restore the MTP driver to access your Kindle over USB.
                </p>
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

1. "Device busy" or not detecting the Kindle?
    - Ensure that all appropriate killall commands for your operating system were ran, and then close any file managers you may have open.

## Credits

- Thanks to all beta-testers: usag1, scam.net, RumpheL
