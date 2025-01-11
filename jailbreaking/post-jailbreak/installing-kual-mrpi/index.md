---
layout: default
grand_parent: Jailbreaking Your Kindle
parent: Post Jailbreak
title: Installing KUAL/MRPI
nav_order: 2
---

# Installing KUAL and MRPI
You will need to install KUAL (Kindle Unified Application Launcher) and MRPI (MobileRead Package Installer) to run homebrew on your Kindle.

<div id="guide">
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Download MRPI</h2>
            <div class="stepContent">
                <a href="https://fw.notmarek.com/khf/kual-mrinstaller-khf.tar.xz" class="btn btn-purple">MRPI</a>
                <p>This version of MRPI is provided by <a href="https://fw.notmarek.com/khf/">Marek</a></p>
            </div>
        </div>
        <div class="step">
            <h2>Download the correct KUAL version</h2>
            <div class="stepContent">
                <a href="https://www.mobileread.com/forums/showthread.php?t=225030#:~:text=A%20%7C%20Upstream-,KUAL%20(coplate),-%7C%20KUAL%2D7202402" class="btn btn-purple">Kual (Coplate) - For Kindles newer than the K5</a>
                <br/>
                <a href="https://www.mobileread.com/forums/showthread.php?t=225030#:~:text=A%20%7C%20MRPI-,KUAL,-%7C%20KUAL%2Dv2.7.33" class="btn btn-purple">KUAL - For legacy devices</a>
            </div>
        </div>
        <div class="step">
            <h2>Extracting MRPI</h2>
            <div class="stepContent">
            <p>Extract the contents of the MRPI you downloaded, and copy the <code>extensions</code> and <code>mrpackages</code> folders to your Kindle</p>
            <br/>
            <img src="./mrpackages_extensions_folders.png" />
            </div>
        </div>
        <div class="step">
            <h2>Extracting KUAL</h2>
            <div class="stepContent">
                <p>Extract the KUAL you downloaded and find the <code>Update_KUALBooklet_*_install.bin</code> file and copy it to your Kindle's <code>mrpackages</code> folder</p>
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
                <p>Now wait whilst KUAL is installed, your Kindle screen turn white and show some icons, after a while you will be returned to your library and see a <code>KUAL</code> book appear in it.</p>
                <p class="warning">If you see a "Application Error" dialog, you can close it without worry - this is normal behaviour on some modern Kindles</p>
                <br/>
                <img src="./success.png" />
            </div>
        </div>    
    </div>

    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "../disable-ota", "Disabling OTA Updates");</script>


[Disabling OTA Updates](./disable-ota){: .btn .btn-purple}

## Troubleshooting
- Verify the location of all the folders and files on the Kindle
- Try copying the `Update_KUALBooklet_hotfix_*_install.bin` file to the root of your Kindle when connected to your PC, and then go to `Settings` > `Update Your Kindle`, then resume from `step 5`