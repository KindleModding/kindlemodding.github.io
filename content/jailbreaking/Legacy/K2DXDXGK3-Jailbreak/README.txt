This is a giant thread in which you'll find the custom ScreenSavers, custom Fonts & USBNetwork hacks for all non Touch Kindle devices (Kindle 2/DX/DXG/3/4), along with the Kindle 2/DX/DXG/3 JailBreak.
I know it's a bit daunting, but please bear with me, it'll be worth it ;).

First things first, a huge thanks to the original creators/updaters of these hacks, all the people who, at some point, worked on these hacks, and some of the pioneers! In no particular order:
* clarknova : http://www.mobileread.com/forums/showpost.php?p=963004&postcount=2 for the first 2.5.x jailbreak & screensavers hacks
* porkupan : http://www.the-ebook.org/forum/viewtopic.php?t=11259 for one of the first bind mount based fonts hack
* kukyakya : http://www.mobileread.com/forums/showthread.php?t=87995 for the usb watchdog & update-safe tweaks : https://redmine.kukyakya.pe.kr/projects/customfont/wiki/Customfont
* jyavenard : http://www.mobileread.com/forums/showthread.php?t=63225 for the packager
* tedsan : https://sites.google.com/a/etccreations.com/kdesignworks/Home/font-install-files & blogkindle : http://blogkindle.com/unicode-fonts-hack/ for their fonts hack
* igorsk : http://igorsk.blogspot.com/, ebs : http://www.mobileread.com/forums/showthread.php?t=49350 & Jesse Vincent  : http://blog.fsck.com/ for all they did to make this possible!
* yifanlu : http://www.mobileread.com/forums/showthread.php?t=122519 and dsmid : http://www.mobileread.com/forums/showthread.php?t=122000 for the Kindle 3.1 jailbreak!
* yifanlu : http://www.mobileread.com/forums/showthread.php?t=122519 and serge_levin : http://www.mobileread.com/forums/showpost.php?p=1725629&postcount=151 for the Kindle 3.2.1 jailbreak!

*Latest Updates (08/19/2015):*

JB v0.13.N, SS v0.47.N, Python 0.14.N, Fonts v5.16.N, USBNet v0.57.N (Updated binaries).



*Note for Kindle >= 3.1 Users:*

If you haven't done so already (either with >= 0.5.N or yifanlu's jailbreak), please update your jailbreak hack.



*IMPORTANT NOTE REGARDING UPDATES:*

Here are general *update* instructions for these hacks:

    * First of all, in most cases, there's no need to touch the jailbreak again. You already installed it the first time you installed hacks. Just forget about it now ;).
    * Next, no need to run the Update_*_uninstall.bin updates, ever. (except in some specific cases, like if you're updating the jailbreak on a 3.x device, or from another font/ss hack [in which case you should use the original uninstaller for your hacks, and not the ones found here]).
    * Then, you can apply the latest Update_*_install.bin updates, one by one.
    * After that, to make sure everything's in order, do a full Restart of your Kindle (*[HOME] -> [MENU] > Settings -> [MENU] > Restart*), and you'll be good to go ;). Note that in some cases, especially for minor updates, this restart is not strictly necessary, but better be safe than sorry ;).



*INSTALL:*

*Jailbreak:*
*What Does It Do?:*

The JailBreak opens the door to pretty much everything you'll find on this forum ;).

As for USBNetwork, besides bundling a couple of useful tools, it will grant you remote shell access to your Kindle, be it over USB or WiFi.






*Note for Kindle 4 Users*

Please skip this section and refer to the Wiki : http://wiki.mobileread.com/wiki/Kindle4NTHacking#Jailbreak instead.



*Note for Kindle 3.0.x, 3.1.x & 3.2 Users*

Please use the file corresponding to your kindle model suffixed by -3.0-to-3.2, the other one won't work on these older FW versions, while this one won't work on newer FW versions. Check your Settings page if you're unsure of what FW your Kindle is running.



Download the attached kindle-jailbreak-0.13.N.zip file, and unpack it. In here, you'll find a few files.
Leave the directory alone, and upload the correct *Update_*_install.bin* file for your kindle & FW version to the root directory of your Kindle.
(As always, k2 means K2 US, k2i means K2 GW, dx means KDX US, dxi means KDX GW, dxg means KDX Graphite, k3g means K3 3G (US [B006]), k3w means K3 WiFi [B008], k3gb means K3 3G (UK [B00A]) and k4 means K4 [B00E]. The ones suffixed by -3.0-to-3.2 are meant for devices running old FW <= 3.2 *only*!).
For a Kindle 3 WiFi running firmware 3.3.x or 3.4.x, that would be *Update_jailbreak_0.13.N_k3w_install.bin* for example.

Now, eject & unplug your Kindle, and go to *[HOME] -> [MENU] > Settings -> [MENU] > Update Your Kindle*. It should be quick. (And, on FW 2.x only, it should *FAIL* (With a *U006* error, in the bottom left corner of the screen). It's completely normal, intended, and *harmless*).

And that's it, your Kindle is now ready to install custom hacks!


*ScreenSavers:*
*What Does It Do?:*

This will allow you to customize the screensavers (or sleep screens) used by your Kindle, replacing them either with your choice of images or the cover of the last book you opened ;).






*Note for Kindle Special Offers Users:*

This doesn't, and won't ever, help you bypass something you agreed to (screensaver ads), so please stop asking.

If you still have questions, please read this post : http://www.mobileread.com/forums/showthread.php?t=200942.

That said, you can unsubscribe to Special Offers at any point of the process with no ill effect.



*If you intend to use the *cover* feature:*

It will use the cover of the last book opened as the current screensaver.
You'll need to first install the Python package attached to this post.

*NOTE*: You'll need a recent version of the JailBreak (0.11.N or newer) to install this update package!

Download the appropriate kindle-python-0.14.N.zip file for your device (the K2 and K2I packages are in the kindle-python-0.14.N-k2.zip archive, the DX & DXI packages are in the kindle-python-0.14.N-dx.zip archive, the DXG packages are in the kindle-python-0.14.N-dxg.zip archive, the K3W packages are in the kindle-python-0.14.N-k3w.zip archive, the K3G & K3GB packages are in the kindle-python-0.14.N-k3g.zip archive, and the K4 packages are in the kindle-python-0.14.N-k4.zip archive), and then unpack it. In here, you'll find a few files.

First, upload the correct *Update_*_install.bin* file for your kindle to the root directory of your Kindle.
For a Kindle 2 International, that would be *Update_python_0.14.N_k2i_install.bin* for example.

Now, eject & unplug your Kindle, and go to *[HOME] -> [MENU] > Settings -> [MENU] > Update Your Kindle*. It should take a few minutes.

Note that if you have KUAL : http://www.mobileread.com/forums/showthread.php?t=203326 set up and running, you're welcome to use our very own MR Package Installer : http://www.mobileread.com/forums/showthread.php?t=251143, which may speed up the process if you're installing multiple things ;).



Download the attached kindle-ss-0.47.N.zip file, and unpack it. In here, you'll find a few files.

First, upload the correct *Update_*_install.bin* file for your kindle to the root directory of your Kindle.
For a Black Kindle 4, that would be *Update_ss_0.47.N_k4_install.bin* for example.

Now, eject & unplug your Kindle, and go to *[HOME] -> [MENU] > Settings -> [MENU] > Update Your Kindle*. It should take a couple dozen of seconds.

Note that if you have KUAL : http://www.mobileread.com/forums/showthread.php?t=203326 set up and running, you're welcome to use our very own MR Package Installer : http://www.mobileread.com/forums/showthread.php?t=251143, which may speed up the process if you're installing multiple things ;).

Once your device is back to your Homescreen, check that everything went fine by putting your Kindle to sleep: on a fresh install, you should now see a special screensaver to confirm that the installation was successful ;). Carry on if you do, otherwise, check the FAQ at the bottom of this message.

You now have a couple of choices to make:

Do you want to use the cover of the last book opened as a screensaver? Make sure you've installed the Python package first, then just drop a blank file named *cover* in the linkss folder. Restart your Kindle (*[HOME] -> [MENU] > Settings -> [MENU] > Restart*), and you're done :).

A couple of things to note on this mode: It's only available since *v0.31.N*, and if you don't rely on the autoreboot feature for third-party tools (Calibre?), the autoreboot feature is probably useless to you in this mode, so you should also delete the *autoreboot* file in the linkss folder.

If you simply want to use a set of custom screensavers, like usual, keep on reading :).

To change your custom screensavers, plug your Kindle to your computer via USB, and upload them to the *linkss/screensavers* folder that has been created by the hack. You'll have to restart your Kindle in order to take your new screensavers into account. To that effect, you can either use the autoreboot feature, or simply do a full restart of your Kindle.

To use the autoreboot feature: Just drop a blank file named *reboot* in the linkss folder (by copying and renaming the already existing "autoreboot" blank file, for example) (*or in the linkfonts folder if you also have the fonts hack installed!*), and your Kindle will do a quick reboot 10s after you've unplugged it!
For those of you using meme's wonderful Kindle Collections : http://www.mobileread.com/forums/showthread.php?t=118635 plugin for Calibre, that's exactly what its 'fast reboot' setting does when you eject your Kindle from Calibre ;).

If you want to randomize the sequence in which your screensavers will be shown, create a blank file named *random* in the linkss folder (right alongside the "auto" file), and then do a full restart of your Kindle! This will shuffle your screensavers around on each boot.

*Since v0.23.N:* In addition to this, you can also shuffle your screensavers each time a framework restart is triggered through the autoreboot feature. Be advised that this may significantly (a few dozen of seconds) delay the framework restart procedure, depending on the number of screensavers you're using. To enable this feature, create a blank file named *shuffle* in the linkss folder (right alongside the "auto" file), and then restart your Kindle (either through the autoreboot feature, or a full restart).

*Since v0.35.N:* All of these settings are now available in a friendly *KUAL* : http://www.mobileread.com/forums/showthread.php?t=203326 menu :). Running at least KUAL 2.1 is recommended for the best user experience.


*Fonts:*
*What Does It Do?:*

This will allow you to customize the fonts used by your Kindle, be it in books, or the UI, and optionally grant you deeper control over the font rendering engine.





Please read this section in full before installing this hack, there are a few important things to be aware of: most notably that in order to avoid potential issues, you'll probably want to disable any & all password & parental control protections until you're satisfied with your fonts settings!

Download the appropriate kindle-fonts-5.16.N.zip file for your device (the K2, K2I, DX, DXI and DXG packages are in the kindle-fonts-5.16.N-k2.zip archive, the K3G, K3W and K3GB packages are in the kindle-fonts-5.16.N-k3.zip archive, and the K4 packages are in the kindle-fonts-5.16.N-k4.zip archive), and unpack it. In here, you'll find a few files.

First, upload the correct *Update_*_install.bin* file for your kindle to the root directory of your Kindle.
For a Kindle 2 International, that would be *Update_fonts_5.16.N_k2i_install.bin* for example.

Now, eject & unplug your Kindle, and go to *[HOME] -> [MENU] > Settings -> [MENU] > Update Your Kindle*. It should take a few dozen of seconds. If you're on FW 3.x or 4.x, and this is your first install, it may seem to hang for about a minute or two on the "Update successful, Your Kindle is restarting…" screen, that's okay.

Note that if you have KUAL : http://www.mobileread.com/forums/showthread.php?t=203326 set up and running, you're welcome to use our very own MR Package Installer : http://www.mobileread.com/forums/showthread.php?t=251143, which may speed up the process if you're installing multiple things ;).

If you want to change the fonts used by the hack, you'll have to upload them in the *linkfonts/fonts* directory, strictly following the usual naming scheme. (Type_Style.ttf) (for details on where each font is used, please see this post : http://www.mobileread.com/forums/showpost.php?p=977006&postcount=97). The default fonts installed by the hack are the usual non-cjk unicode fonts (Droid Sans, Droid Serif & DejaVu Sans Mono), with the addition of the CJK-aware Droid Fallback if you're on FW 3.x or 4.x. You'll find a bunch of other prepackaged, ready to use, font sets here, and in the next few replies.

You'll have to restart your Kindle in order to properly take your new fonts into account.

*By default, the autoreboot feature is enabled*. If you wish to make use of it, don't forget to drop a blank file named *reboot* in the linkfonts folder (right alongside the "autoreboot" file, by copying and renaming it, for example). When that file is present, your Kindle should automatically do a quick reboot 10s after you've unplugged it.

*FW 3.x & 4.x:* If you chose to handle the browser fonts, this will add a considerable overhead to this process (we need to regenerate FontConfig's config & cache). That can take more than a couple of minutes! It'll happen each time you update your fonts, either during the framework startup if you did a full restart, or *before the framework restart when using the autoreboot feature!*. So, if you're switching fonts on a K3 or K4, and you have enabled the browser fonts handling (more on that later), and you use the autoreboot feature, don't be surprised if it takes considerably more than 10s before the framework restarts!

Another thing to take into account since FW 3.x is that the settings of the rendering engine have changed a bit. It now makes use of the TrueType bytecode hinting instructions of your fonts, and uses them to hint at the most aggressive level. (In terms of FT/FC settings: hinting=true, hintstyle=hintfull, autohint=false). What this means is that fonts without hinting instructions (or with crappy code) will look considerably fuzzier than they did on previous devices. It's especially noticeable at small sizes, and in the browser.

If you really want to be able to tweak the browser fonts, and don't care about the overhead involved, just remove the *nobrowser* file in the linkfonts folder, and Restart your Kindle, and wait. A lot. *NOTE*: Because regenerating the cache takes so much time, we won't try to handle the browser fonts by default, in order not to waste 5 minutes each font switch.

*Important note about KF8 files:* Please note that in order to use your custom fonts in KF8 files, you will *have* to enable this feature! You'll also want your font's metadata to be consistent: for example, all the Serif fonts should be of the same family, and their styling info should be accurate, or you'll risk having strange surprises, like books rendered in all bold ;).

There's also two new custom fonts used for rendering non-latin scripts. CJK.ttf, like the name implies, is used to render Chinese/Japanese/Korean scripts. After that, there's I18N.ttf, which is used as a fallback. By default, the hack uses the DejaVu Sans font. While it's far more pretty than the vanilla fallback font usually used (code2000), it does seem to support a lot less different types of scripts. Long story short, if you have weird non-latin rendering issues, those are the two fonts you should look at ;).

If you don't use the autoreboot feature (for exemple if you removed the autoreboot file in the linkfonts folder), you'll have to do at least a framework restart each time you change the fonts. If you have no means of doing a framework restart (ie. via usbnetwork), you'll have to do a full restart via the Settings menu, or by holding the power switch for ~15 seconds). Do note that the autoreboot & Restart methods are both way cleaner (and possibly safer) than the physical hard-reboot (which basically just plugs the battery off for a little while, which explains why your Kindle needs to be unplugged from any power source for this to work).

/!\ Be careful, if you miss a font, the hack won't be applied, so you shouldn't have any problem, but if for some reason, the Kindle software doesn't like one of your custom font, they'll be garbled, or invisible. Also, it may prevent you from actually _seeing_ the Settings page to do the restart. (And actually reading any books, also.) If that happens to you, try one of the three methods described earlier to reboot your Kindle. *If you want to avoid this kind of issue, use the autoreboot feature ;)* Also, *don't remove the other fonts found in the linkfonts/fonts folder*. We need them, and the hack won't be applied if they're missing. Using an FT override like bci is another workaround to remember if your device *really* doesn't like a font, even after a reboot.

*Since v4.0.N:* You can now control a bit more the settings used by the rendering engine. For example, if you want to make sure it'll be using FreeType's autohinter (like on FW 2.x) instead of native hinting on FW >= 3.x, drop a blank *autohint* file in the linkfonts folder. The same applies on FW 2.x if you want to make sure the renderer uses native hinting (like FW >= 3.x) instead of the autohinter on FW 2.x, drop a blank *bci* file in the linkfonts folder.
You will have to do a full *Restart* of your Kindle for the changes to be taken into account (a framework restart won't be enough).
(Note that both settings are always available (ie. you can use bci on FW 3.x, and autohint on FW 2.x), in which case while the rendering should be mostly similar to your Kindle's defaults, it won't be exactly the same, due to changes in FreeType, and possibly patches Amazon might be using. If you have both files present, autohint will take precedence. It might also impact page turns perceived speed (good or bad, YMMV).)
*v4.1.N:* In addition to autohint & bci, there is now a third setting available: *light*. It's based on autohint, but with lighter hinting and a bunch of other tweaks used in order to try to preserve each glyph's shape, at the expense of being potentially a bit fuzzier. It's a bit like font rendering on OS X. It might very well look better than both the autohint or bci settings in the latest versions of the Hack.
*v5.4.N:* The bci_new override was added. It's similar to bci, but it might be slightly more performant. It might also be less compatible, so if you start encountering weird rendering issues, switch back to bci ;).
*v5.8.N:* Removal of the bci_new override (if you're currently using it, the installer will migrate your config to bci). Basically, what differentiated it from bci is now enabled by default for all three variants. I haven't encounterd any issues yet, but if you suddenly experience severe rendering issues after this update, contact me!
*NOTE:* For obvious reasons (it's a bit more intrusive than usual), this is disabled by default. But it might very well workaround the 'blank fonts' issue some of you have been suffering on FW >= 3.x ;).
*NOTE:* If all of this is still a bit unclear, please check this post : http://www.mobileread.com/forums/showpost.php?p=1210081&postcount=1066. And if you're still confused, you can of course skip this feature entirely ;).

*Since v5.8.N:* All of these settings are now available in a friendly *KUAL* : http://www.mobileread.com/forums/showthread.php?t=203326 menu :). Running at least KUAL 2.1 is recommended for the best user experience.


*WIKI:*

If you have some trouble with my brief instructions, the MR wiki has been updated (with some screenshots):
Fonts Hack: http://wiki.mobileread.com/wiki/Kindle_Font_Hack_for_all_2.x,_3.x_and_4.x_Kindles
SS Hack: http://wiki.mobileread.com/wiki/Kindle_Screen_Saver_Hack_for_all_2.x,_3.x_%26_4.x_Kindles


*NOTES, TROUBLESHOOTING & FAQS:*

Some people reported losing their collections when installing these hacks… It shouldn't happen, but apparently it's a bug in the vanilla 2.5 firmware, so make sure you do a Whispernet Sync and/or that you make a backup of your *system/collections.json* file before doing anything ;).

If you're unsure of your Kindle model (and thus of which exact .bin file to use), check this wiki page : http://wiki.mobileread.com/wiki/Kindle_Serial_Numbers to find the nickname corresponding to your device ;).

Don't try to force a custom update by rebooting your Kindle. You should *always* install custom hacks via the Settings page. If the 'Update Your Kindle' link is greyed out, it's because you uploaded the wrong binfile for your device. Don't try to force an install by rebooting. It'll, at best, fail, and at worst, force you to start your Kindle in recovery mode to delete the offending update.

Again, if you're having issues with the Fonts hack (missing fonts, blank pages/menu, …), do try to use one of the new freetype override settings! In the same vein, disable your Kindle's password/parental control before switching fonts, there's been reports that a messed up font will prevent the password box from popping up, in which case you won't be able to unlock your device… And that probably means a hard reset to factory defaults will be needed to clear things up, and that's never fun ;'(.

In the ScreenSavers hack, If the cover mode seems to be behaving strangely, make sure the date and time is properly set on your device (check that, when sorting your Home screen by 'Recent', you get consistent & accurate results) and that the books you're using actually have a cover properly tagged & embedded. One other thing to keep in mind is that the switch is not done immediately on the opening of a book, but only a few seconds later, and that, when opening a book for the first time, the parsing & processing of the cover can take a noticeable amount of time (usually between 30s and a minute, depending on the CPU load).

In the ScreenSavers hack, in classic 'image cycle' mode, if your Kindle simply goes to sleep with a blank screen, it most likely means one of your custom images is broken (wrong format, weird encoding issue, weird size issue, or any number of fun & interesting ways to make the Kindle unhappy). Once you've identified the file(s) causing the issue, remove them from the screensaver folder, and restart your device.

With the ScreenSavers hack, especially on DX & DXG devices, if the cover processing seems to take an inordinate amount of time (>45s), or even triggers a framework restart, try to go back to the Home screen for a while after opening a new book, and/or consider enabling the *lowmem* mode.

A list of the most common ScreenSavers issues & their cause is available in this post : http://www.mobileread.com/forums/showpost.php?p=2563266&postcount=625 as a kind of self-diagnostic you can do yourself to see if you missed something ;).

Another thing: every time I mention rebooting or restarting your device, you need to do it with the device completely *unplugged*. It may sound weird, but it affects a number of things in weird and interesting ways ;).

Also note that, while there is a zipfile for the USBNetwork hack attached here, I will only provide *very* limited support for it, and I *strongly* discourage anyone not well versed in bare-bone Linux CLI system administration to even try it. It's far too easy to brick your device/mess up the software with that thing.


*ChangeLog:*


**Jailbreak*:

    * *v0.1.N*:
    
        * Added an uninstaller, just in case
    
    * *v0.2.N*:
    
        * Works on firmware <= 3.0.2.
    
    * *v0.4.N*:
    
        * Works on firmware <= 3.0.3.
    
    * *v0.5.N*:
    
        * Works on firmware <= 3.2, thanks to yifanlu!
    
    * *v0.6.N*:
    
        * Fix uninstall so that it immediately switches back to default keys (on FW 3.1), instead of requiring a reboot.
    
    * *v0.7.N*:
    
        * Fix a stupid oversight that prevented a number of hacks to be correctly whitelisted. >_<"
    
    * *v0.8.N*:
    
        * Works on firmware <= 3.3, thanks to yifanlu & serge_levin!
    
    * *v0.9.N*:
    
        * Try harder to warn users when mixing jailbreaks (ie. abort if another jailbreak is found).
        * Also, fix the K3 3.0-3.2 packages that I stupidly broke in 0.8.N… >_<"
    
    * *v0.10.N*:
    
        * Updated whitelist
        * Use libkh (verbose logging if the linkjail/verbose file is present)
    
    * *v0.11.N*:
    
        * Deprecate the whole whitelist system (a fast autodetection method is used instead)
    
    * *v0.12.N*:
    
        * Update binaries
    
    * *v0.13.N*:
    
        * Update binaries
    

**Fonts*:

    * *v.3.2.N*:
    
        * Make backups of the original files on the first boot
        * If there's a script in linkfonts/bin/emergency.sh, run it and abort the hack on startup
        * If there's a file in linkfonts/bin/prettyversion.txt, use it to override the system's copy. (The original will be part of the backups)
        * Use the DejaVu Sans font instead of the Free Sans font in the default fonts set.
        * Added some safety checks to abort the hack if we're missing a font. It won't do a thing for fonts the Kindle Software doesn't happen to really like, though…
    
    * *v.3.3.N*:
    
        * You won't have to uninstall/deactivate the hack in order to install official updates!
        * Added the possibility to let the Kindle automatically soft-reboot when switching fonts. It's now both safer & faster! (Check the detailed instructions belox for the detail)
        * And a bunch of tweaks in the scripts to make them safer. I don't remember everything right now, there's a detailed ChangeLog in each zipfile for those interested.
    
    * *v3.4.N*:
    
        * Fix a bug with the autoreboot feature, which would, occasionally, after an update, go a bit crazy, and do *two* restarts instead of one. That upsets the Kindle for a while, but it ends up doing a full reboot.
        * If you had a custom prettversion.txt, that wasn't update-safe. It's now fixed.
    
    * *v3.5.N*:
    
        * Use the system logger instead of pointless echo's to stdout. (That way, it'll end up in the output of ;dumpMessages among other things).
        * Avoid forking & parsing ls in some cases, when a shell glob can do the job.
    
    * *v3.6.N*:
    
        * Fix a silly case sensitivity bug that prevented official OTA updates from being trapped by the scripts.
    
    * *v3.7.N*:
    
        * Don't trap update files from our own hacks
        * Log to syslog during install & uninstall updates
        * The linkfonts folder is now installed by the update binfile! No need to copy it manually anymore.
            And if you're already using custom content, it won't be overwritten, allowing you to keep your choice of fonts and/or screensavers when updating the hacks.
            Both this thread and the Wiki have been updated to reflect this change, simplifying a bit the install & update process.
    
    * *v3.8.N*:
    
        * Works on firmware v3.x.
        * FW 3.x only: Customizing the browser fonts adds a certain overhead to the font switching process (it'll most likely take a few minutes during boot or before a framework restart)
            if you have updated your fonts. Moreover, the Kindle FW now makes use of TrueType hinting instructions. That tends to make fonts not having TT hinting instructions (or crappy ones)
            fuzzier than they looked on a K2. That is especially marked with small font sizes and with the browser. In order to let the browser use the default fonts, to both be sure you'll have readable fonts, and
            to avoid the overhead when switching fonts, create a blank "nobrowser" file in the linkfonts directory. All this is explained in a bit more details in the install instructions.
            *NOTE*: Because it really takes a *long* time to regenerate fontconfig's cache, the "nobrowser" feature in *enabled by default*.
    
    * *v3.9.N*:
    
        * FW 3.x: Added a different font config file that replaces the "condensed" font with the original serif (Caecilia). To enable this, drop a blank "nocondensed" file in the linkss folder.
        * Update the CJK.ttf font (Droid Fallback). Supports even more Chinese glyphs.
        * The install script now correctly upgrades default custom fonts.
        * Move pid & lock files in a dedicated folder (run) to unclutter the bin folder.
        * Move all the config files to a dedicated folder (etc). The bin folder now really only contains binaries.
    
    * *v4.0.N*:
    
        * Tweak the usb watchdog a bit to avoid false-positives, and implement a proper locking mechanism to avoid race conditions.
        * Whitelist font_pkg & duokan update files (don't trap them).
        * Update the fc-scan binary (updated FontConfig & TC).
        * New feature: you can now override the FreeType library used to render fonts, in order for example to force the usage of FT's
            autohinter, to get a rendering resembling that of FW 2.x. Check the post for more details.
        * Fix the fontconfig config generation to properly take all styles into account, while still avoiding multiple entries for the same font family.
        * And, actually, fix the fontconfig cache generation, too. (Stupid mistake that would break this on vanilla Kindles…)
        * Properly check if the hack is already applied instead of the usual workarounds to avoid double mounts.
        * A few code cleanups.
    
    * *v4.1.N*:
    
        * A tiny code cleanup.
        * Support light FT hinting (override)
        * Fix the FW 3.x browser when using an FT override.
    
    * *v4.2.N*:
    
        * Only use the FT override + FW 3.x browser fix when we're actually using an FT override on FW 3.x.
        * Updated FT libs (updated ft)
    
    * *v4.3.N*:
    
        * Updated FT libs (updated ft)
        * Updated fc-scan binary (updated fc)
        * Use the new jailbreak whitelist to check wether of not we want to trap an update file.
    
    * *v4.4.N*:
    
        * Updated FT libs (updated ft)
        * Fix the rendering issues encountered with the 'light' ft override in the Symbols popup, Note edit popup and address bars.
        * Updated fallback whitelist
    
    * *v4.5.N*:
    
        * Updated FT libs (new tc, updated ft)
        * Updated fallback whitelist
        * Updated binaries (new tc, updated fc)
    
    * *v4.6.N*:
    
        * update trap whitelisting bugfix
    
    * *v4.7.N*:
    
        * Updated the USB watchdog to support the new shuffle on autoreboot feature of SS v0.23.N.
        * Updated FT libs (new tc, updated ft)
        * Updated binaries (new tc, updated fc)
    
    * *v4.8.N*:
    
        * Updated the USB watchdog to print a status bar on the bottom of the screen when triggering an autoreboot.
    
    * *v4.9.N*:
    
        * Updated FT libs (new tc, updated ft)
        * Updated binaries (new tc, updated fc)
        * Use libkh (verbose logging if the linkfonts/verbose file is present)
        * Always use verbose logging when using the browser feature on FW 3.x
        * Add some more failsafes around the USB watchdog when dealing with broken setups
    
    * *v5.0.N*:
    
        * Added some more safety checks to avoid filling up a partition during install
        * Updated FT libs (new tc, updated ft)
        * Updated fallback whitelist
        * Updated binaries (new tc, updated fc)
        * Update the CJK.ttf font (Droid Fallback)
    
    * *v5.1.N*:
    
        * Updated FT libs (new tc, updated ft)
        * Updated binaries (new tc, updated fc)
        * Updated fallback whitelist
        * Build the packages with KindleTool : https://github.com/NiLuJe/KindleTool
        * Dry-coded K4 support (completely untested, likely unsafe)
    
    * *v5.2.N*:
    
        * Updated FT libs (new tc, updated ft)
        * Updated binaries (new tc, updated fc)
        * K4 support
        * Firmware 3.4 support (for browser/KF8)
    
    * *v5.3.N*:
    
        * Fixed a number of stupid bugs related to KF8/Fontconfig handling.
    
    * *v5.4.N*:
    
        * Removed the browser workaround, turns out it's unnecessary now that we're doing stuff properly.
        * Added the bci_new FT override (bci built without FT_CONFIG_OPTION_OLD_INTERNALS). It might be more performant, but it might also be less compatible, especially on older devices/fw.
        * Use the proper fontconfig config file in older K3 FW (<= 3.3).
    
    * *v5.5.N*:
    
        * Updated FT libs (new tc, updated ft)
        * Updated binaries (new tc, updated fc)
    
    * *v5.6.N*:
    
        * Updated FT libs (new tc, updated ft)
        * Updated binaries (new tc, updated fc)
        * Disabled the update trap
    
    * *v5.7.N*:
    
        * Updated FT libs (new tc, updated ft)
        * Updated binaries (new tc, updated fc)
    
    * *v5.8.N*:
    
        * New KUAL extension (at the time of release, requires the development version of KUAL)
        * Updated FT libs (new tc, updated ft)
        * Updated binaries (new tc, updated fc)
        * The bci_new ft override is gone. Everything now uses the latest FT internals.
    
    * *v5.9.N*:
    
        * Updated binaries (new tc, updated fc)
    
    * *v5.10.N*:
    
        * Updated binaries (new tc, updated ft & fc)
    
    * *v5.11.N*:
    
        * Slightly prettier verbose mode
        * Updated binaries (new tc, updated ft & fc)
    
    * *v5.12.N*:
    
        * Updated binaries (new tc, updated ft & fc)
    
    * *v5.13.N*:
    
        * Updated binaries (new tc, updated ft & fc)
    
    * *v5.14.N*:
    
        * Updated binaries (new tc, updated ft & fc)
    
    * *v5.15.N*:
    
        * Updated binaries (new tc, updated ft & fc)
    
    * *v5.16.N*:
    
        * Updated binaries (new tc, updated ft & fc)
    

**ScreenSavers*:

    * *v0.5.N*:
    
        * Reworked the script to use the same wonderful idea of bind mounts as the font hack. (And use a single script for everything, handling both the K2 & KDX)
        * Same system of backup/emergency/prettyversion as the font hack.
        * A bit of safety check to avoid using an empty directory for the screensavers
    
    * *v0.6.N*:
    
        * Same tweaks & updates as the Fonts hack.
        * You now have the possibility to automatically randomize the order in which your screensavers will be displayed. (Check the detailed instructions below)
    
    * *v0.7.N*:
    
        * Same bugfixes as the Fonts hack.
    
    * *v0.8.N*:
    
        * Same new featured/bug fixes as the Fonts hack (system logging, less forking).
        * Fix a bug with the screensavers randomizing (and possibly the set up of the hack in itself, if you're really unlucky) when your screensavers have spaces or special characters in their filenames.
        * In the same vein, fix a bug with some safety checks when using the random feature.
    
    * *v0.9.N*:
    
        * Same bugfixes as the Fonts hack.
        * Made the double mount safety check faster & more robust.
    
    * *v0.10.N*:
    
        * Same bugfixes & changes as the Fonts hack (install/uninstall logging, linkss directory auto install).
    
    * *v0.11.N*:
    
        * Works on firmware v3.x.
    
    * *v0.12.N*:
    
        * Use a proper random sorting algorithm (coreutils' sort -R) when using the "random" feature, instead of my previous crappy pure shell workaround.
    
    * *v0.13.N*:
    
        * Fix (again) a bug with the screensavers randomizing when your screensavers have spaces or special characters in their filenames.
    
    * *v0.14.N*:
    
        * Use a dynamically linked sort binary. (To save a bit of space).
        * Same changes as the Fonts hack (config & pidfiles moved).
    
    * *v0.15.N*:
    
        * Properly detect the screen size instead of trying every size possible. (Avoid an useless mount).
    
    * *v0.16.N*:
    
        * Same fixes as the Fonts hack (update trap, usb watchdog, cleanups, mount checks).
        * Updated sort binary (updated coreutils & TC).
    
    * *v0.17.N*:
    
        * Fixed a confusing install log message
        * Updated sort binary (updated coreutils)
    
    * *v0.18.N*:
    
        * Fix the autoreboot feature when the fonts hack is not installed.
    
    * *v0.19.N*:
    
        * Updated sort binary (updated coreutils)
        * Same fixes as the Fonts hack (update trap)
    
    * *v0.20.N*:
    
        * Updated fallback whitelist
    
    * *v0.21.N*:
    
        * Updated fallback whitelist
        * Updated binaries (new tc, updated coreutils)
    
    * *v0.22.N*:
    
        * update trap whitelisting bugfix
    
    * *v0.23.N*:
    
        * You can now also shuffle your screensavers when an autoreboot is triggered by the USB watchdog (check the first post for details).
        * Updated binaries (new tc)
    
    * *v0.24.N*:
    
        * Updated the USB watchdog to print a status bar on the bottom of the screen when triggering an autoreboot.
    
    * *v0.25.N*:
    
        * Updated binaries (new tc, updated coreutils)
        * Use libkh (verbose logging if the linkss/verbose file is present)
        * Add some more failsafes around the USB watchdog when dealing with broken setups
        * Simplify the zero-padding code when shuffling screensavers
    
    * *v0.26.N*:
    
        * Updated fallback whitelist
        * Updated binaries (new tc, updated coreutils)
        * Added some more safety checks to avoid filling up a partition during install
    
    * *v0.27.N*:
    
        * Updated binaries (new tc, updated coreutils)
        * Updated fallback whitelist
        * Build the packages with KindleTool : https://github.com/NiLuJe/KindleTool
        * Beta, untested K4 support
    
    * *v0.28.N*:
    
        * Updated binaries (new tc, updated coreutils)
        * K4 support
    
    * *v0.29.N*:
    
        * Resync watchdog with Fonts v5.3.N
    
    * *v0.30.N*:
    
        * Updated binaries (new tc)
    
    * *v0.31.N*:
    
        * Implement a new setting: use the cover of the last book opened as the screensaver! (Drop a blank *cover* file in the linkss folder to enable this mode)
    
    * *v0.32.N*:
    
        * Updated binaries (new tc, updated coreutils)
        * Disabled the update trap
        * A bunch of cover mode fixes
    
    * *v0.33.N*:
    
        * Tweak the processing settings in cover mode to generate higher quality images (sharper upscaling algo, better dithering).
    
    * *v0.34.N*:
    
        * Tweak the processing settings in cover mode to generate smaller files.
        * Implement a new cover mode setting: black letterboxing borders. (Drop a blank *black* file in the linkss folder to enable this mode)
        * Implement a new cover mode setting: automatically crop the borders, to end up with a full screen cover. (Drop a blank *autocrop* file in the linkss folder to enable this mode)
        * Updated binaries (updated tc, coreutils)
    
    * *v0.35.N*:
    
        * New KUAL extension (at the time of release, requires the development version of KUAL)
        * Tweaked the processing settings a bit to play nice with the new ImageMagick build. Possibly a bit faster.
        * Try harder to not break the cover mode under some circumstances…
        * Made the extra workaround for the first sleep cycle in cover mode configurable (if you sometimes see a broken/innacurate cover on the first sleep cycle after a book switch, drop a blank *sleep* file in the linkss folder to enable this workaround).
        * Updated binaries (updated tc, everything)
    
    * *v0.36.N*:
    
        * Made the default & fallback image in cover mode a bit more helpful than a blank screen.
    
    * *v0.37.N*:
    
        * Optimized cover mode behavior, IO wise.
    
    * *v0.38.N*:
    
        * Updated binaries (updated tc)
        * Tweaked how the cover images are dithered down (now properly use the eInk palette of 16 shades of grey).
        * Reduced memory consumption of the cover processing, now less likely to blow up the framework on DX/DXG devices.
        * In the same spirit, added more settings to control the dithering process (none/FloydSteinberg/Riemersma).
        * The KUAL extension now properly detects the Kindle DX models when showing device-specific buttons with the latest KUAL development snapshots.
    
    * *v0.39.N*:
    
        * Updated binaries (updated tc)
    
    * *v0.40.N*:
    
        * Slightly prettier verbose mode
        * Better handling of some old MOBI files for cover extraction
        * Updated binaries (updated tc)
    
    * *v0.41.N*:
    
        * Fix part of the cover extraction fix from v0.40.N… >_<"
        * Add a KUAL button to preview the current active cover in cover mode (in the Tools submenu)
    
    * *v0.42.N*:
    
        * Updated binaries (updated tc)
    
    * *v0.43.N*:
    
        * Updated binaries (updated tc, im)
    
    * *v0.44.N*:
    
        * Fix cover mode, which was spectacularly broken in 0.43.N!
        * Updated binaries
    
    * *v0.45.N*:
    
        * Updated binaries (updated tc, im)
    
    * *v0.46.N*:
    
        * Updated binaries (updated tc, im)
    
    * *v0.47.N*:
    
        * Updated binaries (updated tc, im)
    

**Python*:

    * *v0.1.N*:
    
        * First release.
    
    * *v0.2.N*:
    
        * Updated binaries (new tc)
    
    * *v0.3.N*:
    
        * Updated binaries (updated tc)
    
    * *v0.4.N*:
    
        * Updated binaries (updated tc, update to Python 2.7.5)
    
    * *v0.5.N*:
    
        * Updated binaries (updated tc, updated Python 2.7.5 patchset to fix potential issues with the re module)
    
    * *v0.6.N*:
    
        * Updated binaries (updated tc, fix ssl & pyexpat modules)
    
    * *v0.7.N*:
    
        * Updated binaries (updated tc)
    
    * *v0.8.N*:
    
        * Updated binaries (updated tc)
    
    * *v0.9.N*:
    
        * Updated binaries (updated tc, update to Python 2.7.6)
    
    * *v0.10.N*:
    
        * Updated binaries (updated tc)
    
    * *v0.11.N*:
    
        * Updated binaries (updated tc, update to Python 2.7.8, ships with a few third-party modules)
    
    * *v0.12.N*:
    
        * Updated binaries (update to Python 2.7.9)
        * The installer should no longer randomly fail in some circumstances (resource exhaustion).
    
    * *v0.13.N*:
    
        * Updated binaries (updated tc)
    
    * *v0.14.N*:
    
        * Updated binaries (updated tc, update to Python 2.7.10)
    

**Doc:* $Id: MR_THREAD 15993 2019-06-04 14:49:06Z NiLuJe $


