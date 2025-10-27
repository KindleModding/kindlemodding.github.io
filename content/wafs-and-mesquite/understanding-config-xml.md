---
layout: default
parent: WAFs & Mesquite
title: Understanding config.xml
weight: 1
---

# Understanding config.xml
The `config.xml` file stores everything a Kindle needs to know about a WAF, this page goes over the format and specification of such a file.

Here is the Kindle store's XML file for convenience:
~~~xml
<?xml version="1.0"?>
<widget id="com.lab126.store" version="1.0" viewmodes="application" xmlns="http://www.w3.org/ns/widgets"
    xmlns:kindle="http://kindle.amazon.com/ns/widget-extensions">
    <name xml:lang="en">Kindle Store</name>
    <description xml:lang="en">Amazon Kindle Store</description>

    <name xml:lang="de">Kindle-Shop</name>
    <description xml:lang="de">Amazon Kindle-Shop</description>

    <name xml:lang="fr">Boutique Kindle</name>
    <description xml:lang="fr">Amazon Boutique Kindle</description>

    <name xml:lang="it">Kindle Store</name>
    <description xml:lang="it">Amazon Kindle Store</description>

    <name xml:lang="en-GB">Kindle Store</name>
    <description xml:lang="en-GB">Amazon Kindle Store</description>

    <name xml:lang="pt">Loja Kindle</name>
    <description xml:lang="pt">Amazon Loja Kindle</description>

    <name xml:lang="es">Tienda Kindle</name>
    <description xml:lang="es">Amazon Tienda Kindle</description>

    <name xml:lang="ja">Kindle&#12473;&#12488;&#12450;</name>
    <description xml:lang="ja">Amazon Kindle&#12473;&#12488;&#12450;</description>

    <name xml:lang="zh">Kindle&#32593;&#24215;</name>
    <description xml:lang="zh">Amazon Kindle&#32593;&#24215;</description>

    <content src="index.html" />

    <!-- App Configuration -->
    <!-- Reqeust for localhost access permission -->
    <kindle:permissions>
        <kindle:permission name="local-port-access" />
    </kindle:permissions>

    <!-- request for HTTP headers -->
    <kindle:network>
        <kindle:asset key="user-agent" value="kindle://device-type" />
        <kindle:asset key="user-agent" value="kindle://sw-version" />
        <kindle:asset key="user-agent" value="kindle://pretty-sw-version" />
        <kindle:asset key="http-header" value="kindle://transport-method" />
        <kindle:asset key="http-header" value="kindle://country-code" />
        <kindle:asset key="initialDNS" value="false" />
        <kindle:asset key="maxConnections" value="6" />
        <kindle:asset key="maxConnectionsPerHost" value="2" />
        <kindle:asset key="maxConnectionsPerProxy" value="6" />
        <kindle:asset key="overrideProxy" value="none" />
        <kindle:asset key="enableCaching" value="false" />
        <!-- Example of how to override the 3G proxy settings -->
        <!-- <kindle:asset key="overrideProxy" value="http://kindle-proxy-preprod.amazon.com" /> -->
    </kindle:network>

    <!-- request for persistent cookie jar with x-main & x-fsn pre loaded -->
    <kindle:cookiejar>
        <kindle:asset key="persistent" value="true" />
        <kindle:asset key="usePrivateCookies" value="false" />
        <kindle:asset key="useDeviceCookies" value="true" />
        <kindle:asset key="useAccessToken" value="true" />
    </kindle:cookiejar>

    <!-- request for persistent chrome -->
    <kindle:chrome>
        <kindle:asset key="configureSearchBar" value="system" />
    </kindle:chrome>

    <kindle:gestures>
        <kindle:param name="tap" value="yes" properties="fire_on_tap:1 max_updown_delta:0" />
        <kindle:param name="swipe" value="yes" />
    </kindle:gestures>

    <!-- features are used to control the JS API that will be available to a waf application. -->
    <feature name="http://kindle.amazon.com/apis" required="true">
        <param name="appmgr" value="yes" />
        <param name="net" value="yes" />
        <param name="todo" value="yes" />
        <param name="gestures" value="yes" />
        <param name="chrome" value="yes" />
        <param name="dev" value="yes" />
        <param name="dconfig" value="yes" />
        <param name="download" value="yes" />
        <param name="messaging" value="yes" />
        <param name="uitest" value="yes" />
        <param name="popup" value="yes" />
        <param name="bkgrnd" value="yes" />
        <param name="localprefs" value="yes" />
        <param name="device" value="yes" />
        <param name="winmgrUtils" value="yes" />
        <param name="bluetooth" value="yes" />
    </feature>

    <kindle:messaging>
        <kindle:app name="com.lab126.pillow" value="yes" />
        <kindle:app name="com.lab126.chromebar" value="yes" />
        <kindle:app name="com.lab126.readnow" value="yes" />
    </kindle:messaging>

    <kindle:resources>
        <kindle:asset key="jquery" value="js/jquery.js" />
        <kindle:asset key="sprite_v1" value="js/sprite_v1.js" />
        <kindle:asset key="AllowHTTPSApplicationManifestCrossDomain" value="true" />
        <kindle:asset key="ApplicationCachePath" value="/var/local/mesquite/store/resource/appcache" />
        <kindle:asset key="ApplicationCacheLoadDelay" value="6.0" />
        <kindle:asset key="LocalStorageQuota" value="26214400" />
        <!-- Other available settings are
        LocalStorageQuota ( set the max size of the local storage DB)
        ocalStoragePath ( sets where the local storage DB is saved )
        DatabaseStorageQuota ( set the html5 sqlite db quota)
        DatabaseStoragePath ( set where the html5 sqlite db is stored)
        ApplicationCacheQuota ( sets a max size of the application cache) -->
    </kindle:resources>

    <kindle:settings>
        <kindle:setting name="internetRequired" value="yes" />
        <!-- application is saving context on pause so platform shouldn't -->
        <kindle:setting name="saveContext" value="no" />
        <kindle:setting name="disable-wua-features" value="yes" />
    </kindle:settings>

</widget>
~~~

Yes, it's quite complex, let's break it down:

## The header
~~~xml
<?xml version="1.0"?>
<widget id="com.lab126.store" version="1.0" viewmodes="application" xmlns="http://www.w3.org/ns/widgets"
    xmlns:kindle="http://kindle.amazon.com/ns/widget-extensions">
~~~
This section is quite simple, it tells the Kindle the `id` of the WAF (`com.lab126.store`) and the `viewmode` of the WAF (currently unknown other than `application`)

The `id`, like Mesquito IDs, can be any unique "Java-like namespace".


## Name/Description
~~~xml
<name xml:lang="en">Kindle Store</name>
<description xml:lang="en">Amazon Kindle Store</description>

<name xml:lang="de">Kindle-Shop</name>
<description xml:lang="de">Amazon Kindle-Shop</description>

<name xml:lang="ja">Kindle&#12473;&#12488;&#12450;</name>
<description xml:lang="ja">Amazon Kindle&#12473;&#12488;&#12450;</description>
...
~~~

This section serves to show the name and description of the WAF on the Kindle's UI... *somewhere*
It supports an `xml:lang` attribute which allows for localisation. It also allows for the use of `unicode` characters, as shown


## The "Payload"
~~~xml
<content src="index.html" />
~~~

This is a single tag which tells the Kindle which file to load when the WAF is loaded. In this case, it'll be the store's `index.html` file


## Permissions
~~~xml
<!-- App Configuration -->
<!-- Reqeust for localhost access permission -->
<kindle:permissions>
    <kindle:permission name="local-port-access" />
</kindle:permissions>
~~~

> [!INFO]
> Yes, that spelling mistake is indeed in the firmware

This tag serves to request certain special permissions from the Kindle, below is a list of all known permissions:

| Permission Name   | Description                                                                        |
|-------------------|------------------------------------------------------------------------------------|
| local-port-access | Allows the WAF to access `localhost` (mainly just the DB interface on port `9101`) |
| download-allowed  | Allows the WAF to download files to the Kindle's `documents` folder                |


## Network
~~~xml
<!-- request for HTTP headers -->
<kindle:network>
    <kindle:asset key="user-agent" value="kindle://device-type" />
    <kindle:asset key="user-agent" value="kindle://sw-version" />
    <kindle:asset key="user-agent" value="kindle://pretty-sw-version" />
    <kindle:asset key="http-header" value="kindle://transport-method" />
    <kindle:asset key="http-header" value="kindle://country-code" />
    <kindle:asset key="initialDNS" value="false" />
    <kindle:asset key="maxConnections" value="6" />
    <kindle:asset key="maxConnectionsPerHost" value="2" />
    <kindle:asset key="maxConnectionsPerProxy" value="6" />
    <kindle:asset key="overrideProxy" value="none" />
    <kindle:asset key="enableCaching" value="false" />
    <!-- Example of how to override the 3G proxy settings -->
    <!-- <kindle:asset key="overrideProxy" value="http://kindle-proxy-preprod.amazon.com" /> -->
</kindle:network>
~~~

Other example from `audibleupsell` WAF:
~~~xml
<!-- App Configuration -->
<!-- request for HTTP headers -->
<kindle:network>
    <kindle:asset key="user-agent" value="kindle://device-type" />
    <kindle:asset key="user-agent" value="kindle://sw-version" />
    <kindle:asset key="http-header" value="kindle://transport-method"/>
    <kindle:asset key="http-header" value="kindle://country-code"/>
    <kindle:asset key="enableCaching" value="false" />
    <kindle:errorPage src="../shared/audibleupsell_error.html" />
</kindle:network>
~~~

Other example from `browser` WAF:
~~~xml
<kindle:network>                                                     
    <kindle:asset key="user-agent" value="Mozilla/5.0 (X11; U; Linux armv7l like Android; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/533.2+ Kindle/3.0+" />
    <kindle:asset key="enableWrsProxy" value="true" />        
    <kindle:asset key="allowTlsFallback" value="true" />
</kindle:network>
~~~

This section appears to handle Kindle networking, allowing you to set proxy overrides for a specific WAF, network headers, as well as setting an `errorPage` for when loads fail.

> [!INFO]
> `enableCaching` does not appear to handle the actual caching of the WAF itself


## Cookiejar
~~~xml
<!-- request for persistent cookie jar with x-main & x-fsn pre loaded -->
<kindle:cookiejar>
    <kindle:asset key="persistent" value="true" />
    <kindle:asset key="usePrivateCookies" value="false" />
    <kindle:asset key="useDeviceCookies" value="true" />
    <kindle:asset key="useAccessToken" value="true" />
</kindle:cookiejar>
~~~


## Chrome
~~~xml
<!-- request for persistent chrome -->
<kindle:chrome>
    <kindle:asset key="configureSearchBar" value="system" />
</kindle:chrome>
~~~
It is currently unclear what this does exactly, known values for `configureSearchBar` are `"system"` and `"none"`


## Gestures
~~~xml
<kindle:gestures>
    <kindle:param name="tap" value="yes" properties="fire_on_tap:1 max_updown_delta:0" />
    <kindle:param name="swipe" value="yes" />
</kindle:gestures>
~~~

Other example from `browser` WAF:
~~~xml
<kindle:gestures>
    <kindle:param name="drag" value="yes"/>
    <kindle:param name="pinchzoom" value="yes" properties="fire-on-zoom:1"/>
    <kindle:param name="tap" value="yes"/>
    <kindle:param name="multi_tap" value="yes"/>
    <kindle:param name="hold" value="yes"/>
</kindle:gestures>
~~~

Seems to be related to the `gesture` API of the `kindle` object (See [The Kindle Object](./the-kindle-object.html))


## Features
~~~xml
<feature name="http://kindle.amazon.com/apis" required="true">
    <param name="appmgr" value="yes" />
    <param name="net" value="yes" />
    <param name="todo" value="yes" />
    <param name="gestures" value="yes" />
    <param name="chrome" value="yes" />
    <param name="dev" value="yes" />
    <param name="dconfig" value="yes" />
    <param name="download" value="yes" />
    <param name="messaging" value="yes" />
    <param name="uitest" value="yes" />
    <param name="popup" value="yes" />
    <param name="bkgrnd" value="yes" />
    <param name="localprefs" value="yes" />
    <param name="device" value="yes" />
    <param name="winmgrUtils" value="yes" />
    <param name="bluetooth" value="yes" />
</feature>
~~~

Enables/Disables specific APIs available to the `kindle` object


## Messaging
~~~xml
<kindle:messaging>
    <kindle:app name="com.lab126.pillow" value="yes" />
    <kindle:app name="com.lab126.chromebar" value="yes" />
    <kindle:app name="com.lab126.readnow" value="yes" />
</kindle:messaging>
~~~

Acts as a whitelist to which `lipc` services can be called by `kindle.messaging`


## Resources
~~~xml
<kindle:resources>
    <kindle:asset key="jquery" value="js/jquery.js" />
    <kindle:asset key="sprite_v1" value="js/sprite_v1.js" />
    <kindle:asset key="AllowHTTPSApplicationManifestCrossDomain" value="true" />
    <kindle:asset key="ApplicationCachePath" value="/var/local/mesquite/store/resource/appcache" />
    <kindle:asset key="ApplicationCacheLoadDelay" value="6.0" />
    <kindle:asset key="LocalStorageQuota" value="26214400" />
    <!-- Other available settings are
    LocalStorageQuota ( set the max size of the local storage DB)
    ocalStoragePath ( sets where the local storage DB is saved )
    DatabaseStorageQuota ( set the html5 sqlite db quota)
    DatabaseStoragePath ( set where the html5 sqlite db is stored)
    ApplicationCacheQuota ( sets a max size of the application cache) -->
</kindle:resources>
~~~

This seems to handle the caching of WAFs as well as quotas for `localStorage`


## Settings
~~~xml
<kindle:settings>
    <kindle:setting name="internetRequired" value="yes" />
    <!-- application is saving context on pause so platform shouldn't -->
    <kindle:setting name="saveContext" value="no" />
    <kindle:setting name="disable-wua-features" value="yes" />
</kindle:settings>
~~~

Other example from `browser` WAF:
~~~xml
<kindle:settings>   
    <kindle:setting name="defaultFontSize" value="6"/>
    <kindle:setting name="defaultFontSize300" value="6"/>
    <kindle:setting name="defaultFontSize212" value="9"/>
    <kindle:setting name="defaultFontSize167" value="9"/>
    <kindle:setting name="zoomFactor" value="8.0"/>
    <kindle:setting name="minimumFontSize" value="0"/>
    <kindle:setting name="flattenFrames" value="yes"/> 
    <kindle:setting name="debug" value="no"/>
</kindle:settings>
~~~

Other example from `payment` WAF:
~~~xml
<kindle:settings>
    <kindle:setting name="internetRequired" value="yes"/>
    <kindle:setting name="saveContext" value="no" />
    <kindle:setting name="minimumFontSize" value="0"/>
    <kindle:setting name="enforce96DPI" value="yes"/>
    <kindle:setting name="zoomFactor" value="8.0"/>
    <kindle:setting name="flattenFrames" value="yes"/>
    <kindle:setting name="enableW3CStd" value="yes" />
</kindle:settings>
~~~

This handles certain settings for the WAF