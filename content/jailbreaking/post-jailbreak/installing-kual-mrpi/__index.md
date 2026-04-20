---
layout: default
parent: Post Jailbreak
title: Installing KUAL & MRPI
weight: 2
slug: index
---

# Installing KUAL and MRPI
You will need to install KUAL (Kindle Unified Application Launcher) and MRPI (MobileRead Package Installer) to run homebrew on your Kindle.

<div id="guide">
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Download MRPI</h2>
            <div class="stepContent">
                <a class="button" href="./kual-mrinstaller-khf.tar.xz">MRPI</a>
                <p>This version of MRPI is provided by <a href="https://fw.notmarek.com/khf/">Marek</a></p>
                <p class="important">You may need to free up 500 MB of space to install both MRPI and KUAL <a href="#troubleshooting">without issues</a></p>
            </div>
        </div>
        <div class="step">
            <h2>Download the correct KUAL version</h2>
            <div class="stepContent">
                <a class="button" href="./Update_KUALBooklet_HDRepack.bin">KUAL (Coplate) - For Kindles newer than the K5 (any kindle released after 2012)</a>
                <p>The above version of KUAL is provided by HackerDude</p>
                <br/>
                <a class="button" href="./KUAL-v2.7.37-gfcb45b5-20250419.tar.xz">KUAL - For legacy devices</a>
                <a class="button" href="https://github.com/KindleTweaks/PEKI" style="margin-top: 10px;">PEKI - Follow this guide instead if Coplate is broken</a>
            </div>
        </div>
        <div class="step">
            <h2>Extracting MRPI</h2>
            <div class="stepContent">
            <p>Extract the contents of the MRPI tar file you downloaded, and copy the <code>extensions</code> and <code>mrpackages</code> folders to your Kindle</p>
            <br/>
            <img src="./mrpackages_extensions_folders.png" />
            </div>
        </div>
        <div class="step">
            <h2>Extracting/Copying KUAL</h2>
            <div class="stepContent">
            <p class="note">If your device is older than the K5 (Kindle Touch), you only need to copy the <code>KUAL-KDK-1.0.azw2</code> file to your Kindle's <code>documents</code> folder, you can skip the next steps</p>
            <p class="important">If you downloaded KUAL for <strong>legacy devices</strong>, extract the .tar.xz to get the <code>Update_KUALBooklet_*_install.bin</code> file</p>
            <p>Copy the <code>Update_KUALBooklet_*_install.bin</code> file to your Kindle's <code>mrpackages</code> folder</p>
                <br/>
                <img src="./kual_install_bin.png" />
            </div>
        </div>
        <div class="step">
            <h2>Eject and unplug your Kindle</h2>
            <div class="stepContent">
                <img src="./eject.png" />
            </div>
        </div>
        <div class="step">
            <h2>Running MRPI</h2>
            <div class="stepContent">
                <p>On your Kindle, type <code>;log mrpi</code> into the search bar and hit enter</p>
                <br/>
                <img src="./run_dispatch.png" />
            </div>
        </div>
        <div class="step">
            <h2>Done</h2>
            <div class="stepContent">
                <p>Now wait whilst KUAL is installed, your Kindle screen turns white and shows some icons, after a while you will be returned to your library and see a <code>KUAL</code> book appear in it.</p>
                <p class="highlight">If you see a "Application Error" dialog, you can close it without worry - this is normal behaviour on some modern Kindles</p>
                <br/>
                <img src="./success.png" />
                <p>If you face any issues, please read the <a href="#troubleshooting">troubleshooting</a> section.</p>
            </div>
        </div>    
    </div>
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "../disable-ota.html", "Disabling OTA Updates");</script>

## Troubleshooting

- The installation or functionality of **KUAL** and **MRPI** may fail if there is not enough free space on your Kindle. If you are using the "[fill storage](../../prevent-auto-update/)" method to block updates, make sure your Kindle has at least `500 MB` of available space before installing KUAL and MRPI
- Verify that all folders and files are in the correct locations on your Kindle.
- Try restarting the Kindle if the `;log mrpi` command is not responding
- Ensure that the file does not have any special characters such as brackets in it, some browsers may rename files adding `(1)` or other additional suffixes to the file name and these should be removed before copying to the Kindle