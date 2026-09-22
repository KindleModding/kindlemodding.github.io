---
layout: default
parent: Jailbreaking Your Kindle
title: Bypassing OOBE
weight: 13
---

# Bypassing OOBE (Out-Of-Box Experience)

Some Kindles (e.g. Scribe, Colorsoft) do not provide the option to skip registration during the initial setup. This means that if it is blacklisted (or you otherwise do not wish to register it), it will not allow you to proceed to the home screen and you will be stuck in the "Out-Of-Box Experience". To bypass this in order to be able to jailbreak and use the kindle, follow these steps.

1. Bring your Kindle to somewhere with a captive portal wifi network, such as a public wifi at a coffee shop -- the type where you must agree to terms or login via a browser popup in order to connect. **Do not actually connect to the network yet.**  We're just leveraging it to access a browser.

2. In the captive portal browser search bar, type `;demo` and submit. **Press "NO" when prompted in the dialog for demo mode.**
    > [!CAUTION]
    > YOU MUST HIT "NO" OR YOU MAY BE PERMANENTLY STUCK IN DEMO LIMBO.

3. Hit the Home tab at the bottom of the screen.

4. You may now access the Kindle normally to view settings, connect to wifi, access the browser, and whatever else you need to do in order to jailbreak according to the method recommended by the [Jailbreaking Wizard](../jailbreak-wizard.html).
    > [!WARNING]
    > Ensure you have [filled the storage](./prevent-auto-update/) to prevent an automatic update, if applicable, before connecting to wifi.

5. After jailbreaking, you can permanently disable OOBE by running <a href="./disable_oobe.sh" download>this scriptlet</a>.
    > [!NOTE]
    > Scriptlets, and how to install them, are explained [here](./whats-next/installing-homebrew.html).

    > [!WARNING]
    > If you do not run this, you will need to use the captive portal trick again to bypass the OOBE every time you reboot the device.
