---
layout: default
parent: Jailbreaking Your Kindle
title: Prevent Automatic Updates
weight: 99
slug: index
---

# Preventing Automatic Updates by Filling Kindle Storage

## Why Fill the Kindle's Storage?

Kindle devices can automatically download and install firmware updates when they have enough free storage space. These updates can block jailbreaking methods. Automatic updates may occur when:

- You open the Kindle Store.
- You register your Kindle to an Amazon account.
- The device is connected to Wi-Fi, even briefly.
- The Kindle is rebooted while connected to the internet.

Filling the Kindle's storage (leaving only 50-90 MB free) prevents the device from downloading and installing updates, as the update process requires more free space.

## How to Fill the Kindle's Storage

> [!WARNING]
> Delete `update-whatever.bin` OR `update.partial.bin`, and turn on Airplane Mode!

You can use a simple script to fill your Kindle's storage with dummy files, leaving only a small amount of free space. This script is available in the [Kindle-Filler-Disk GitHub repository](https://github.com/bastianmarin/Kindle-Filler-Disk/) along with other useful scripts for Windows, macOS, and Linux.

> [!WARNING]
> This script will not work on 11th generation Kindles and newer, as these devices use MTP (Media Transfer Protocol) instead of standard USB storage when connected to a computer
>
> You will need to manually fill your Kindle with "dummy" files. Download the [Filler files](https://github.com/bastianmarin/Kindle-Filler-Disk/tree/main/MTP/) that match your Kindle's storage from the link below. Extract the files, then move them to the root of your Kindle (you can also save them on a separate folder). After doing so, make sure to leave only 50–90 MB of free space

<div id="guide">
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>1. Put Your Kindle in Airplane Mode</h2>
            <div class="stepContent">
                <p>Turn on Airplane mode on your Kindle</p>
                <img src="../WinterBreak/airplane_mode.png" />
            </div>
        </div>
        <div class="step">
            <h2>2. Connect Your Kindle to Your Computer via USB</h2>
            <div class="stepContent">
                <p>Use a USB cable to connect your Kindle to your computer.</p>
                <img src="./usb-mode.png"/>
                <p>Wait for the Kindle to appear as a USB drive.</p>
            </div>
        </div>
        <div class="step">
            <h2>3. Download the Disk Filler Script</h2>
            <div class="stepContent">
                <p>Go to the <a href="https://github.com/bastianmarin/Kindle-Filler-Disk/">Kindle-Filler-Disk GitHub repository</a>.</p>
                <img src="./github-files.png"/>
                <p>Download the appropriate script for your operating system:</p>
                <div style="margin-left:2em">
                    <span><strong>Windows:</strong> <code>Filler.ps1</code></span><br/>
                    <span><strong>macOS/Linux:</strong> <code>Filler.sh</code></span>
                </div>
            </div>
        </div>
        <div class="step">
            <h2>4. Move the Script to Your Kindle</h2>
            <div class="stepContent">
                <p>Copy the downloaded script file to the root directory of your Kindle (the main folder you see when you open the Kindle as a USB drive).</p>
                <img src="./root-main.png"/>
                <span><strong>Windows:</strong> <code>Filler.ps1</code></span><br/>
                <span><strong>macOS/Linux:</strong> <code>Filler.sh</code></span>
            </div>
        </div>
          <div class="step">
              <h2>5. Run the Script</h2>
              <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Windows:</p>
                    <p>Open File Explorer and navigate to your Kindle drive.</p>
                    <p>Right-click <code>Filler.ps1</code> and select <strong>Run with PowerShell</strong>.</p>
                    <p>If you see an execution policy error, open PowerShell in the Kindle drive and run:</p>
                    <pre><code>powershell -ExecutionPolicy Bypass -File .\Filler.ps1</code></pre>
                </div>
                <div class="version-block">
                    <p class="version-label">macOS/Linux:</p>
                    <p>Open a terminal in the Kindle drive where <code>Filler.sh</code> is located.</p>
                    <p>Make it executable if needed:</p>
                    <pre><code>chmod +x Filler.sh</code></pre>
                    <p>Run the script:</p>
                    <pre><code>./Filler.sh</code></pre>
                </div>
                <img src="./run-script.png"/>
              </div>     
            </div>
        <div class="step">
            <h2>6. Safely Disconnect and Verify Storage</h2>
            <div class="stepContent">
                <p>Eject your Kindle from your computer.</p>
                <p>On your Kindle, go to <strong>Settings &gt; Device Options &gt; Device Info</strong> (or similar).</p>
                <p>Check that the available storage is <strong>50-90 MB or less</strong>.</p>
                <img src="./final.png"/>
            </div>
        </div>     
        <div class="step">
            <h2>7. Continue with Jailbreak</h2>
            <div class="stepContent">
                <p>With storage nearly full, you can now connect to Wi-Fi and register your Kindle to your Amazon account.</p> 
                <p>The Kindle will not be able to fully download the update due to a lack of space.</p>
                <p>You can either perform a <a href="/kindle-models.html">Jailbreak suitable for your device</a> or wait for the next jailbreak to be released.</p> 
                <p class="info">
                  Always make sure to delete any files ending with <code>.bin</code> or named <code>update.bin.tmp.partial</code>
                </p>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
</div>

<script>new Guide("guide", "/jailbreaking/", "Jailbreak");</script>

---

## After Jailbreak: Freeing Up Space

Once you have completed the jailbreak process and disabled the OTA Updates, you can safely delete the `fill_disk` folder to recover storage space. You may also remove only some of the files if you want to keep the disk nearly full for a while longer.

- **Windows:**  
  Open File Explorer and navigate to the folder containing `fill_disk`. Delete the `fill_disk` folder, or remove individual files inside it.

- **Linux / macOS:**  
  Open a terminal in the folder containing `fill_disk` and run:
  ```sh
  rm -rf fill_disk
  ```
  Or remove individual files as needed.

This will restore your available disk space.

---

For more scripts and detailed guides, visit the [Kindle-Filler-Disk GitHub repository](https://github.com/bastianmarin/Kindle-Filler-Disk/).
