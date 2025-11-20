---
layout: default
parent: The Kindle Object
title: kindle.net
---

# kindle.net
Handles network functionality

Has the following properties:

| Name                    | Value                                  | Description                                                          |
|-------------------------|----------------------------------------|----------------------------------------------------------------------|
| backgroundRequestHeader | `'WAF-HTTP-REQUEST-BACKGROUND-HEADER'` | Unknown, possibly a header used to show background network requests? |
| roaming                 | `false`                                | Determine if a 3G Kindle is roaming                                  |
| rffSessionId            | `''`                                   | Unknown                                                              |



## kindle.net.getWirelessState
~~~js
kindle.net.getWirelessState()
~~~

Gets the wireless state of the Kindle, returns a string, either `'on'` or `'off'`


## kindle.net.getActiveInterface
~~~js
kindle.net.getActiveInterface()
~~~

Gets the currently active interface of the Kindle, returns a string of the [`connectionTypes`](./enums#connectiontypes) enum


## kindle.net.setWirelessPrompt
~~~js
kindle.net.setWirelessPrompt(promptLevel)
~~~

Enables/Disables wireless prompting via the [`promptLevel`](./enums#connectionpromptlevels) parameter


## kindle.net.confirmSSLException
~~~js
kindle.net.confirmSSLException(confirm, callback)
~~~
Method for handling an invalid SSL certificate

Accepts/Cancels last invalid certificate exception received depending on argument `confirm` whether it is `'yes'` or `'no'`.

Callback method is optional, it is unknown if any parameters are passed to it.


## kindle.net.ensureWifiConnection
~~~js
kindle.net.ensureWifiConnection(promptLevel, callback)
~~~

Ensures a **WiFi** connection. Can be done with/without a prompt as set by the [`promptLevel`](./enums#connectionpromptlevels) parameter

The callback also gets an `response` parameter passed to it. It is a string which has the value of `'success'` when it is successful, see [`connectionResults`](#connectionresults) for possible values.


## kindle.net.ensureConnection
~~~js
kindle.net.ensureConnection(promptLevel, forceConnect, callback);
~~~

Ensures any sort of connection. Can be done with/without a prompt as set by the [`promptLevel`](./enums#connectionpromptlevels) parameter

Additional parameters:

| Parameter | Type     | Description                                                                                                                                                                                        |
|-----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| wifiOnly  | Boolean  | Whether the request is for a wifi only connection or not                                                                                                                                           |
| callback  | Function | The function called when the request returns, has a single parameter which is a string, see [`connectionResults`](./enums#connectionresults) for possible values. |


## kindle.net.registerHttpErrorListener
~~~js
kindle.net.registerHttpErrorListener(onHttpError)
~~~

Registers a callback for http errors.
The `onHttpError` function will receive the following arguments:

| Name            | Description                                                                                             |
|-----------------|---------------------------------------------------------------------------------------------------------|
| internalCode    | String describing the error                                                                             |
| uri             | The uri that was accessed                                                                               |
| httpStatus      | Most likely the HTTP response's [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) |
| responseMessage | The HTTP response message                                                                               |

in the order: `onHttpError(internalCode, uri, httpStatus, responseMessage)`


## kindle.net.deregisterHttpErrorListener
~~~js
kindle.net.deregisterHttpErrorListener()
~~~

Takes no arguments, deregisters any registered http handlers