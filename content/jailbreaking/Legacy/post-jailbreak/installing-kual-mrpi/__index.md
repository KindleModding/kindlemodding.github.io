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
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Download the correct KUAL version</h2>
            <div class="stepContent">
                <table>
                <thead>
                    <tr>
                        <th>Device Generation</th>
                        <th>Instructions</th>
                        <th>KUAL Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>K5 and newer</td>
                        <td>Download PEKI</td>
                        <td><a href="https://github.com/KindleTweaks/PEKI/releases/latest/download/PEKI.zip">PEKI</a></td>
                    </tr>
                    <tr>
                        <td>K4 and older</td>
                        <td>Download, place in documents folder and move onto <a href="../koreader.html">Installing KOReader</a></td>
                        <td><a href="./KUAL-KDK-1.0.azw2">KUAL-KDK-1.0.azw2</a></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        <div class="step">
            <h2>Download MRPI</h2>
            <div class="stepContent">
                <a class="button" href="./kual-mrinstaller-khf.zip">MRPI (for modern devices)</a>
                <p>This version of MRPI is provided by <a href="https://fw.notmarek.com/khf/">Marek</a></p>
                <a class="button" href="./kual-mrinstaller-1.7.N-r19303.zip">MRPI (for legacy devices - pre-K5)</a>
                <p class="important">You may need to free up 220 MB of space to install both MRPI and KUAL <a href="#troubleshooting">without issues</a></p>
                <p class="warning"><b>Make sure Airplane mode is on before freeing up this space.</b> If it isn't, your Kindle may use the freed space to download and install an OTA update.</p>
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
            <h2>Copying KUAL</h2>
            <div class="stepContent">
                <p>Unzip <code>PEKI.zip</code>, and copy both <code>KUAL.sh</code> and <code>KUAL.jar</code> to the <code>documents</code> folder on the Kindle.</p>
            </div>
        </div>
        <div class="step">
            <h2>Eject and unplug your Kindle</h2>
            <div class="stepContent">
                <img src="./eject.png" />
            </div>
        </div>
        <div class="step">
            <h2>Done</h2>
            <div class="stepContent">
                <p>You can now open KUAL by clicking on the KUAL item in your library</p>
            </div>
        </div>    
    </div>
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "../disable-ota.html", "Disabling OTA Updates");</script>

## Troubleshooting

- The installation or functionality of **KUAL** and **MRPI** may fail if there is not enough free space on your Kindle. If you are using the "[fill storage](../../prevent-auto-update/)" method to block updates, make sure your Kindle has `220 MB` of available space before installing KUAL and MRPI
- Verify that all folders and files are in the correct locations on your Kindle.
- Try restarting the Kindle if the `;log mrpi` command is not responding
- Ensure that the file does not have any special characters such as brackets in it, some browsers may rename files adding `(1)` or other additional suffixes to the file name and these should be removed before copying to the Kindle