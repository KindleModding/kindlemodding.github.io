---
layout: default
parent: Legacy
title: NiLuJe K4 Jailbreak
weight: 1
slug: index
description: A jailbreak for the now-discontinued K4 Kindle
---

# NiLuJe K4 Jailbreak
The NiLuJe K4 Jailbreak is a legacy jailbreak created by [NiLuJe](https://www.mobileread.com/forums/member.php?u=69624)

## Prerequisites
- Please check that your Kindle is [compatible](../../kindle-models) with the K2 Jailbreak
- You will also need a PC

## Installation Guide
<div id="guide">
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Download Jailbreak File</h2>
            <div class="stepContent">
                <a class="button" href="./kindle-k4-jailbreak-1.8.N.zip">kindle-k4-jailbreak-1.8.N.zip</a>
            </div>
        </div>
        <div class="step">
            <h2>Extract & Copy</h2>
            <div class="stepContent">
                <p>Once you have extracted the zip file, plug your Kindle into your PC</p>
                <p style="margin-bottom: 0;">Copy the following files to it:</p>
                <ul>
                    <li>data.tar.gz</li>
                    <li>ENABLE_DIAGS</li>
                    <li>diagnostic_logs</li>
                </ul>
            </div>
        </div>
        <div class="step">
            <h2>Eject & Unplug</h2>
            <div class="stepContent">
                <p>Eject and unplug your Kindle</p>
            </div>
        </div>
        <div class="step">
            <h2>Reboot to diags</h2>
            <div class="stepContent">
                <p>Restart your Kindle:</p>
                <p><code>[MENU]</code> -> <code>Settings</code> -> <code>[MENU]</code> -> Restart</p>
                <br>
                <p>Once your Kindle reboots into diagnostics mode, you can continue</p>
            </div>
        </div>
        <div class="step">
            <h2>Perform the jailbreak</h2>
            <div class="stepContent">
                <p class="note">
                    Use the 5-way keypad to select items
                </p>
                <ul>
                    <li>Select <code>D) Exit, Reboot or Disable Diags</code></li>
                    <li>Select <code>R) Reboot System</code></li>
                    <li>Select <code>Q) To continue</code></li>
                </ul>
                <p class="note">
                    <code>FW Left</code> refers to the FiveWay keypad's left key
                </p>
                <p>It should take around 20 seconds for the Kindle to restart, once complete you should see a book titled <code>You are Jailbroken</code> in your library.</p>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "/jailbreaking/post-jailbreak/installing-kual-mrpi/", "Installing KUAL & MRPI");</script>

## Credits
- Created by [NiLuJe](https://www.mobileread.com/forums/member.php?u=69624)
```
It's mostly identical to yifanlu's jailbreak.
So, as always, thanks to everyone involved in Kindle hacking, particularly yifanlu, ixtab & geekmaster.
```