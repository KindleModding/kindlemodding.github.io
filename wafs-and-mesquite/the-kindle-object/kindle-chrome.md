---
layout: default
grand_parent: WAFs & Mesquite
parent: The Kindle Object
title: kindle.chrome
---

# kindle.chrome
Functions specific to the titlebar and dialog interfaces.

Has the following parameters:

| Name                    | Value | Dscription                                                                                                                                                         |
|-------------------------|-------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| isDecanterChromeEnabled | true  | A `boolean` describing whether or not "`decanter chrome`" is enabled. Seemingly related to firmware version as new firmwares have whatever "`decanter chrome`" is. |

{: .warning}
This page is a `WIP` and should be considered `incomplete`


## kindle.chrome.setTitleBar
~~~js
kindle.chrome.setTitleBar(centerText, leftText)
~~~
Seemingly accepts 2 string arguments, purpose is unknown, possibly `deprecated` in modern Kindle firmware versions

{: .warning}
`DO NOT` use this in `Mesquite` applications, that is what the [`SDK`](../../mesquito/development/the-mesquito-sdk.html) is for


## kindle.chrome.createHeader
~~~js
kindle.chrome.createHeader(uri, height, tiled)
~~~
Seemingly accepts a string, integer and boolean parameter for `uri`, `height` and `tiled` respectively. Function is unknown.


## kindle.chrome.createDialog
~~~js
kindle.chrome.createDialog(uri, width, height, modal)
~~~
Creates a dialog visible on the Kindle. Exact usage is currently unknown.

| Name   | Type    | Dscription                                                             |
|--------|---------|------------------------------------------------------------------------|
| uri    | String  | The URI to the dialog to display, unknown if it can be to a local file |
| width  | Integer | The width of the dialog, in pixels                                     |
| height | Integer | The height of the dialog, in pixels                                    |
| modal  | Boolean | Exact usage unknown, usually seems to be set to `true`                 |


## kindle.chrome.setSpinnerState
~~~js
kindle.chrome.setSpinnerState(state, timeout, delay)
~~~
Used to indicate progress via a spinner in the title bar.

| Name    | Type    | Dscription                                                                                            |
|---------|---------|-------------------------------------------------------------------------------------------------------|
| state   | String  | Either `start` or `stop` to start or stop displaying the spinner respectively.                        |
| timeout | Integer | The maximum amount of time to show the spinner, units unknown, possible milliseconds? `todo: confirm` |
| delay   | Integer | The time to wait to start spinning `todo: confirm`                                                    |

{: .highlight}
`timeout` and `delay` are still needed even if `state` is `stop` as `JSObjectChrome::setSpinnerState expects three arguments` despite the fact that they are ignored when `state` is `stop`.

<br/>
<br/>
<br/>

{: .warning}
The following section refers to `content windows` these are not currently fully understood, continue with caution.


## kindle.chrome.createContentWindow
~~~js
kindle.chrome.createContentWindow(uri)
~~~
Exact usage unknown, it just... exists, returns some sort of `window` object/string


## kindle.chrome.setContentWinDisplay
~~~js
kindle.chrome.setContentWinDisplay(displayState)
~~~
Purpose somewhat unknown, seems to be related to `createContentWindow`. The `displayState` parameter is a string, either `foreground` or `background` to show/hide the content Window respectively


## kindle.chrome.setJavaScript
~~~js
kindle.chrome.setJavaScript(enabled)
~~~
Enables or Disables JS execution in a `contentWindow`. The `enabled` parameter is a string, either `enabled` or `disabled`


## kindle.chrome.setImageRendering
~~~js
kindle.chrome.setImageRendering(enabled)
~~~
Enables or Disables JS execution in a `contentWindow`. The `enabled` parameter is a string, either `on` or `off`


## kindle.chrome.onContentStart
~~~js
kindle.chrome.onContentStart()
~~~
An overridable function, similar to that of [`gestures`](./kindle-gestures.html) which is called on a "`content load start event`"


## kindle.chrome.onContentProgress
~~~js
kindle.chrome.onContentProgress(progress)
~~~
An overridable function, similar to that of [`gestures`](./kindle-gestures.html) which is called on a "`progress event`". The callback has a `progress` parameter, a decimal number from `0` to `1` indicating the amount of progress.


## kindle.chrome.onContentUrlChanged
~~~js
kindle.chrome.onContentUrlChanged(url)
~~~
An overridable function, similar to that of [`gestures`](./kindle-gestures.html) which is called on a "`content url changed event`". The callback has a `url` parameter, a string seemingly indicating the new URL the `contentWindow` has navigated to.

## kindle.chrome.onContentTitleChanged
~~~js
kindle.chrome.onContentTitleChanged(title)
~~~
An overridable function, similar to that of [`gestures`](./kindle-gestures.html) which is called on a "`content title changed event`". The callback has a `title` parameter, a string seemingly indicating the new title the `contentWindow` is now set to.

## kindle.chrome.registerWindowOpenEventListener
~~~js
kindle.chrome.registerWindowOpenEventListener(callback)
~~~
Unknown what it does. Callback is called with a `string` parameter known as `url`.