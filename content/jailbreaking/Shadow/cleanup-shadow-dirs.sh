#!/bin/sh
# Name: Cleanup Directories
# Author: yubaix

# Removes all empty directories left behind by Shadow's memory leak primitive.
# 
# The folders created by Shadow are identified by their unique, random name
# structure, as well as by their empty contents. The structure is as follows:
# - 9 empty folders with 6 character random names
# - root-level warmup folders: "w" + 12 random characters (13 total)
# - (Char length in brackets) {199}/{199}/{199}/{245}/{200}
# - {4}/{4}
#
# All default system directories are whitelisted, such that they CANNOT be deleted.
# Furthermore on the safety note, rmdir is used--not rm -rf.

set -u

PATH=/bin:/sbin:/usr/bin:/usr/sbin:${PATH:-}
export PATH

BASE=${BASE:-/mnt/base-us}
case "$BASE" in /) ;; */) BASE=${BASE%/} ;; esac

[ -d "$BASE" ] || { echo "$0: no such directory: $BASE" >&2; exit 1; }

# A run of N '?' characters, used as an exact-length find(1) name pattern.
q() {
    printf '%*s' "$1" '' | tr ' ' '?'
}
P4=$(q 4)
P6=$(q 6)
P12=$(q 12)
P199=$(q 199)
P200=$(q 200)
P245=$(q 245)

is_alpha() {
    case "$1" in
        ''|*[!A-Za-z]*) return 1 ;;
    esac
    return 0
}

protected() {
    case "$1" in
        .*) return 0 ;;
        voice|fonts|audible|system|documents|screenshots) return 0 ;;
    esac
    return 1
}

# Compact display: long random names are unreadable in full.
label() {
    p=$1
    rel=${p#"$BASE"/}
    n=${p##*/}
    case "${#n}" in
        199|200|245) printf '[%d] %.24s...' "${#n}" "$n" ;;
        *) printf '%s' "$rel" ;;
    esac
}

LIST=/tmp/.shadow-cleanup.$$
trap 'rm -f "$LIST"' 0
: > "$LIST"

# 1. The long-name tree. -depth gives children before parents, so rmdir can
#    peel <200>, then <245>, then the three <199> levels.
find "$BASE" -depth -type d \
    \( -name "$P199" -o -name "$P200" -o -name "$P245" \) |
while IFS= read -r d; do
    name=${d##*/}
    is_alpha "$name" || continue
    protected "$name" && continue
    printf '%s\n' "$d" >> "$LIST"
done

# 2. A root-level 4-char folder holding exactly one 4-char folder.
find "$BASE" -mindepth 1 -maxdepth 1 -type d -name "$P4" |
while IFS= read -r d; do
    name=${d##*/}
    is_alpha "$name" || continue
    protected "$name" && continue
    n=$(find "$d" -mindepth 1 -maxdepth 1 | wc -l)
    [ "$n" -eq 1 ] || continue
    sub=$(find "$d" -mindepth 1 -maxdepth 1)
    [ -d "$sub" ] || continue
    sname=${sub##*/}
    is_alpha "$sname" || continue
    protected "$sname" && continue
    [ "${#sname}" -eq 4 ] || continue
    printf '%s\n' "$sub" >> "$LIST"
    printf '%s\n' "$d" >> "$LIST"
done

# 3. The nine 6-char dummy folders at the root.
find "$BASE" -mindepth 1 -maxdepth 1 -type d -name "$P6" |
while IFS= read -r d; do
    name=${d##*/}
    is_alpha "$name" || continue
    protected "$name" && continue
    printf '%s\n' "$d" >> "$LIST"
done

# 4. Warmup folders: "w" + 12 random characters.
find "$BASE" -mindepth 1 -maxdepth 1 -type d -name "w$P12" |
while IFS= read -r d; do
    name=${d##*/}
    is_alpha "$name" || continue
    protected "$name" && continue
    printf '%s\n' "$d" >> "$LIST"
done

if [ ! -s "$LIST" ]; then
    echo "no shadow leftovers found under $BASE"
    exit 0
fi

echo "shadow cleanup: $BASE"
echo "protected: .* voice fonts audible system documents screenshots"

removed=0
kept=0
while IFS= read -r d; do
    [ -d "$d" ] || continue
    if rmdir "$d" 2>/dev/null; then
        echo "removed $(label "$d")"
        removed=$((removed + 1))
    else
        echo "kept    $(label "$d") (not empty)"
        kept=$((kept + 1))
    fi
done < "$LIST"


echo "done: $removed removed, $kept kept"

if [ -f "/mnt/us/jb.sh" ]; then
    rm /mnt/us/jb.sh
    echo "removed /mnt/us/jb.sh"
fi

