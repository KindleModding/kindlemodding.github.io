---
layout: default
grand_parent: WAFs & Mesquite
parent: The Kindle Object
title: kindle.messaging
---

# kindle.messaging
Kindle's use an internal system known as `ToDo` to handle communication with Amazon. This is used for downloading books, updating screensavers*, updating the store, telemetry, etc.

## kindle.messaging.sendMessage
~~~js
kindle.messaging.sendMessage(id, eventType, eventData)
~~~

Sends a message through the Kindle's internal LIPC messaging system, `message` which is an object

| Name        | Example Value                                                                                                         | Type   | Dscription                                              |
|-------------|-----------------------------------------------------------------------------------------------------------------------|--------|---------------------------------------------------------|
| id          | com.lab126.chromebar                                                                                                  | String | The ID used to determine the app to send the message to |
| eventType   | configureChrome                                                                                                       | String | The event to send                                       |
| eventData   | {     appId: 'com.lab126.store',     topNavBar: {         template: 'title',         title: "Mesquito Loader"     } } | Object | The data sent with the corresponding event              |

## kindle.messaging.sendStringMessage
~~~js
kindle.messaging.sendStringMessage(id, eventType, eventData)
~~~

Sends a message through the Kindle's internal LIPC messaging system, `message` is a `String`

| Name      | Example Value  | Type   | Dscription                                              |
|-----------|----------------|--------|---------------------------------------------------------|
| id        | com.lab126.mfa | String | The ID used to determine the app to send the message to |
| eventType | switchViewMode | String | The event to send                                       |
| eventData | fullscreen     | String | The data sent with the corresponding event              |

## kindle.messaging.recieveMessage
~~~js
kindle.messaging.recieveMessage(eventType, callback)
~~~
Registers a `callback` function for a specific `eventType` if a LIPC message is sent to the WAF.

The `callback` recieves a `property` and `json` (or `string`) argument, ie:
~~~js
callback(property, json)
~~~
The property value is a string of the `eventType` whilst the `json` value stores the data which is sent with an event.

{: .warning}
This page a `WIP`, a list of possible callbacks is being worked on at the moment