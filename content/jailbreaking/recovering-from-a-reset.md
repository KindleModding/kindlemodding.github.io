---
layout: default
parent: Jailbreaking Your Kindle
title: Recovering From a Reset
weight: 12
---

# Recovering From a Reset

Factory resetting a jailbroken Kindle with updates blocked prevents normal installation of official update files (<b>crucial</b> for removing all traces of a jailbreak on a Kindle). See the <a href="../jailbreaking/">jailbreaking lander</a> for more information.

In order to restore the Kindle's ability to update, please install <a href="./ota.sh" download>this scriptlet</a>.

<div class="note">
    Scriptlets, and how to install them, are explained <a href="./whats-next/installing-homebrew.html">here</a>.
</div>

## I foolishly reset without restoring OTAs and now I'm stuck on an "Update Failed" screen. What do I do??

<ol>
    <li>
        Find your model and firmware version on <a href="https://ftvdb.com/kindle/firmware/">FTVDB</a>.
        <div class="warning">FTVDB's naming system diverges from the KindleModding community names; e.g. what we call KT6 they call Basic 5, but their PW numbers are the same.</div>
    </li>
    <li>
        Download the .bin file and place it in the USB root of the Kindle.
    </li>
    <li>
        Eject and unplug the kindle.
    </li>
    <li>
        Reboot and wait for the update to install.
    </li>
    <li>
        Your kindle is now in a fully unjailbroken state; you can now rejailbreak following the guide for the method recommended by the <a href="../jailbreak-wizard.html">Jailbreaking Wizard</a>.
    </li>
</ol>