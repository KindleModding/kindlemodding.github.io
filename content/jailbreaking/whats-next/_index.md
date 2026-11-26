---
layout: default
title: What's Next?
linkTitle: After Jailbreaking
nav_flat: true
parent: Jailbreaking Your Kindle
weight: 10
---

# You're Jailbroken! Let's Finish Up

Your jailbreak has <b>automatically blocked updates</b>, so it's now safe to undo the preparation from <a href="../prevent-auto-update/">Prevent Automatic Updates</a>. Do these steps in order.

<p class="note">
    You're on this page because you used one of the <b>modern</b> jailbreaks (these use the <code>hdnext</code> stack). Used a legacy jailbreak? Head to <a href="../Legacy/post-jailbreak/">Post Jailbreak</a> instead.
</p>

<div id="guide">
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Delete Update Files</h2>
            <div class="stepContent">
                <p>Plug your Kindle into your computer and open it.</p><br>
                <p>In the main folder (not a subfolder), delete any files named <code>update[-something].bin</code> or <code>update.bin.tmp.partial</code>.</p><br>
                <p>If there are none, an update never downloaded, so there's nothing to delete.</p>
            </div>
        </div>
        <div class="step">
            <h2>Delete Filler Files</h2>
            <div class="stepContent">
                <p>Delete the filler files you added to fill up your Kindle.</p><br>
                <p>If you used the filler script, delete the <code>fill_disk</code> folder, or run the script again and choose <b>Remove filler files</b>.</p><br>
                <p>Didn't fill your Kindle (e.g. Shadow)? Skip this step.</p>
            </div>
        </div>
        <div class="step">
            <h2>Restart</h2>
            <div class="stepContent">
                <p>Eject and unplug your Kindle, then restart it: <code>Three Dots > Settings > Device Options > Restart</code>.</p>
            </div>
        </div>
        <div class="step">
            <h2>Turn Wi-Fi Back On</h2>
            <div class="stepContent">
                <p>Turn off Airplane Mode and connect to Wi-Fi. You'll need it to install apps in the next step.</p>
            </div>
        </div>
    </div>
</div>

<script>new Guide("guide", "./installing-homebrew.html", "Next: How Installing Apps Works");</script>
