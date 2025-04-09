---
layout: default
grand_parent: Jailbreaking Your Kindle
parent: Post Jailbreak
title: Installing KOReader
nav_order: 5
---

# Installing KOReader

_KOReader is a document viewer for E Ink devices. Supported formats include EPUB, PDF, DjVu, XPS, CBT, CBZ, FB2, PDB, TXT, HTML, RTF, CHM, DOC, MOBI and ZIP files._

{: .note }
Your Kindle must be jailbroken and have MRPI and KUAL installed to be able to run KOReader.

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
                <p class="highlight">Different firmware versions require different KOReader packages</p>
            </div>
        </div>
        
<div class="step">
    <h2>Download KOReader</h2>
        <div class="stepContent">
                <p>Download KOReader from the <a href="https://github.com/koreader/koreader/releases" target="_blank">official release page</a></p>
                <p>Choose the correct package for your Kindle:</p>
                <div class="version-block">
                    <p class="version-label">KOReader Packages:</p>
                <ul>
                    <li><code>kindle-legacy</code>: K2, DX, K3 (and all variants)</li>
                    <li><code>kindle</code>: K4, K5, PW1</li>
                    <li><code>kindlepw2</code>: All newer models (PW2, KV, KT2, PW3, KOA, KT3, KOA2, PW4, KT4, KOA3, PW5, KS) running firmware =< 5.16.2.1.1</li>
                    <li><code>kindlehf</code>: <b>Any Kindle device</b> running firmware >=5.16.3</li>
                    </ul>
                </div>
        </div>
    </div>
        
<div class="step">
            <h2>Alternative Download Method</h2>
            <div class="stepContent">
                <div class="version-block">
                    <p class="version-label">Firmware >=5.16.3:</p>
                        <a href="https://scriptlets.notmarek.com/" target="_blank">Marek's KOReader Installer (nightly)</a> Download and copy this scriptlet into the <code>/documents</code> folder on your Kindle, run it from your Library and it will automatically download and install KOReader.
                    <p class="note">This alternative method might not work for everyone.</p>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Connect your Kindle to your computer</h2>
            <div class="stepContent">
                <p>Plug your Kindle into your PC via USB cable</p>
                <p>Wait for your computer to recognize the device</p>
                <p class="highlight">Make sure your Kindle appears as a storage device on your computer</p>
            </div>
        </div>

<div class="step">
            <h2>Install KOReader</h2>
            <div class="stepContent">
                <p>Unzip the downloaded file</p>
                <p>Copy the <code>extensions</code> and <code>koreader</code> folders to the root directory of your Kindle</p>
                <p class="highlight">When prompted, confirm to merge or replace existing files</p>
            </div>
        </div>

<div class="step">
            <h2>Disconnect and Launch</h2>
            <div class="stepContent">
                <p>Safely eject and unplug your Kindle</p>
                <p>Open KUAL (Kindle Unified Application Launcher)</p>
                <p>Search for the KOReader menu entry and click on it</p>
                <div class="version-block">
                <p class="version-label">KOReader Launch Options</p>
                    <p>When launching KOReader, you may see three options:</p>
                    <ul>
                        <li><code>Start KOReader</code>: The designed way to start KOReader</li>
                        <li><code>Start KOReader (no framework)</code>: Temporarily "kills" the Kindle UI to allocate more resources to KOReader.</li>
                        <li><code>Start KOReader (ASAP)</code>: Skips a couple of checks and starts KOReader as soon as possible</li>
                    </ul>
                </div>
            </div>
        </div>

<div class="step">
            <h2>Done</h2>
            <div class="stepContent">
                <p>KOReader is now installed on your Kindle!</p>
                <p>We recommend reading the <a href="https://koreader.rocks/user_guide/" target="_blank">extensive but very helpful guide for KOReader</a></p>
                <p class="note">
                    KOReader currently does not support USBMS mode (USB transfer) and will only charge the device, if you want to transfer files you must exit KOReader to do so. 
                </p>
                <p class="warning">
                    If KOReader appears in KUAL but doesn't work when clicked, delete both <code>koreader</code> folders, re-download koreader and make sure you're downloading the right package for your Kindle</p>
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

<script>new Guide("guide");</script>

## Credits

- Written by Bucks, re-designed to Fluent Style with ntindle and adapted from the [official KOReader Github installation page](https://github.com/koreader/koreader/wiki/Installation-on-Kindle-devices#err-there-are-four-kindle-packages-to-choose-from-which-do-i-pick)