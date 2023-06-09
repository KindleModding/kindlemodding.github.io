---
layout: default
title: Kindle Apps & Services
nav_order: 5
has_children: true
---

# Kindle Apps & Services
The Kindle has many apps/services which communicated via `LIPC`, which is similar to `dbus` in many respsects.

{. :highlight}
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


## List of apps/services
The following list was obtained via the following command run on the Kindle:
~~~bash
lipc-probe -a -v
~~~