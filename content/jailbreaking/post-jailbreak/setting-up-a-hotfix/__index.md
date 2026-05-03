---
layout: default
parent: Post Jailbreak
title: Setting Up A Hotfix
weight: 1
slug: index
---

# Setting Up A Hotfix
A hotfix allows your Kindle's jailbreak to persist after updating. There are two different hotfixes and which one you need to install depends on which method you used to jailbreak your Kindle.

> [!WARNING]
> This is not necessary for some types of legacy jailbreaks, check the corresponding page

<div id="guide">
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Download The Hotfix</h2>
            <div class="stepContent">
                <a href="https://github.com/KindleModding/Hotfix/releases/latest/download/Update_hotfix_universal.bin" class="button">Download</a>
                <br/>
            </div>
        </div>
        <div class="step">
            <h2>Copy The Hotfix</h2>
            <div class="stepContent">
                <p>Plug your Kindle into your PC and copy the <code>Update_hotfix_universal.bin</code> file to it</p>
                <p class="warning">
                   If you see any other files on your Kindle ending in <code>.bin</code>, or have a similar name to <code>update.bin.tmp.partial</code>, you must delete them for the hotfix to work. <br> Remember to enable Airplane mode to prevent any automatic updates from downloading
                </p>
                <img src="./copy_hotfix.png" />
            </div>
        </div>
        <div class="step">
            <h2>Install The Hotfix</h2>
            <div class="stepContent">
                <p>Eject the Kindle and unplug it, then open settings, click on the three dots, and select <code>Update Your Kindle</code></p>
                <br/>
                <img src="./update_settings.png" />
            </div>
        </div>
        <div class="step">
            <h2>Confirming Hotfix Install</h2>
            <div class="stepContent">
                <p>If asked, select <code>Update</code>. You can expect this to install the hotfix, as an update.</p>
                <br/>
                <img src="./update_dialog.png" />
            </div>
        </div>
        <div class="step">
            <h2>Running the hotfix</h2>
            <div class="stepContent">
                <p>Once the hotfix has installed, you'll need to run it.</p>
                <p>Run the hotfix by selecting the <code>Run Hotfix</code> booklet in your library.</p>
                <p>Once the hotfix is done running, you can install <code>KUAL</code> and <code>MRPI</code></p>
                <p class="note">You will need to run the hotfix booklet after every OTA update</p>
                <img src="./run_hotfix.png" />
            </div>
        </div>
    </div>
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "../installing-kual-mrpi", "Installing KUAL & MRPI");</script>

## Troubleshooting

- Verify that all folders and files are in the correct locations on your Kindle
- Ensure that the files do not have any special characters such as brackets in it, some browsers may rename files adding (1) or other additional suffixes to the file name and these should be removed before copying to the Kindle

### Hotfix Won't Install
There is a good chance that, after installing an older version of the Hotfix, you disabled OTA updates. As a result, the Hotfix update file may be ignored.

Follow these steps to update the Hotfix. **These instructions apply only if you have already [blocked OTA updates](../disable-ota)**.

1. Activate Airplane mode
2. Enable OTA update (KUAL -> Rename OTA binaries -> Restore)
3. Follow the Hotfix installation instructions above
4. Disable OTA update (KUAL -> Rename OTA binaries -> Rename)
