---
layout: default
parent: What's Next?
title: Getting KOReader
linkTitle: Install KOReader
slug: index
weight: 2
---

# Getting KOReader

This is your first app. Every other app installs the same way, with the KPM commands from the last page.

KOReader is a document viewer for E-Ink devices. Supported formats include EPUB, PDF, DjVu, XPS, CBT, CBZ, FB2, PDB, TXT, HTML, RTF, CHM, DOC, MOBI and ZIP files.

<p class="note">
    This package is being installed from the official KindleModding KPM repository, <a href="https://repo.kindlemodding.org/">repo.kindlemodding.org</a>.
</p>

<div id="guide">
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Connect to Wi-Fi</h2>
            <div class="stepContent">
                <p>Make sure you've done the <a href="../">Finish Up</a> steps, and that your Kindle is connected to Wi-Fi.</p>
            </div>
        </div>
        <div class="step">
            <h2>Update Sources</h2>
            <div class="stepContent">
                <p>Run <code>;kpm update</code> in the searchbar on the homescreen (and press return/enter).</p><br><p>You will see some text at the top of the screen, before you're returned to the homepage.</p>
                <img src="./update.png">
            </div>
        </div>
        <div class="step">
            <h2>Install</h2>
            <div class="stepContent">
                <p>Now, run <code>;kpm install koreader</code> in the searchbar.</p><br><p>Wait a few moments, you'll be returned to the homescreen and a new Scriptlet will have appeared (the icon may not instantly appear).</p>
                <img src="./booklet.png">
            </div>
        </div>
        <div class="step">
            <h2>Run!</h2>
            <div class="stepContent">
                <p>Click on it, and KOReader will run!</p><br><p>Alternatively, you can also run <code>;kpm launch koreader</code> to use it.</p>
                <img src="./koreader.png">
            </div>
        </div>
        <div class="step">
            <h2>Uninstallation</h2>
            <div class="stepContent">
                <p>If you ever wish to uninstall it, simply run <code>;kpm uninstall koreader</code>. Simple!<br><br>All KPM packages are installed in this way... Noticing a pattern?</p>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "../find-more-apps.html", "Next: Find More Apps");</script>
