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
mntroot rw 2>/dev/null || true

echo "Disarming 2025 overlay untether (if present)..."
/var/local/xm/untether-disarm.sh 2>/dev/null || true
rm -f /etc/upstart/untether-rearm.conf /var/local/xm/xm.so /var/base-local/xm/xm.so 2>/dev/null || true

echo "Making Binaries Mutable..."
${CHATTR} -i /usr/bin/otaupd /usr/bin/otav3 /usr/bin/otaupd.bck /usr/bin/otav3.bck 2>/dev/null || true

echo "Renaming Binaries..."
if [ -f /usr/bin/otaupd.bck ]; then
    mv -f /usr/bin/otaupd.bck /usr/bin/otaupd
fi
if [ -f /usr/bin/otav3.bck ]; then
    mv -f /usr/bin/otav3.bck /usr/bin/otav3
fi

echo "Remounting RootFS R/O"
mntroot ro 2>/dev/null || true

echo "Rebooting... (5s)"
sleep 5
reboot
