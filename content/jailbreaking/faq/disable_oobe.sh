#!/bin/sh
# Name: Disable OOBE
# Author: KindleModding

echo "Removing OOBE marker files..."
rm -f /var/local/decanter/RESUME_OOBE_FOR_OTA
rm -f /var/local/decanter/OTA_START_FOR_METRIC
echo "Rebooting... (5s)" 
sleep 5
reboot
