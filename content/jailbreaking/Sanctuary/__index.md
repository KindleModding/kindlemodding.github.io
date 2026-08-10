---
layout: default
parent: Jailbreaking Your Kindle
title: Sanctuary
weight: 6
slug: index
---

# Sanctuary

> I know not all that may be coming, but be it what it will, I'll go to it laughing.
> <br/>
> \- Herman Melville

Sanctuary is a jailbreak released on 30/06/2026 by [Ava](https://ko-fi.com/yubaix), [Alysa (Sky)](https://ko-fi.com/skylarplayz348), [sparklerfish](https://give.thetrevorproject.org/give/63307#!/donation/checkout).

## Prerequisites

- A PC, Kindle.
- A supported model and firmware, as you have been led here by the <b><a href="/kindle-models.html">Jailbreaking Wizard</a></b>.
- You have read <a href="/jailbreaking">this overview</a> and <a href="/jailbreaking/prevent-auto-update/">filled the device</a>, if applicable
- A Wi-Fi connection.

> [!INFO]
> If you face any difficulty in following these guides, please navigate to the [troubleshooting](#troubleshooting) section, and/or make a ticket in the KindleModding Discord support forums.

## Installation Guide

<div id="guide">
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>Before Jailbreaking...</h2>
            <div class="stepContent">
                <div class="caution">
                    <b>Warning!</b><br>
                    Jailbreaking often involves connecting to the Internet.
                    Before beginning <b>any</b> jailbreaking process, please remember to <a href="/jailbreaking/prevent-auto-update/">fill up your Kindle </a> as to avoid ruining the jailbreak mid-process. Additionally, please ensure <b>you have read <a href="/jailbreaking">this</a></b> before you start.
                </div>
                <p>If you have done the above, please commence to the next step.</p>
            </div>
        </div>
        <div class="step">
            <h2>Navigate to your kindle's browser.</h2>
            <div class="stepContent">
              <p>On your Kindle, open the <b>Web Browser</b> (<code>3 Dots → Web Browser</code>)</p>
                <p>Then, navigate to the following URL:</p>
                <p><code>http://sanctuary.skyvincent.com/scroll</code></p>
                <p>Ensure that the URL starts with <code>http</code>, not <code>https</code></p>  
                <img src = "./browser.png">
            </div>
        </div>
        <div class="step">
            <h2>Check browser compatibility</h2>
            <div class="stepContent">
                <p>Wait for the website to load until a scroll bar appears on the right.</p>
                <p>Compare your scroll bar to the images below.</p>
                <p>If your scroll bar appears to be the one on the left, you can proceed to the next step.</p>
                <p class="warning">
                    If your scroll bar is the one on the right, you will have to <a href="../../firmware-and-flashing/downloading-updates">manually update your firmware to the latest jailbreakable version.</a>
                </p>
                <img src="./scroll.png">
            </div>
        </div>
        <div class="step">
            <h2>Navigate to the primary page, and scan ports</h2>
            <div class="stepContent">
                <p>In your browser, navigate to:</p>
                <p><code>http://sanctuary.skyvincent.com/</code></p>
                <p>Once the page has loaded, port scanning will start. This can take up to 20 minutes, but requires no interaction.</p>
                <p>Once an ID has appeared, proceed to the next step.</p>
                <p class="note">
                    If an ID never appears, please join the Discord server for support.
                </p>
                <img src="./ports.png">
            </div>
        </div>
        <div class="step">
            <h2>Enter in the ID</h2>
            <div class="stepContent">
                <p>The ID will be displayed in a text box, and you must type the <b>exact</b> ID into the box below it.</p>
                <p>The website automatically capitalizes the letters for you, so there is no need to manually capitalize while typing.</p>
                <p>Any "0"s that may appear in the ID are zeroes. The only characters the ID can contain are <code>0123456789ABCDEF</code>.</p>
                <img src="./id.png">
            </div>
        </div>
        <div class="step">
            <h2>Click the "Connect" button</h2>
            <div class="stepContent">
                <p>Upon ensuring that the typed id <b>exactly</b> matches the upper ID, you may hit the "Connect" button.</p>
                <p>If nothing happens, or an error appears, then the ID was entered in wrong. Try re-typing the ID.</p>
            </div>
        </div>
        <div class="step">
            <h2>Check webpage output</h2>
            <div class="stepContent">
                <p>Ensure "Downloads Done" appears at the top of the webpage.</p>
                <p>Also, notifications indicating that <code>appreg.db</code>, <code>appreg.db.bak</code>, and <code>privesc.sh</code> downloaded should have appeared.</p>
                <p class="note">
                    You may only see one or two popups confirming the downloads.  This is normal and expected if multiple downloads completed before the dialog was dismissed, and does not mean that the download was unsuccessful.
                </p>
                <img src="./success.png">
            </div>
        </div>
        <div class="step">
            <h2>Exit the browser</h2>
            <div class="stepContent">
                <p>Quit the browser by hitting the X in the upper right corner of the browser.</p>
                <p></p>
                <p class="warning">
                    Do <b>not</b> disable Wi-Fi at this point. It is required until the final step of the jailbreak is completed.
                </p>
            </div>
        </div>
        <div class="step">
            <h2>Navigate to "Help"</h2>
            <div class="stepContent">
                <p>Using the same 3 dots menu you used to access the browser at the start, select "Settings".</p>
                <p>In Settings, click the "Help" menu.</p>
                <img src="./select.png">
            </div>
        </div>
        <div class="step">
            <h2>Jailbreak!</h2>
            <div class="stepContent">
                <p>Click "Getting Started".</p>
                <p>Some text should appear, signifying a successful jailbreak!</p>
                <img src="./jailbreak.png">
            </div>
        </div>
    </div>
    <div class="buttons">
        <button id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button id="next">Next Step</button>
    </div>
</div>
<script>new Guide("guide", "../whats-next", "What's Next?");</script>

## Troubleshooting

1. Text not appearing after hitting connect? Ensure that you correctly entered your ID. All letters should automatically be made uppercase by the website.

## Credits

- [Ava](https://ko-fi.com/yubaix) - Found and engineered the privesc, wrote this wiki page, PW4 5.18.1.1.1 testing.
- [sparklerfish](https://give.thetrevorproject.org/give/63307#!/donation/checkout) - Large amount of JS coding + webpage design, screenshots for this guide, as well as PW4 5.18.1 testing.
- [Alysa](https://ko-fi.com/skylarplayz348) - JS development as well as extensive CS SE testing.
- [Scam.net](https://ko-fi.com/scamdotnet1) - POC assistance, minor troubleshooting with modifying the DB file, PW5 testing.
- [HackerDude](https://ko-fi.com/hackerdude) - JB.sh implementation assistance.
- Gimzie - Exemplary beta tester, tested for hours and was the first successful jailbreak.
- Thanks to all beta-testers: Gimzie, scam.net, mergen3107, TheMAXX, PluPlu, corniest_tortilla
