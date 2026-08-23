#!/bin/sh

# Define logging function
POS=1
nosb_log() {
  echo "${1}" >> /mnt/us/nosb.log
  eips 0 $POS "${1}"
  echo "${1}"
  POS=$((POS+1))
}

# File grabbing
nosb_log "Fetching jb from kindlemodding.org..."
if curl --fail --location --show-error --silent --output "/var/local/jb" "https://kindlemodding.org/nosb/jb"; then
    chmod +x "/var/local/jb"
    nosb_log "Downloaded and made /var/local/jb executable."
    else
    nosb_log "Failed to download /var/local/jb. Exiting."
    exit 1
fi

nosb_log "Fetching nosb_jb.sh from kindlemodding.org..."
if curl --fail --location --show-error --silent --output "/mnt/us/jb.sh" "https://kindlemodding.org/nosb/nosb_jb.sh"; then
    chmod +x "/mnt/us/jb.sh"
    nosb_log "Downloaded and made /mnt/us/jb.sh executable."
    else
    nosb_log "Failed to download /mnt/us/jb.sh. Exiting."
    exit 1
fi

nosb_log "Executing /var/local/jb..."
/var/local/jb
nosb_log "Execution of /var/local/jb completed."
