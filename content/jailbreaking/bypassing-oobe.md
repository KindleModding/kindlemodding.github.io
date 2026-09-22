---
layout: default
parent: Jailbreaking Your Kindle
title: Bypassing OOBE
weight: 13
---

# Bypassing OOBE (Out-Of-Box Experience)

Some Kindles (e.g. Scribe, Colorsoft) do not provide the option to skip registration during the initial setup. This means that if it is blacklisted (or you otherwise do not wish to register it), it will not allow you to proceed to the home screen and you will be stuck in the "Out-Of-Box Experience". To bypass this in order to be able to jailbreak and use the kindle, follow these steps.

<ol>
    <li>
        Bring your Kindle to somewhere with a captive portal wifi network, such as a public wifi at a coffee shop -- the type where you must agree to terms or login via a browser popup in order to connect. <b>Do not actually connect to the network yet.</b>  We're just leveraging it to access a browser.
    </li>
    <li>
        In the captive portal browser search bar, type <code>;demo</code> and submit. <b>Press "NO" whem prompted in the dialog for demo mode.</b>
        <div class="caution">YOU MUST HIT "NO" OR YOU MAY BE PERMANENTLY STUCK IN DEMO LIMBO.</div>
    </li>
    <li>
        Hit the Home tab at the bottom of the screen.
    </li>
    <li>
        You may now access the Kindle normally to view settings, connect to wifi, access the browser, and whatever else you need to do in order to jailbreak according to the method recommended by the <a href="../jailbreak-wizard.html">Jailbreaking Wizard</a>.
        <div class="warning">Ensure you have <a href="./prevent-auto-update/">filled the storage</a> to prevent an automatic update, if applicable, before connecting to wifi.</div>
    </li>
    <li>
        After jailbreaking, you can permanently disable OOBE by running the following commands in any terminal on the Kindle (ssh, kterm, KOReader terminal emulator, etc):
        <code style="white-space: pre-line; display: block; margin-top: 1em">cd /var/local/decanter
            rm -f RESUME_OOBE_FOR_OTA
            rm -f OTA_START_FOR_METRIC
        </code>
        <div class="warning">If you do not remove these markers, you will need to use the captive portal trick again to bypass the OOBE every time you reboot the device.</div>
    </li>
</ol>