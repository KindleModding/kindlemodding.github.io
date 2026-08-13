#!/bin/sh
# Name: Restore Updates
# Author: KindleModding

echo "Identifying Chattr..."

OLD_CHATTR="/bin/chattr"
NEW_CHATTR="/bin/chattr.e2fsprogs" # KT6 5.18.1.5+ and PW6, KS, & KS2 5.18.5+

if [ -f "${OLD_CHATTR}" ]; then
    CHATTR="${OLD_CHATTR}"
elif [ -f "${NEW_CHATTR}" ]; then
    CHATTR="${NEW_CHATTR}"
else
   
    echo "Error: Could NOT Find Chattr! (That's Bad...)"
    CHATTR="${OLD_CHATTR}" # Last Resort
fi

echo "Remounting RootFS R/W" 
mntroot rw

echo "Making Binaries Mutable..."
${CHATTR} -i /usr/bin/otaupd.bck
${CHATTR} -i /usr/bin/otav3.bck

echo "Renaming Binaries..."
mv /usr/bin/otaupd.bck /usr/bin/otaupd 
mv /usr/bin/otav3.bck /usr/bin/otav3 

echo "Remounting RootFS R/O" 
mntroot ro

echo "Rebooting... (5s)" 
sleep 5
reboot
