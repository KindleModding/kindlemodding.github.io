---
layout: default
parent: What's Next?
title: Find More Apps
weight: 3
---

# Find More Apps

Now that you know how to install apps, here's where to find them.

<p class="warning">
    Only install apps from sources you trust. Apps from unknown sources can contain <b>malware</b> or <b>brick</b> your device.
</p>

## KPM Apps

Tap an app to see what it does and how to install it.

<div class="kpm-toolbar" role="group" aria-label="Group apps by">
    <span class="kpm-toolbar-label">Group by</span>
    <button type="button" data-group="category" aria-pressed="true">Category</button>
    <button type="button" data-group="repo" aria-pressed="false">Repo</button>
    <button type="button" data-group="name" aria-pressed="false">A–Z</button>
</div>

<div id="kpm-app-list" aria-live="polite"><p>Loading apps...</p></div>
<script src="../../kpmBrowser.js"></script>

<details class="kpm-ref">
    <summary>Every KPM command</summary>
    <p>Type these in the searchbar on your homescreen. Replace the words in angle brackets.</p>

| What it does | Command |
|---|---|
| Add a repo | <code>;kpm add-repo &lt;manifest url&gt;</code> |
| Remove a repo | <code>;kpm remove-repo &lt;repo id&gt;</code> |
| List your repos | <code>;kpm list-repo</code> |
| Refresh the list of apps | <code>;kpm update</code> |
| Search for an app | <code>;kpm search &lt;words&gt;</code> |
| Install or reinstall an app | <code>;kpm install &lt;id&gt;</code> |
| Uninstall an app | <code>;kpm uninstall &lt;id&gt;</code> |
| Upgrade everything installed | <code>;kpm upgrade</code> |
| Open an app | <code>;kpm launch &lt;id&gt;</code> |
| Show the KPM version | <code>;kpm version</code> |

</details>

<details class="kpm-ref">
    <summary>Running KPM over SSH</summary>
    <p><b>Getting in:</b> KOReader's SSH server listens on port 22 as <code>root</code>. Add your public key to <code>koreader/settings/SSH/authorized_keys</code> to skip the password.</p>
    <p><code>ssh root@&lt;kindle-ip&gt;</code></p>
    <p>Don't worry if the Kindle won't answer <code>ping</code>: its firewall drops ping, so it looks offline when it isn't. Try <code>ssh</code> instead.</p>
    <p><b>Running commands:</b> in a shell, the <code>;</code> is a syntax error and <code>kpm</code> isn't on the path. Drop the <code>;</code> and alias the full path once per session (home is in <code>/tmp</code>, so a profile won't survive a reboot):</p>
    <p><code>alias kpm=/var/local/kmc/bin/kpm</code></p>
    <p>Then every command above works without the <code>;</code>, e.g. <code>kpm update</code> or <code>kpm install &lt;id&gt;</code>.</p>
</details>

## Awesome Kindle

<a href="https://github.com/KindleTweaks/Awesome-Kindle">Awesome-Kindle</a> is a community list of popular Kindle homebrew: games, tools, tweaks and more.

## KOReader Plugins

If you use KOReader, plugins change how it looks and works. Fan favourites include <a href="https://github.com/doctorhetfield-cmd/simpleui.koplugin">SimpleUI</a> and <a href="https://github.com/AnthonyGress/zen_ui.koplugin">ZenUI</a>.

The easiest way to install them is on your Kindle, with an app store plugin like <a href="https://github.com/ultimatejimmy/storefront.koplugin">Storefront</a>. See <a href="./installing-homebrew.html#koplugins">KOPlugins</a> for other ways.

---

Something not working? See <a href="../faq/">Help &amp; Recovery</a>.
