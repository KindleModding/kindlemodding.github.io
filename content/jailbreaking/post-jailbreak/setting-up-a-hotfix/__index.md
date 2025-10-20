---
layout: default
grand_parent: Jailbreaking Your Kindle
parent: Post Jailbreak
title: Setting Up A Hotfix
weight: 1
slug: index
---

# Setting Up A Hotfix
A hotfix allows your Kindle's jailbreak to persist after updating. There are two different hotfixes and which one you need to install depends on which method you used to jailbreak your Kindle.

<blockquote class="info">
If you installed OTARenamer, make sure to uninstall it beforehand or the hotfix will not be detected by the Kindle
</blockquote>

<div id="guide">
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Download The Hotfix</h2>
            <div class="stepContent">
                <a href="https://github.com/KindleModding/Hotfix/releases/latest/download/Update_hotfix_universal.bin" class="button">Download</a>
                <br/>
                <a href="https://github.com/KindleModding/Hotfix/releases/download/v2.2.1/Update_hotfix_universal.bin" class="button">Download (Compatibility)</a>

                <p class="warning">
                    If scriptlets don't work, please redo these steps using the <b>compatibility hotfix!</b>
                </p>
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
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "../installing-kual-mrpi", "Installing KUAL & MRPI");</script>

# Troubleshooting

## Hotfix Won't Install
There is a good chance that after installing an older version of Hotfix you disabled OTA updates, meaning the Hotfix update file will be ignored!

**Follow these steps to update the Hotfix:**
1. Activate airplane mode
2. Enable OTA update (KUAL -> Rename OTA binaries -> Restore)
3. Follow the Hotfix installation instructions above
4. Disable OTA update (KUAL -> Rename OTA binaries -> Rename)