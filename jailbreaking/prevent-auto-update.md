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

Filling the Kindle's storage (leaving only 20-50 MB free) prevents the device from downloading and installing updates, as the update process requires more free space.

## How to Fill the Kindle's Storage

You can use a simple script to fill your Kindle's storage with dummy files, leaving only a small amount of free space. This script is available in the [Kindle-Filler-Disk GitHub repository](https://github.com/bastianmarin/Kindle-Filler-Disk/) along with other useful scripts for Windows, macOS, and Linux.

### Step-by-Step Tutorial

#### 1. Put Your Kindle in Airplane Mode

- On your Kindle, swipe down from the top to open Quick Actions.
- Tap the **Airplane Mode** icon to enable it. This will disconnect Wi-Fi and prevent updates during the process.

#### 2. Connect Your Kindle to Your Computer via USB

- Use a USB cable to connect your Kindle to your computer.
- Wait for the Kindle to appear as a USB drive.

#### 3. Download the Disk Filler Script

- Go to the [Kindle-Filler-Disk GitHub repository](https://github.com/bastianmarin/Kindle-Filler-Disk/).
- Download the appropriate script for your operating system:
  - **Windows:** `kindle_disk_filler.ps1`
  - **macOS/Linux:** `kindle_disk_filler.sh`

#### 4. Run the Script

##### On Windows:

- Copy `Filler.ps1` to the root directory of your Kindle (the main folder you see when you open the Kindle drive).
- Open **PowerShell** in the folder containing `Filler.ps1`.  
  - Tip: In File Explorer, hold **Shift** and right-click in the folder background, then select "Open PowerShell window here".
  - Or, click the address bar, type `powershell`, and press Enter.
- If you get an execution policy error, you can bypass it by running:
  ```powershell
  powershell -ExecutionPolicy Bypass -File .\Filler.ps1
  ```
  Or, for the current session only:
  ```powershell
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  .\Filler.ps1
  ```
- Follow the on-screen prompts to select how much free space to leave (20 MB is recommended).
- The script will create files in a folder called `fill_disk` on your Kindle until only the specified free space remains.

##### On macOS/Linux:

- Copy `Filler.sh` to the root directory of your Kindle (the main folder you see when you open the Kindle drive).
- Open a terminal in the folder containing `Filler.sh`.
- Make the script executable (if needed):
  ```sh
  chmod +x Filler.sh
  ```
- Run the script:
  ```sh
  ./Filler.sh
  ```
- Follow the on-screen prompts to select how much free space to leave (20 MB is recommended).
- The script will create files in a folder called `fill_disk` on your Kindle until only the specified free space remains.

#### 5. Safely Disconnect and Verify Storage

- Eject your Kindle from your computer.
- On your Kindle, go to **Settings > Device Options > Device Info** (or similar).
- Check that the available storage is **20 MB or less**.

#### 6. Register Your Kindle

- With storage nearly full, connect to Wi-Fi and register your Kindle to your Amazon account.
- The device will not be able to download updates due to lack of space.

#### 7. Enable Airplane Mode Again

- Immediately after registration, enable **Airplane Mode** to prevent any update attempts.
- Proceed with the next jailbreak steps (such as WinterBreak).
> **Important Note:** After filling your Kindle's storage, check its contents in the **main folder** (root directory) and delete any files ending with `.bin` or named `update.bin.tmp.partial`. These files are automatic update attempts by the Kindle and should be removed to prevent the device from trying to install an update when you free up space.

---

## After Jailbreak: Freeing Up Space

Once you have completed the jailbreak process, you can safely delete the `fill_disk` folder to recover storage space. You may also remove only some of the files if you want to keep the disk nearly full for a while longer.

- **Windows:**  
  Open File Explorer and navigate to the folder containing `fill_disk`. Delete the `fill_disk` folder, or remove individual files inside it.

- **Linux / macOS:**  
  Open a terminal in the folder containing `fill_disk` and run:
  ```sh
  rm -rf fill_disk
  ```
  Or remove individual files as needed.

This will restore your available disk space.


---

For more scripts and detailed guides, visit the [Kindle-Filler-Disk GitHub repository](https://github.com/bastianmarin/Kindle-Filler-Disk/).
