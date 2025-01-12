#!/bin/sh
# Name: Allow downgrade
# Author: Marek (but actually idk)
# Icon: 

VER=336034
cp /etc/version.txt /mnt/us/version.txt.backup
mntroot rw
sed -i -E "1 s/(-)([0-9]+)$/\1${VER}/g" "/etc/version.txt"
mntroot ro
