---
layout: default
grand_parent: WAFs & Mesquite
parent: The Kindle Object
title: kindle.device
---

# kindle.device
Functions which can adjust specific device properties
It also contains certain properties:

| Name                  | Value                         | Description                                                                                                          |
|-----------------------|-------------------------------|----------------------------------------------------------------------------------------------------------------------|
| contactInfo           | `'Your System Administrator'` | _he who controls the sudo reports_                                                                                   |
| eid                   | `BASE64 ENCODED DATA`         | A piece base64 encoded data, unknown what purpose it serves                                                          |
| getRegistrationState  | `'registered'`                | Whether or not the Kindle is registered                                                                              |
| hasScreenLight        | `true`                        | Whether or not the Kindle has a screen light                                                                         |
| hasKindleStoreAccess  | `true`                        | Whether or not... the Kindle can... access the Kindle store? Seems to be used for parental controls?                 |
| isWirelessMenuEnabled | `true`                        | Whether the user has the wireless menu enabled or not                                                                |
| controlStatus         | `0`                           | Whether the state is Parental/Device/No control - `1` if `Device Control`, `2` if `Parental` and `3` if `No Control` |


## kindle.device.setSensitivity
~~~js
kindle.device.setSensitivity(automatic, threshold)
~~~
Sets the "sensitivity" of the eInk display according to a `threshold`. A `threshold` of `100` will cause the Kindle to refresh significantly more than a `threshold` of `0`

Parameters:

| Name      | Type    | Description                                                                                |
|-----------|---------|--------------------------------------------------------------------------------------------|
| automatic | Boolean | Whether or not to automatically refresh like normal. If `true`, do not provide `threshold` |
| threshold | Integer | A number from 0-100 describing how often the eInk panel of the Kindle will "refresh"       |


## kindle.device.setOrientation
~~~js
kindle.device.setOrientation(orientation)
~~~
Sets the screen orientation of the device according to the provided orientation string. An invalid orientation will result in nothing happening. A list of valid strings can be found [here](./enums#orientations)


## kindle.device.getDPI
~~~js
kindle.device.getDPI()
~~~
Returns the `DPI` of the device


## kindle.device.hasWirelessMenu
~~~js
kindle.device.hasWirelessMenu()
~~~
Returns a boolean describing whether or not the device has a... wireless menu?


## kindle.device.log
~~~js
kindle.device.log(logServiceName, logString, logLevel)
~~~
Adds something to the Kindle's log.

Parameters:

| Name     | Type   | Description                                                              |
|----------|--------|--------------------------------------------------------------------------|
| logEvent | String | The name of the "event" which is producing the log, ie: `wafjs`          |
| logMsg   | String | The data to be logged                                                    |
| logLevel | String | The log leve, valid values are: `info`, `warn`, `error`, `debug`, `perf` |

{: .highlight}
Heads Up: Kindle logs **ARE** sent to Amazon, so be careful


## kindle.device.getLab126SessionToken
~~~js
kindle.device.getLab126SessionToken()
~~~
Returns the correct session token needed to access the internal DB API `TBA`


## kindle.device.loadResource
~~~js
kindle.device.loadResource(frameId, resourceId)
~~~
(taken from `/opt/var/local/mesquite/shared/javascripts/userAgent.js`)

Loads a local javascript file into any frame within the web application.
It is used to override the xss security. The file that is loaded must be specified in the config.xml file of the application.

Parameters:

| Name       | Type   | Description                                                                                                                                    |
|------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------|
| frameId    | String | The DOM id of the frame in which the file will be loaded. The top level frame of the application can be specified via `_self`                  |
| resourceId | String | The identifier of the JS File as specified in the application's `config.xml` file, it must also reference a valid file on the local filesystem |


## kindle.device.addDomainToWhitelist
~~~js
kindle.device.addDomainToWhitelist(uri, addSubDomains)
~~~
Adds a URI to the allowed domain list. It's function is somewhat unknown...

Parameters:

| Name          | Type   | Description                                                                                                                      |
|---------------|--------|----------------------------------------------------------------------------------------------------------------------------------|
| uri           | String | The `uri` to add to the whitelist, ie: `http://amazon.com`                                                                       |
| addSubDomains | String | A string, either `'true'` or `'false'` dictating whether or not subdomains of the specified `uri` should be whitelisted as well. |


## kindle.device.clearCookies
~~~js
kindle.device.clearCookies()
~~~
Clears the application's cookie jar

{: .warning}
Using this function on Mesquito will clear **ALL** cookies accross **ALL** Mesquito apps and get your app **PERMANENTLY BLACKLISTED** by Mesquito. `You have been warned.`


## kindle.device.clearApplicationCache
~~~js
kindle.device.clearApplicationCache()
~~~
Clears the application's HTML cache

{: .warning}
Using this function on Mesquito has the chance of breaking `Mesquito` and will get your app **PERMANENTLY BLACKLISTED** by Mesquito. `You have been warned.`


## kindle.device.clearCache
~~~js
kindle.device.clearCache()
~~~
Clears any resources cached by the application in memory

{: .highlight}
Using this with a `Mesquito` app can cause bugs and be generally annoying, avoid its use when possible for `Mesquito` apps