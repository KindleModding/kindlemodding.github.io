---
layout: default
grand_parent: WAFs & Mesquite
parent: The Kindle Object
title: kindle.gestures
---

# kindle.gestures
A set of overridable functions which are called when the user performs a gesture, configured [here](../understanding-config-xml.html#gestures) in the `config.xml` file.

<p class="warning">This section of the documentation is UNFINISHED.</p>

<p class="warning">Only `onswipe` and `ontap` work with `Mesquito` due to the store's [`config.xml`](../understanding-config-xml) file</p>

## kindle.gestures.onswipe
~~~js
kindle.gestures.onswipe(direction, pageX, pageY)
~~~
Triggered whenever the user swipes on the Kindle screen, has 3 parameters, including single string parameter which is the [swipe direction](./enums#direction), and `pageX` and `pageY` parameters indicating the location of the swipe on the page.


## kindle.gestures.onflick
~~~js
kindle.gestures.onflick(direction)
~~~
Triggered whenever the user flicks on the Kindle screen, only has a single string parameter which is the [flick direction](./enums#direction)


## kindle.gestures.onpan
~~~js
kindle.gestures.onpan(event)
~~~
Triggered whenever the user pans? the kindle screen. It is unknown what the `event` parameter holds.


## kindle.gestures.onpinch
~~~js
kindle.gestures.onpinch(event)
~~~
Triggered whenever the user pinches the kindle screen. It is unknown what the `event` parameter holds.


## kindle.gestures.onhold
~~~js
kindle.gestures.onhold(event)
~~~
Triggered whenever the user holds down on the kindle screen. It is unknown what the `event` parameter represents.


## kindle.gestures.onzoom
~~~js
kindle.gestures.onzooms(event)
~~~
Triggered whenever the user performs the zoom gesture on the kindle screen. It is unknown what the `event` parameter holds.


## kindle.gestures.ontap
~~~js
kindle.gestures.ontap(event)
~~~
Triggered whenever the user taps the kindle screen. It is unknown what the `event` parameter holds.