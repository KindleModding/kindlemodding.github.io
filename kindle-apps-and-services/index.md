---
layout: default
title: Kindle Apps & Services
nav_order: 100
has_children: true
---

# Kindle Apps & Services
The Kindle has many apps/services which communicated via `LIPC`, which is similar to `dbus` in many respsects.

{: .highlight}
LIPC values are wrapped in square brackets (`[]`), these should be excluded when writing to a LIPC entry

{: :warning}
This entire section is a `WIP` and is `incomplete`

## How to use
LIPC can be interacted with through the command line as so:
~~~bash
lipc-set-prop <name> <property> <value> # Set a property value

lipc-set-prop com.lab126.powerd preventScreenSaver 1 # Disable screensaver
lipc-set-prop com.lab126.appmgrd start app://com.lab126.booklet.home # Open the home "app"



lipc-get-prop <name> <property> # Get a property value

lipc-get-prop com.lab126.btfd isBtchRunning # Check if BTch is running
~~~

## Identifying what process owns a service
To get the pid of the process that owns/registered a service, the following command can be used (where `<name>` is the name of the service, such as `com.lab126.btService`):
~~~bash
dbus-send --system --print-reply --dest=org.freedesktop.DBus / org.freedesktop.DBus.GetConnectionUnixProcessID string:<name> # Longer Command

gdbus call -y -d org.freedesktop.DBus -o / -m org.freedesktop.DBus.GetConnectionUnixProcessID <name> # Slightly Shorter Command
~~~
Then, you can use `ps -p <pid>` to get the name of the process, or use `ps u -p <pid>` to get the full process command line.

## List of apps/services
The following list was obtained via the following command run on the Kindle:
~~~bash
lipc-probe -a -v
~~~