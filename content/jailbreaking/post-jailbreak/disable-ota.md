---
layout: default
parent: Post Jailbreak
title: Disabling OTA Updates
weight: 3
---

# Disabling OTA Updates

Kindles automatically update when connected to WiFi, which despite a `hotfix`, can often cause instabilities on jailbroken systems or outright remove the jailbreak.

<div id="guide">
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Determine your firmware version</h2>
            <div class="stepContent">
                <p>Before proceeding, check your Kindle's firmware version by going to:</p>
                <p><strong>Home → Menu → Settings → Device options → Device Info</strong></p>
                <p class="highlight">Follow the appropriate instructions for your firmware version in each each following step.</p>
            </div>
        </div>  

<div class="step">
            <h2>Preparation</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>No preparation needed.</p>
                </div>
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>Download the <a href="./renameotabin.zip">renameotabin</a> extension.</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Connect to computer</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>Plug your Kindle into your PC via USB cable.</p>
                    <p>Wait for your computer to recognize the device.</p>
                </div>   
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>Plug your Kindle into your PC via USB cable.</p>
                    <p>Wait for your computer to recognize the device.</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Disable OTA updates</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>Navigate to the <a href="https://kindlemodding.org/jailbreaking/jailbreak-faq.html#what-is-the-root-directory">root directory</a> of your Kindle.</p>
                    <p>Create a folder called <code>update.bin.tmp.partial</code></p>
                </div>
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>Unzip and copy the <code>renameotabin</code> folder to the <code>extensions</code> folder on your Kindle.</p>
                    <p class="warning">The <code>renameotabin</code> folder containing usable files may be nested inside another <code>renameotabin</code> folder. Copy over the inner-most folder.</p>
                    <p class="warning">Delete any file with a name similar to <code>update.bin.tmp.partial</code> or ending in <code>.bin</code> from your Kindle to prevent an automatic update.</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Disconnect</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>Safely eject your Kindle from your computer.</p>
                    <p>Unplug the USB cable from your Kindle.</p>
                    <p class="highlight">No further action is needed - OTA updates are now disabled.</p>
                </div>
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>Safely eject your Kindle from your computer.</p>
                    <p>Unplug the USB cable from your Kindle.</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Final steps</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>No additional steps needed.</p>
                </div>   
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>Open <code>KUAL</code> (Kindle Unified Application Launcher).</p>
                    <p>Select <code>Rename OTA Binaries</code> from the menu.</p>
                    <p>Select <code>Rename</code>.</p>
                    <p class="highlight">Your Kindle will now reboot automatically.</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Done</h2>
            <div class="stepContent">
                <p>Your Kindle is now jailbroken with OTA updates disabled!</p>    
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>To restore OTA updates, simply delete the <code>update.bin.tmp.partial</code> folder.</p>
                </div>
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>If you want to factory reset, downgrade, or update your Kindle, you will <strong>need</strong> to restore the update binaries by opening KUAL, selecting <code>Rename OTA Binaries</code> and then selecting <code>Restore</code> instead of rename.</p>
                </div>
                <p class="highlight">You can now safely turn off Airplane Mode and re-enable WiFi. Your Kindle will connect to the internet but will not download or install OTA updates.</p>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
</div>

<script>new Guide("guide", "re-enabling-the-store", "Re-enable Store");</script>

## Credits

- Original guide written by [Neon](https://www.mobileread.com/forums/member.php?u=329187)
