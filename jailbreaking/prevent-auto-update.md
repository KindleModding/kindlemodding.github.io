---
layout: default
parent: Jailbreaking Your Kindle
title: Prevent Automatic Updates
nav_order: 99
has_children: true
---

# Preventing Automatic Updates by Filling Kindle Storage

## Why Fill the Kindle's Storage?

Kindle devices can automatically download and install firmware updates when they have enough free storage space. These updates can block jailbreaking methods. Automatic updates may occur when:

- You open the Kindle Store.
- You register your Kindle to an Amazon account.
- The device is connected to Wi-Fi, even briefly.
- The Kindle is rebooted while connected to the internet.

Filling the Kindle's storage (leaving only 20-50 MB free) prevents the device from
downloading and installing updates, because the update process needs more free space.

{: .highlight }
**This is the OTA-blocker "filler", not the SpringBreak filler.** Some jailbreak
guides ask you to create their own folders — those are a different thing and do
**not** block OTA updates on their own. If your goal is to stop automatic updates,
use the tool on this page.

## Mass Storage vs MTP — which one is my Kindle?

The script **auto-detects** your connection type, but it helps to know which one you have:

| Your Kindle… | Connection | Notes |
|---|---|---|
| Shows up as a **USB drive/volume** (older models, PW up to 11th gen) | **Mass Storage** | The script fills it directly. |
| Does **not** show up as a drive — appears as a "portable device" (11th gen+, Paperwhite 5/6, Scribe, Basic 2024) | **MTP** | The script writes into the device's storage folder over MTP. |

On MTP devices the writable area is **inside** a storage folder
(`Internal Storage`, `Almacenamiento interno compartido`, `SD card`, …), not at the
device root. The script detects that folder automatically.

## Need space for a book? Delete one file

Because the filler is split into **100 MB files** (`file_0`, `file_1`, … inside
`fill_disk`), you don't have to undo everything just to add a book or document:

1. Connect the Kindle to your computer.
2. Open the `fill_disk` folder and **delete a single file** (e.g. `file_12`). That
   frees exactly **100 MB**.
3. Copy your book/document into the Kindle.
4. Disconnect. The device is still nearly full, so **OTA updates stay blocked** —
   you only opened up the 100 MB you needed.

Need more room? Delete more files, one per 100 MB. When you're done reading you can
run the fill again to top it back up (it resumes from where it left off).

{: .note }
This is the whole point of the 100 MB layout: granular, reversible freeing without
losing the OTA block. Deleting one file ≈ 100 MB back; the rest keeps the storage full.

## How to Fill the Kindle's Storage

You run the script **on your computer** — you do **not** copy it to the Kindle.
It detects the connected Kindle (mass storage or MTP) and fills it. The script
lives in the [Kindle-Filler-Disk GitHub repository](https://github.com/iiroak/Kindle-Filler-Disk/).

<div id="guide">
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
    <div id="stepwrapper" class="stepwrapper">
        <div class="step">
            <h2>1. Put Your Kindle in Airplane Mode</h2>
            <div class="stepContent">
                <p>Turn on Airplane mode on your Kindle so it cannot start an update while you work.</p>
                <img src="./WinterBreak/airplane_mode.png" />
            </div>
        </div>
        <div class="step">
            <h2>2. Connect Your Kindle to Your Computer via USB</h2>
            <div class="stepContent">
                <p>Use a USB cable to connect your Kindle. Unlock it and keep it on the home screen.</p>
                <img src="./Prevent/usb-mode.png"/>
                <p><strong>Older Kindles</strong> appear as a USB drive (Mass Storage).</p>
                <p><strong>Newer Kindles</strong> (11th gen+, PW5/PW6, Scribe, Basic 2024) appear as a
                   "portable device" (MTP) instead of a drive. Both are supported — just make sure the
                   device is set to <strong>File Transfer / MTP</strong> mode if your system asks.</p>
                <p><em>Linux + MTP:</em> install <code>gvfs</code> and <code>gvfs-backends</code> (or <code>gvfs-mtp</code>) first.</p>
            </div>
        </div>
        <div class="step">
            <h2>3. Run the Script on Your Computer</h2>
            <div class="stepContent">
                <p>Open a terminal <strong>on your computer</strong> (not on the Kindle) and run the one-liner for your OS:</p>
                <div class="version-block">
                    <p class="version-label">Windows (PowerShell):</p>
                    <pre><code>irm https://github.com/iiroak/Kindle-Filler-Disk/raw/main/Scripts/Filler.ps1 | iex</code></pre>
                </div>
                <div class="version-block">
                    <p class="version-label">Linux / macOS:</p>
                    <pre><code>curl -fsSL https://github.com/iiroak/Kindle-Filler-Disk/raw/main/Scripts/Filler.sh | bash</code></pre>
                </div>
                <p>Prefer to download it first? Grab <code>Filler.ps1</code> or <code>Filler.sh</code> from the
                   <a href="https://github.com/iiroak/Kindle-Filler-Disk/">repository</a> and run it locally.
                   On Windows, if you see an execution-policy error:</p>
                <pre><code>powershell -ExecutionPolicy Bypass -File .\Filler.ps1</code></pre>
            </div>
        </div>
        <div class="step">
            <h2>4. Choose "Fill" and How Much Space to Leave</h2>
            <div class="stepContent">
                <p>When the script starts it asks what to do — choose <strong>[1] Fill the device</strong>.</p>
                <p>Then choose how much free space to leave:</p>
                <div style="margin-left:2em">
                    <span><strong>20 MB</strong> — aggressive OTA block (may cause "storage almost full" notifications)</span><br/>
                    <span><strong>50 MB</strong> — balanced</span><br/>
                    <span><strong>100 MB</strong> — daily use (fewer notifications, still blocks most OTA)</span>
                </div>
                <p class="highlight">Leaving very little space blocks updates most reliably, but the Kindle
                   may nag about low storage. If you plan to keep reading on it, 50–100 MB is more comfortable.</p>
                <p>The filler is written as <strong>100 MB files</strong> (<code>file_0</code>, <code>file_1</code>, …)
                   inside a <code>fill_disk</code> folder — only the very last piece uses 50/10/1 MB to land exactly
                   on the free space you chose. This is on purpose: if you later want to add a book, you just
                   <strong>delete one 100 MB file</strong> to free 100 MB and copy it in, while the device stays full
                   enough to keep OTA updates blocked. No need to remove everything.</p>
            </div>
        </div>
        <div class="step">
            <h2>5. Confirm the Destination</h2>
            <div class="stepContent">
                <p>The script shows the destination, connection type and free space, and asks you to confirm
                   before writing anything:</p>
                <pre><code>Destination : /media/you/Kindle/fill_disk   (mass_storage)
Free now    : 5.2 GB
Will fill   : ~5.1 GB  (leaving 20 MB free)
Proceed? [y/N]</code></pre>
                <p>It <strong>refuses</strong> system/home paths (your <code>C:</code> drive, <code>/home</code>,
                   Desktop, Downloads, …), so it will not fill your computer by accident. Type <code>y</code> to continue.</p>
            </div>
        </div>
        <div class="step">
            <h2>6. Wait, Then Verify Storage</h2>
            <div class="stepContent">
                <p>Let the script finish (MTP is slower than mass storage). Then safely eject the Kindle.</p>
                <p>On your Kindle go to <strong>Settings &gt; Device Options &gt; Device Info</strong> and check that
                   the available storage matches what you chose (e.g. ~20 MB).</p>
                <img src="./Prevent/final.png"/>
            </div>
        </div>
        <div class="step">
            <h2>7. Register Your Kindle</h2>
            <div class="stepContent">
                <p>With storage nearly full, connect to Wi-Fi and register your Kindle to your Amazon account.
                   The device will not be able to download updates due to lack of space.</p>
            </div>
        </div>
        <div class="step">
            <h2>8. Enable Airplane Mode Again</h2>
            <div class="stepContent">
                <p>Immediately after registration, enable <strong>Airplane Mode</strong> to prevent any update attempts,
                   then proceed with the next jailbreak steps (such as WinterBreak).</p>
                <p class="highlight">
                    <strong>Important:</strong> after filling, check the Kindle's <strong>root folder</strong> and delete any
                    files ending in <code>.bin</code> or named <code>update.bin.tmp.partial</code>. These are update attempts
                    and should be removed so the device does not try to install one when you free up space.
                </p>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button class="btn btn-orange" id="prev">Previous Step</button>
        <span id="stepCounter"></span>
        <button class="btn btn-green" id="next">Next Step</button>
    </div>
</div>
<style>
.version-block {
    background-color: #1e1e1e;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
    width: 100%;
}

.version-label {
    font-weight: bold;
    border-bottom: 1px solid #369d36;
    padding-bottom: 5px;
    margin-bottom: 10px;
    color: #369d36;
}
</style>
<script>new Guide("guide");</script>

---

## How much free space should I leave? (update-size reference)

An OTA update **cannot start downloading** if the device has less free space than
the update package needs (it also needs room to unpack and stage it). So the rule
is simple: **leave less free space than the smallest update your model would try to
download.**

Exact sizes of the **current** Kindle firmware packages, fetched from Amazon's own
download servers (`s3.amazonaws.com/firmwaredownloads/…`):

| Kindle model | Current firmware | Update size |
|---|---|---|
| Kindle 1st–5th gen, Touch, Keyboard, DX (legacy) | 1.x–5.6.x | < 100 MB |
| Kindle 7th gen | 5.12.2.2 | 212 MB |
| Kindle Paperwhite 6th gen | 5.12.2.2 | 217 MB |
| Kindle Voyage 7th gen | 5.13.6 | 236 MB |
| Kindle 8th gen | 5.16.2.1.1 | 249 MB |
| Kindle Paperwhite 7th gen | 5.16.2.1.1 | 258 MB |
| Kindle Oasis 8th gen | 5.16.2.1.1 | 265 MB |
| Kindle Oasis 9th gen | 5.16.2.1.1 | 284 MB |
| Kindle 10th gen | 5.18.1.1.1 | 322 MB |
| Kindle Paperwhite 10th gen | 5.18.1.1.1 | 336 MB |
| Kindle Oasis 10th gen | 5.18.2 | 343 MB |
| Kindle Paperwhite 11th gen | 5.19.2 | 345 MB |
| Kindle 11th gen (2024) | 5.19.5 | 381 MB |
| Kindle Paperwhite 12th gen (2024) | 5.19.5 | 388 MB |
| Kindle Scribe (2022) | 5.19.5 | 393 MB |
| Kindle Scribe (2024) | 5.19.5 | 394 MB |
| Kindle Scribe 3rd gen | 5.19.5 | 446 MB |
| Kindle Colorsoft (1st gen) | 5.19.5 | 466 MB |
| Kindle Scribe Colorsoft (1st gen) | 5.19.5 | 489 MB |

**Recommended maximum free space to leave: ~100 MB.** The smallest current update
is **212 MB** (Kindle 7th gen), so anything under ~150–200 MB blocks every current
model, and the newer/bigger devices (Scribe, Colorsoft ≈ 450–490 MB) are blocked
with huge margin. For an aggressive, guaranteed block use **20–50 MB** (this is why
the script defaults to 20 MB).

{: .note }
These are download-package sizes; the installer also needs working space, so the
real threshold is even higher — leaving less is always safer. 20–50 MB blocks every
current model; 100 MB is the comfortable upper bound if you still want to read on
the device.

## If the per-file fill fails on MTP (last resort)

Some MTP devices refuse scripted writes. If the normal method writes nothing, the
script offers a **pre-built ZIP fallback**: it downloads a small archive of
zero-filled files (a few MB that expand to ~8/16/32/64 GB) and copies it onto the
device. You are always asked before anything is downloaded. The archives ship with
the project, so there are no dead links to worry about.

### Manual copy (if everything else fails)

If even the automatic fallback fails, you can do it entirely by hand. The archives
live in the [`Zips/`](https://github.com/iiroak/Kindle-Filler-Disk/tree/main/Zips)
folder of the repository — download the one that matches (or is smaller than) your
Kindle's storage:

- [`fill_8gb.zip`](https://github.com/iiroak/Kindle-Filler-Disk/raw/main/Zips/fill_8gb.zip) — for ~8 GB Kindles
- [`fill_16gb.zip`](https://github.com/iiroak/Kindle-Filler-Disk/raw/main/Zips/fill_16gb.zip) — for ~16 GB Kindles
- [`fill_32gb.zip`](https://github.com/iiroak/Kindle-Filler-Disk/raw/main/Zips/fill_32gb.zip) — for ~32 GB Kindles
- [`fill_64gb.zip`](https://github.com/iiroak/Kindle-Filler-Disk/raw/main/Zips/fill_64gb.zip) — for ~64 GB Kindles

Then:

1. **Unzip it on your computer** (each archive expands to several GB of dummy files).
2. Open your Kindle in your file manager (as a USB drive, or the storage folder on
   an MTP device).
3. Create a folder named `fill_disk` on the Kindle and **drag the extracted files
   into it**, until only ~20–50 MB of free space remains.
4. Safely eject the Kindle and verify the free space in **Settings &gt; Device Info**.

To free the space later, just delete the `fill_disk` folder (or run the script and
choose **Remove filler files**).

---

## After Jailbreak: Freeing Up Space

When you are done, run the script again and choose **[2] Remove filler files**. It
deletes the `fill_disk` folder and reports your free space **before and after**, so
you can confirm the space was reclaimed.

- **Windows (PowerShell):**
  ```powershell
  irm https://github.com/iiroak/Kindle-Filler-Disk/raw/main/Scripts/Filler.ps1 | iex
  ```
- **Linux / macOS:**
  ```sh
  curl -fsSL https://github.com/iiroak/Kindle-Filler-Disk/raw/main/Scripts/Filler.sh | bash
  ```

Deleting the `fill_disk` folder by hand also works.

{: .note }
**Still shows "storage full" after removing?** Empty the Trash (on macOS the hidden
`.Trashes` folder on the Kindle volume), disconnect and reconnect the USB cable, and
reboot the Kindle.

---

For more scripts and detailed guides, visit the [Kindle-Filler-Disk GitHub repository](https://github.com/iiroak/Kindle-Filler-Disk/).

### GUI alternative

If you'd rather use a graphical tool, [`jannikac/mtp-filler`](https://github.com/jannikac/mtp-filler)
is a cross-platform GUI/CLI that does the same job.
