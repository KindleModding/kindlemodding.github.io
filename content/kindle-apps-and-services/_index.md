---
layout: default
title: Kindle Apps & Services
weight: 100
---

# Kindle Apps & Services
The Kindle has many apps/services which communicate via `LIPC`, a custom IPC system based on DBus.

<blockquote class="info">
LIPC values are wrapped in square brackets (`[]`), these should be excluded when writing to a LIPC entry
</blockquote>

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

## Integrating with LIPC

For simple uses, it's easiest to run `lipc-get-prop` and `lipc-set-prop` as a subprocess.

If you need read/write access to hash properties and events, it may be easier to link with `liblipc.so` and use the reverse-engineered headers in [openlipc](https://github.com/notmarek/openlipc), or a Lua wrapper, [openlipclua](https://github.com/NiLuJe/openlipclua).

## Implementation details

DBus is built upon _methods_, which can have parameters and return values, and _signals_, which are broadcasts (with optional extra data, but no return values).

LIPC's fundamental objects are _properties_ and _events_, which are built upon those DBus concepts. All LIPC operations happen on DBus's system bus. Just like DBus connections can request a specific name with `dbus_bus_request_name`, this can be done for a connection to request an LIPC service name.

### LIPC events

An LIPC event has a source service, an event name, and an optional list of int/string parameters.

LIPC events are identical to DBus signals with a specific format. The path is always `/default` and the name set to `interface.member`, where `interface` is the LIPC service name and `member` is the LIPC event name.

Events can have `int32` or `string` DBus types as the payload.

### LIPC properties

LIPC properties are DBus method calls. Similar to events, they use `/default` as the path, and `interface.member` for the name.

#### Method calls: get and set

Member names depend on the type of the property and whether the request is read or write: the word `get` or `set`, followed by the property name, and suffixed with `Int` or `Str`.
Hash property access is always considered a `set` and has the suffix `Has`.

String and int properties pass the new value directly as a normal DBus parameter.

Hash properties are more complex, and they haven't been fully reverse engineered. They're based on DBus and shared memory, which contains [GLib `GHashTable`s](https://www.manpagez.com/html/glib/glib-2.42.1/glib-Hash-Tables.php#g-hash-table-new-full) (as well as mutexes and other metadata).

The final DBus method parameter is the optional _sender_ name.

#### Return values

All `get` and `set` property access has at least one return value: a `uint32` status.

`get` calls will additionally include a `string` or `int32` DBus value containing the property value, or an optional `uint32` pointer for hasharray access.

### Examples from `dbus-monitor`

`dbus-monitor` ships in the Kindle firmware on production devices. It can be used to monitor the DBus system bus; in other words, it can be used to watch LIPC events and see when properties are accessed or modified.

{{< details summary="Allowing `dbus-monitor` to see method calls" >}}
By default, DBus permissions only allow `dbus-monitor --system` to see events (and not method calls). This can be modified, but this is *dangerous*, as you're modifying a core component of the Kindle OS.

The Kindle comes with a `/etc/dbus-1/system-local.conf` config file: you can [add "eavesdrop" permissions](https://wiki.ubuntu.com/DebuggingDBus#How_to_monitor_the_system_bus) to show method calls too. Keeping the existing content and updating according to the linked documentation should give something like this:

```xml
<!DOCTYPE busconfig PUBLIC "-//freedesktop//DTD D-Bus Bus Configuration 1.0//EN"
 "http://www.freedesktop.org/standards/dbus/1.0/busconfig.dtd">
<busconfig>
  <!-- Our well-known bus type, do not change this -->
  <type>system</type>
  <standard_system_servicedirs/>

  <policy user="root">
    <allow eavesdrop="true"/>
    <allow eavesdrop="true" send_destination="*"/>
  </policy>
</busconfig>
```

Ensure the written file is valid XML, and restart the Kindle to apply the change. At this point, `dbus-monitor --system` should show method calls in addition to signals.
{{< /details >}}

This is an example from `dbus-monitor` showing an int property being read: the quick settings panel reading the current screen brightness. (Note the `get` prefix and `Int` suffix.) The return value has a zero status (success) and the value 10. This method has no parameters other than the optional sender name (`com.lab126.kppsettings`).

~~~plaintext
method call sender=:1.179 -> dest=com.lab126.powerd serial=1498 path=/default; interface=com.lab126.powerd; member=getflIntensityInt
   string "com.lab126.kppsettings"
method return sender=:1.5 -> dest=:1.179 reply_serial=1498
   uint32 0
   int32 10
~~~

This LIPC event `connectionAvailable` was sent by `com.lab126.cmd` to notify listeners the Kindle has a WiFi connection, and that connection can reach the internet.
~~~plaintext
signal sender=:1.21 -> dest=(null destination) serial=4453 path=/default; interface=com.lab126.cmd; member=connectionAvailable
   string "wifi"
   string "internet"
~~~

Hasharray properties don't show anything useful; their only data is a pointer:
~~~plaintext
method call sender=:1.8 -> dest=com.lab126.readingstreams serial=1029 path=/default; interface=com.lab126.readingstreams; member=setshowContextHas
   uint32 0
   uint32 1478258684
   string "com.lab126.appmgrd"
~~~
