---
layout: default
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
kindle.device.setSensitivity(useThreshold, threshold)
~~~
Sets the "sensitivity" of the eInk display according to a `threshold`. A `threshold` of `100` will cause the Kindle to refresh significantly more than a `threshold` of `0`

Parameters:

| Name         | Type    | Description                                                                                                |
|--------------|---------|------------------------------------------------------------------------------------------------------------|
| useThreshold | Boolean | Whether threshold should be used or whether to refresh like normal. If `false`, do not provide `threshold` |
| threshold    | Integer | A number from 0-100 describing how often the eInk panel of the Kindle will "refresh"                       |


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

<blockquote class="info">
Heads Up: Kindle logs **ARE** sent to Amazon, so be careful
</blockquote>


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

<blockquote class="warning">
Using this function on Mesquito will clear **ALL** cookies accross **ALL** Mesquito apps and get your app **PERMANENTLY BLACKLISTED** by Mesquito. `You have been warned.`
</blockquote>


## kindle.device.clearApplicationCache
~~~js
kindle.device.clearApplicationCache()
~~~
Clears the application's HTML cache

<blockquote class="warning">
Using this function on Mesquito has the chance of breaking `Mesquito` and will get your app **PERMANENTLY BLACKLISTED** by Mesquito. `You have been warned.`
</blockquote>


## kindle.device.clearCache
~~~js
kindle.device.clearCache()
~~~
Clears any resources cached by the application in memory

<blockquote class="info">
Using this with a `Mesquito` app can cause bugs and be generally annoying, avoid its use when possible for `Mesquito` apps
</blockquote>


## kindle.device.getMPDomain
~~~js
kindle.device.getMPDomain()
~~~
Gets the marketplace domain.

<blockquote class="info">
Fun fact, the firmware reffers to `".amazon.cn"` as the `CHINESE_OBFUSCATED_MARKETPLACE` when returned by this function
</blockquote>


## kindle.device.getBaiduSearchURL
~~~js
kindle.device.getBaiduSearchURL()
~~~
Returns the Baidu Search URL I would assume... Returns the following string (at the time of writing):
~~~
https://www.baidu.com/s?tn=baiduhome_pg&ie=utf-8&rn=4&wd=
~~~

Example usage of format in firmware:
~~~js
var dynUrlBaiduSearch = kindle.device.getBaiduSearchURL();
websiteUrl = dynUrlBaiduSearch ? dynUrlBaiduSearch + encodeURIComponent(args.label) : b.strings.goActions[args.domain].url + encodeURIComponent(args.label);
~~~

## kindle.device.disableSecureApis
~~~js
kindle.device.disableSecureApis()
~~~
Related to `payment` WAF, seems to disable "secure APIs" on non-Amazon URLs


## kindle.device.isInDemoMode
~~~js
kindle.device.isInDemoMode()
~~~
Returns a Boolean which is `true` if the device is in Demo mode.


## kindle.device.getSoftwareVersionNumber
~~~js
kindle.device.getSoftwareVersionNumber()
~~~
Returns an int representing the firmware's version number.
IE: `5.15.1.1` is `3924990005`


## kindle.device.getSoftwareVersionString
~~~js
kindle.device.getSoftwareVersionString()
~~~
Returns the string representing the firmware's version number.
IE: `"1.15.1.1"`


## kindle.device.getASRMode
~~~js
kindle.device.getASRMode()
~~~
Returns a number. What it represents is currently unknown.
Returns `0` on the Kindle it was tested on.


## kindle.device.getCSSPixelsPerInch
~~~js
kindle.device.getCSSPixelsPerInch()
~~~
Returns the number of CSS Pixels per Inch, presumably.


## kindle.device.getBaiduSearchURL
~~~js
kindle.device.getBaiduSearchURL()
~~~
Returns the Baidu Search URL I would assume... Returns the following string (at the time of writing):
~~~
https://www.baidu.com/s?tn=baiduhome_pg&ie=utf-8&rn=4&wd=
~~~

Example usage of format in firmware:
~~~js
var dynUrlBaiduSearch = kindle.device.getBaiduSearchURL();
websiteUrl = dynUrlBaiduSearch ? dynUrlBaiduSearch + encodeURIComponent(args.label) : b.strings.goActions[args.domain].url + encodeURIComponent(args.label);
~~~