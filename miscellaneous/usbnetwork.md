---
layout: default
title:  USBNetwork (SSH) 
parent: Miscellaneous
nav_order: 2
---

# USBNetwork (SSH)

Getting remote access to your Kindle device through the USBNetwork extension can be tricky at first, but it is immensely helpful to have it once you set it up correctly.

{: .highlight }
Covering all USBNetwork tools is out of scope for this guide. We will only show how to connect remotely through SSH.

## Prerequisites
- A PC
- A jailbroken Kindle (w/ KUAL)
- USBNetwork extension
    - [Download for **soft float firmware** (<=5.16.2.1.1)](https://www.mobileread.com/forums/showthread.php?t=225030) *(named "USBNetwork Hack")*
    - [Download for **hard float firmware** (<=5.16.3)](https://github.com/notmarek/kindle-usbnetlite/releases/tag/1.0.M)
- [WinSCP](https://winscp.net/eng/download.php) (or any other client able to connect through SSH) 
- Cryptography Generator (Public and Private Keys)

{: .note }
If you don't know what file to download when getting USBNetlite, you can identify what generation your Kindle is [here](../jailbreaking/kindle-models.md).

## Installation

1. Unzip the downloaded file (not necessary for USBNetlite)
2. Plug your Kindle into your PC
3. Copy the `Update_*_install.bin` file to the `mrpackages` folder on your Kindle
4. Eject and unplug your Kindle
5. Open `KUAL`
6. Select `Helper`
7. Select `Install MR Packages`
8. Your Kindle will now reboot

Once rebooted, you will find a new entry within the `KUAL` menu, either called "`USBNetwork`" or "`USBNetworklite`".

## Connecting through SSH

{: .note }
If you are using USBNetlite, the default password for SSH connection is simply "`kindle`". You can skip the keys generation steps and start from step 6. 

Knowing our Kindle's default password for root access is **messy** and **complicated** (at least on USBNetwork), instead we will authenticate our SSH session through authentication keys.

1. Generate a pair of private and public keys (if you have WinSCP, PuTTYgen is located under "Tools") (RSA type key is fine)
2. Plug your Kindle back into your PC
3. Copy the public key into an empty text file named "`authorized_keys`", save it without extension and copy it to the `usbnet/etc/` folder on your Kindle (if you're running USBNetworklite it should be at `usbnet/etc/dropbear`)
4. Save the private key as a .ppk file somewhere safe on your PC
5. Eject and unplug your Kindle
6. Connect your Kindle to a stable Wi-Fi connection (your Kindle and PC must be on the same network)
7. Type `;711` into the search bar and click Enter. Below the "Interface" section, there should be an IP Address that you must copy
8. Open `KUAL`, click on USBNetwork/USBNetworklite, and click `Allow SSH over Wi-Fi`
9. Click on `* Toggle USBNetwork *`
10. Your Kindle will *temporarily* disable USBMS (USB Mass Storage mode) and will be ready to connect through SSH
11. Connect to the Kindle with the following inputs:

```
your.ip.address.you.just.found: as Hostname
22: as Port
root: as User
```
Depending on your SSH connection software, you will need to add/append your private key file as a method of authentication, leaving the password input empty.

{: .highlight }
Remember that if you're using USBNetworklite, you can simply use `kindle` as a password, without the need of using authentication keys.

If everything is right and your Kindle *feels like it*, you will be able to connect as root!

## Notes

{: .warning }
Do not modify any file from the extension's folder while USBNetwork is on!

Don't worry if you failed to connect on the first attempt, this whole process is tricky and you will need a couple of tries to get it right.

Once you're done with SSH and want to transfer files again by USB, simply click back on `* Toggle USBNetwork *` to enable USBMS mode again.

The default root directory we see normally in our Kindle is located at `/mnt/us/`

If you're using USBNetworklite, you can tweak most important things like the default password by modifying the `config` file located at `usbnet-lite/etc/`

If you're feeling quite adventurous, you can simply enable telnet on your Kindle with [Hackerdude's Telnet scriplet](https://cdn.discordapp.com/attachments/1324720956064792656/1324730245802229760/start_telnet.sh?ex=67846b6e&is=678319ee&hm=f11b6ad84bc74145546c3d020b112a09c759645e4dd0fe16d7a8ae4f5cace174&), simply download the file, drag it to your `documents` folder on your Kindle and run the booklet. You will be able to connect without a password at `telnet <kindle_ip> 23`. This might not work for everybody.

{: .note }
In some models or versions, consulting the status of USBNetwork might not show. This is totally fine and it will be fixed in future hotfix updates.

{: .warning }
The SSH plugin at KOReader, although it is almost the same as this extension, is dying and shouldn't be used unless you have no other option.

## Troubleshooting

If you want to transfer files through USB again, make sure to re-enable USBMS mode by simply clicking back `* Toggle USBNetwork *`.

Make sure the syntax for authorized_keys is correct:

```
Example:
ssh-rsa <your_long_key_here_without_spaces_or_line_breaks> rsa-key-20250505
```

## Credits

Written by Bucks, [adapted from mergen3107's Mobileread post](https://www.mobileread.com/forums/showpost.php?p=4133197&postcount=3).  
