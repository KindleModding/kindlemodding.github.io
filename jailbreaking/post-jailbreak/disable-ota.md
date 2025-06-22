---
layout: default
grand_parent: Jailbreaking Your Kindle
parent: Post Jailbreak
title: Disabling OTA Updates
nav_order: 3
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
                <p><strong>Home → Menu → Settings → Menu → Device Info</strong></p>
                <p class="highlight">Follow the appropriate instructions for your firmware version in each step below</p>
            </div>
        </div>  

<div class="step">
            <h2>Preparation</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>No preparation needed</p>
                </div>
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>Download the <a href="https://www.mobileread.com/forums/showpost.php?p=4076733&postcount=25">renameotabin</a> extension from MobileRead forums</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Connect to computer</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>Plug your Kindle into your PC via USB cable</p>
                    <p>Wait for your computer to recognize the device</p>
                </div>   
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>Plug your Kindle into your PC via USB cable</p>
                    <p>Wait for your computer to recognize the device</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Disable OTA updates</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>Navigate to the <a href="https://kindlemodding.org/jailbreaking/jailbreak-faq.html#what-is-the-root-directory">root directory</a> of your Kindle</p>
                    <p>Create a folder called <code>update.bin.tmp.partial</code></p>
                </div>
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>Unzip and copy the <code>renameotabin</code> folder to the <code>extensions</code> folder on your Kindle</p>
                    <p class="warning">Delete any file with a name similar to <code>update.bin.tmp.partial</code> from your Kindle to prevent an automatic update</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Disconnect</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>Safely eject your Kindle from your computer</p>
                    <p>Unplug the USB cable from your Kindle</p>
                    <p class="highlight">No further action is needed - OTA updates are now disabled</p>
                </div>
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>Safely eject your Kindle from your computer</p>
                    <p>Unplug the USB cable from your Kindle</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Final steps</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>No additional steps needed</p>
                </div>   
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>Open <code>KUAL</code> (Kindle Unified Application Launcher)</p>
                    <p>Select <code>Rename OTA Binaries</code> from the menu</p>
                    <p>Select <code>Rename</code></p>
                    <p class="highlight">Your Kindle will now reboot automatically</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Done</h2>
            <div class="stepContent">
                <p>Your Kindle is now jailbroken with OTA updates disabled!</p>    
                <div class="version-block">
                    <p class="version-label">Firmware <=5.10.x:</p>
                    <p>To restore OTA updates, simply delete the <code>update.bin.tmp.partial</code> folder</p>
                </div>
                <div class="version-block">
                    <p class="version-label">Firmware >=5.11.x:</p>
                    <p>If you want to factory reset, downgrade or update your Kindle, you will <strong>need</strong> to restore the update binaries by opening KUAL, selecting <code>Rename OTA Binaries</code> and then selecting <code>Restore</code> instead of rename</p>
                </div>
                <p class="highlight">You can now safely turn off Airplane Mode and re-enable WiFi. Your Kindle will connect to the internet but will not download or install OTA updates.</p>
                <p class="note">If you want to maintain access to the Kindle Store, check out the guide for <a href="re-enabling-the-store">Re-enabling the Store</a></p>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
</div>

<style>
.version-block {
    background-color: #1e1e1e;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
    width: 100%;
}

.version-label {
    font-weight: bold;
    border-bottom: 1px solid #369d36;
    padding-bottom: 5px;
    margin-bottom: 10px;
    color: #369d36;
}
</style>

<script>new Guide("guide", "re-enabling-the-store", "Re-enable Store");</script>

## Credits

- Original guide written by [Neon](https://www.mobileread.com/forums/member.php?u=329187)
