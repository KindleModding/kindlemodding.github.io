---
layout: default
grand_parent: Jailbreaking Your Kindle
parent: Post Jailbreak
title: Re-enabling the Store
nav_order: 4
---

# Re-enabling the Store

{: .warning }
Ensure you've [disabled OTA Updates](../disable-ota) before re-enabling the store.

<div id="guide">
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Connect your Kindle to your computer</h2>
            <div class="stepContent">
                <p>Plug your Kindle into your computer via USB cable</p>
                <p class="highlight">Make sure your Kindle has the OTA updates disabled via the renameotabin tool</p>
            </div>
        </div>
        <div class="step">
            <h2>Delete the .active_content_sandbox folder</h2>
            <div class="stepContent">
                <p>Navigate to the root directory of your Kindle</p>
                <p>Find and delete the <code>.active_content_sandbox</code> folder</p>
                <p class="highlight">This folder may be hidden. Make sure to enable viewing of hidden files in your file explorer</p>
            </div>
        </div>
        <div class="step">
            <h2>Eject and unplug your Kindle</h2>
            <div class="stepContent">
                <p>Safely eject your Kindle from your computer</p>
                <p>Unplug the USB cable from your Kindle</p>
            </div>
        </div>
        <div class="step">
            <h2>Reboot your Kindle</h2>
            <div class="stepContent">
                <p>Hold the power button for about 20 seconds until your Kindle reboots</p>
                <p>Wait for the device to fully restart</p>
                <p class="highlight">The reboot process may take a couple of minutes</p>
            </div>
        </div>
        <div class="step">
            <h2>Done</h2>
            <div class="stepContent">
                <p>The Kindle store functionality should now be re-enabled on your device</p>
                <p class="highlight">If you still experience issues accessing the store, try the troubleshooting tips below</p>
            </div>
        </div>    
    </div>
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide");</script>

## Troubleshooting

- If you cannot locate the hidden .active_content_sandbox folder, try using the command line or enabling hidden files in your file explorer
- If the store still doesn't work after rebooting, try a second reboot
- Make sure airplane mode is turned off when trying to access the store
- Ensure your Kindle is registered to your Amazon account
- Verify that OTA updates remain disabled after this process
