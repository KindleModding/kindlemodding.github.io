---
layout: default
parent: What's Next?
title: Installing Homebrew
linkTitle: How Installing Apps Works
weight: 1
---

# Installing Homebrew

<p class="note">
    Before you install your first app, here's how apps get onto your Kindle. You'll use this in the next step to install KOReader.
</p>

## Scriptlets

<p class="warning">
    Beware! Installing tweaks/applications from unknown sources can result in installing <b>malware</b> or <b>bricking</b> your device!
</p>

After you jailbroke, you can now add <code>.sh</code> files to the documents folder on your Kindle and they will show up as books. These files contain code and most applications you download are packaged as them.

If you ever want to download Kindle apps from online, expect them to be packaged in this format. All you need to do is copy and paste.

## KPM

KPM is a package manager that lets you <b>install Scriptlets</b> on device using a series of commands executed in the searchbar.

Type these into the searchbar on the homescreen and press enter. Replace <code>name</code> with the app's name, like <code>koreader</code>:

| Command | What it does |
|---|---|
| <code>;kpm update</code> | Refreshes the list of apps. Run this first. |
| <code>;kpm install name</code> | Installs an app. It appears on your homescreen like a book. |
| <code>;kpm launch name</code> | Opens an installed app. |
| <code>;kpm uninstall name</code> | Removes an app. |

If you are familiar with package managers such as <code>apt-get</code>, this will be very simple to you.

That covers the basics. For every KPM command, including searching and upgrading, and for running KPM over SSH, see <a href="./find-more-apps.html">Find More Apps</a>.

## KOPlugins

KOReader has an extendable plugins mechanism, as is documented on <a href="https://koreader.rocks">koreader.rocks</a>.

Some fan-favourite homebrew, such as <a href="https://github.com/doctorhetfield-cmd/simpleui.koplugin">SimpleUI</a> and <a href="https://github.com/AnthonyGress/zen_ui.koplugin">ZenUI</a> takes shape as a KOPlugin.

To install them manually, you copy them into <code>/koreader/plugins</code> when you plug the Kindle into a computer.

Otherwise, they can also be installed on-device with an AppStore KOPlugin (e.g., <a href="https://github.com/ultimatejimmy/storefront.koplugin">Storefront</a>).

## Notes

Please note, that software called <code>KUAL</code> was formerly used to launch applications over scriptlets, but this is now obsolete and does not work.

From here, what you install is fully up to you (you don't even need KOReader! Who am I, your mother?).

<a href="./getting-koreader/"><button>Next: Install KOReader</button></a>
