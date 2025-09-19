---
layout: default
grand_parent: Legacy
parent: Popcorn
title: KT3
---

# KT3

{: .warning}
Popcorn is quite a sophisticated jailbreak method and requires prior electronics experience. It is not recommended to use Popcorn unless you have prior electronics experience *especially* if a software jailbreak such as `WatchThis` is available for it.

{: .highlight}
Make sure you have followed the [initial Popcorn instructions](./)

## Performing the Jailbreak
1. Tear down the `KT3` up to `4:48` as shown [here](https://youtu.be/LVt2hyPBrnA)
2. Connect a wire between test pads `TP1706` and `TM401` as shown in this picture: ![Jumpers](./KT3.webp)
3. Whilst those points are connected, hard reboot the Kindle by holding down the power button for `15 seconds`
4. Plug the Kindle into your PC

If everything went well, the device is now in `SDP Mode` and ready to be flashed

## Windows

{: .warning}
The `KT3` uses a different set of jailbreak files for Windows than other models. Make sure you have downloaded the correct files.

On Windows, simply locate the folder you extracted earlier, double click on `MFGTool.exe` to run it and then click on `Start` and wait for it to complete.

You are now ready to check the `Post Jailbreak` section for what to do now.

[Post Jailbreak](../../post-jailbreak/){: .button .button-purple}

## Linux
On Linux, open a new terminal and navigate to the folder which contains the folder named `imx_usb_loader`

If you run `ls` it should show the `imx_usb_loader` folder, run the following command:
~~~bash
sudo imx_usb -c imx_usb_loader/heisenberg
~~~
And wait for it to complete.

You are now ready to check the `Post Jailbreak` section for what to do now.

[Post Jailbreak](../../post-jailbreak/){: .button .button-purple}

## Credits
- Original guide written by [Neon](https://www.mobileread.com/forums/member.php?u=329187)
- [Popcorn](https://www.mobileread.com/forums/showthread.php?t=345655) created by [katadelos](https://www.mobileread.com/forums/member.php?u=308426)
- Original [Test Point Image](https://www.mobileread.com/forums/showthread.php?t=327055) source