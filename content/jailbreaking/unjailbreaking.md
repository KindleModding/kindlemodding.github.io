---
layout: default
parent: Jailbreaking Your Kindle
title: Unjailbreaking Your Kindle
weight: 14
---

# Unjailbreaking Your Kindle

Jailbreaking is a completely reversible process. This page will help determine whether and why to unjailbreak, and guide you through the process.

---

## Should I Unjailbreak?
> [!NOTE]
> In most cases, you probably don't need to unjailbreak and would not see any benefit from doing so; all unjailbreaking does is lock you back out of your device and hand the key back to Amazon (and potentially prevent you from jailbreaking again in the future if an unjailbreakable firmware update is forced upon you). Keeping the device jailbroken has no real drawbacks and leaves open the possibility and flexibility to install mods in the future if you so choose.


### Jailbreaking made my Kindle slow and/or worsened battery drain!

No, it did not. A jailbreak is a one-time process that unlocks your ability to run third-party code on the device. The jailbreak is not an actively running program or operating system; it is not capable of consuming resources because it is not a process or application. A jailbreak is akin to a lockpick; once you've gained entry into the building the lockpick is no longer in operation.

If you are running KOReader and have noticed higher resource consumption or battery drain:
- User plugins you've installed may be resource-heavy. Common resource hogs could be:
  - Anything that is rendering a lot of graphical elements (e.g. UI plugins that render a new interface on top of KOReader, especially with lots of widgets/dashboards or backgrounds/wallpapers/decorations; library views that display a large quantity of book covers at once)
  - Functionality that makes network calls (checking for updates, making requests to AI endpoints, updating book status on sites like Hardcover/Storygraph, integration with other websites or self-hosted services)
- If you have only recently configured your KOReader setup, keep in mind that installing and tinkering is far more computationally intensive than reading. Wait to evaluate your actual typical battery usage until after a few weeks of normal usage.

### KOReader is too complicated/I don't like it

Then don't use it. Nothing is forcing you to use it, you can simply uninstall it or ignore it, and use the default Kindle reader as usual. Jailbreaking does not remove or interfere with any existing functionality of the stock Kindle interface.

### I want to receive firmware updates

Correction: "I don't want control over my firmware updates!"

Jailbreaking and blocking OTA updates does not mean that your Kindle is _incapable_ of being updated, just that it will not _automatically_ receive forced updates over-the-air. If a new firmware version includes a feature you want, you are free to install that update yourself. Blocking OTA updates means that you are entirely in control of whether and when you update your firmware.

Modern ("hdnext") jailbreaks will attempt to persist/recover the jailbreak on your behalf (if needed, you can simply re-run the jailbreak to re-apply); legacy jailbreaks will require you to re-run the [hotfix](./Legacy/post-jailbreak/setting-up-a-hotfix/) after updating firmware.

### I am having errors with a KOReader plugin or other application and I want to factory reset and start over

Troubleshoot the errors! There is no need to burn down your house because your faucet is leaking or format your hard drive because an application is glitching; nor should you casually reach for the nuclear option to resolve an issue with a specific bit of software on your Kindle. The [KindleModding Discord](http://discord.kindlemodding.org/) is an excellent resource with helpers who can assist with all sorts of Kindle problems, including KOReader and its plugins. Make a post in the #questions-and-support section to get assistance!

### I am reselling my device or sending it back to Amazon for warranty repair

Sure thing; follow the steps below!

---

## How to Unjailbreak

1. Restore OTA updates
   - For modern jailbreaks, download [this scriptlet](./ota.sh), place in the documents folder, and click the book to run it
   - For legacy jailbreaks with KUAL/renameotabin, choose the "restore" option in the renameotabin extension

2. Factory reset the Kindle

3. Install a firmware update (this may be either the same version the Kindle is already on, or a newer version)
   - Find your Kindle model on [FTVDB](https://ftvdb.com/kindle/firmware/) (note: their naming system diverges from the KindleModding community names; e.g. what we call KT6 they call Basic 5, but their PW numbers are the same.)
   - Locate the firmware version you wish to install (same or higher than current firmware) and download the .bin file
   - Place the .bin file on the USB root of the Kindle (the base of the storage you see when you plug in the device to your computer)
   - Reboot the Kindle and wait for the firmware to install

4. The device is now in a fully unjailbroken state
