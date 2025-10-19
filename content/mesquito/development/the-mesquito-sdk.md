---
layout: default
grand_parent: Mesquito
parent: Developing For Mesquito
title: The Mesquito SDK
nav_order: 3
---

# Mesquito SDK
All apps that use `waf: true` **MUST** have the following lines in their `head`:
~~~html
<script src="file:///mnt/us/mesquito/polyfill.min.js"></script>
<script src="file:///mnt/us/mesquito/sdk.js"></script>
~~~

The `polyfill.min.js` allows you to use somewhat modern web features in your app. Whilst the `sdk.js` allows you to utilise Mesquito's SDK and access special Kindle JS functions.
It is also important to set a `title` for your app in HTML so that it appears in the title bar.

{: .info}
> If your app `does not` use Mesquito-specific features, it is recommented you instead use KWebBrew's files so that the app can function on both Mesquito and KWebBrew (as Mesquito is backwards-compatible with KWebBrew apps)
>
> Simply add the following to your `head` instead:
> ~~~html
> <script src="file:///mnt/us/kwebbrew/polyfill.min.js"></script>
> <script src="file:///mnt/us/kwebbrew/sdk.js"></script>
> ~~~

## SDK Functionality
The Mesquito SDK exposes the `kindle` object so that it can be invoked directly in scripts as so:
~~~js
kindle.appmgr.start("com.lab126.booklet.home"); // "launches" the home app (just goes home)
~~~

Additionally, the Mesquito SDK exposes some useful functions:
### fetchFile
~~~js
fetchFile(url, timeout=2000, fixKindleFormatting=true)
~~~
This function returns the contents of a file as a string given a `url`, such as `file:///mnt/us/apps/com.bluebotlaboratories.kchess/manifest.json`.
It should, in theory, work an all text-based filetypes, but will **NOT** work on binary formats.

| Parameter           | Default Value | Description                                                                                    |
|---------------------|---------------|------------------------------------------------------------------------------------------------|
| url                 |               | The URL of the file to obtain                                                                  |
| timeout             | 2000          | The amount of time to wait until deleting the iframe from DOM                                  |
| fixKindleFormatting | true          | Needed for local files, whether to fix the formatting the Kindle applies to local files or not |


### getDirectory
~~~js
getDirectory(location)
~~~
This function is similar to `fetchFile` and works in almost the same way. Except it fetches the contents of a directory as an object. The `location` parameter, despite its name, is just a `url`, ie: `file:///mnt/us/` (despite being a `url`, it will only work with `local folders`)

Example Output:
~~~json
[
    {
        "name": "documents",
        "path": "file:///mnt/us/documents/"
    },
    {
        "name": "apps",
        "path": "file:///mnt/us/apps/"
    },
    {
        "name": "mesquito",
        "path": "file:///mnt/us/mesquito/"
    },
    {
        "name": "log.txt",
        "path": "file:///mnt/us/log.txt"
    }
]
~~~

| Parameter | Default Value | Description                   |
|-----------|---------------|-------------------------------|
| location  |               | The URL of the folder to list |


### getQueryData
~~~js
getQueryData()
~~~

Taking no arguments, it returns an object representing the GET parameters of the current location.
IE, the location:
~~~
file:///mnt/us/mesquito/index.html?entrypoint=hello&launch=false
~~~

would return:
~~~json
{
    "entrypoint": "hello",
    "launch": "false"
}
~~~

### joinPaths
~~~js
joinPaths(path1, path2)
~~~

Given two paths, joins them together.

IE: Given `/test/` and `./hello`
~~~
/test/hello
~~~

| Parameter | Default Value | Description             |
|-----------|---------------|-------------------------|
| path1     |               | The first path to join  |
| path2     |               | The second path to join |


## window.mesquito
The `window.mesquito` object holds useful helper functions to the `kindle` API

### window.mesquito.updateNavigation
~~~js
window.mesquito.updateNavigation()
~~~

This reloads the navbar, updating its contents, useful when updating the available `menuItems`

### window.mesquito.menuItems
~~~js
window.mesquito.menuItems = [
    {
        id: "CHESS_RELOAD",
        state: "enabled",
        label: "Reload Game"
    },
    {
        id: "DIVIDE_ZERO",
        state: "enabled",
        label: "Divide By Zero"
    }
]
~~~

This serves as an object which allows your app to add custom menu items to the Kindle's menu (under the `three dots`).

{: .info}
As mentioned earlier, `window.mesquito.updateNavigation()` must be called to update the actual state of the navbar.


### window.mesquito.onKindleButton
~~~js
window.mesquito.onKindleButton = function(buttonType, buttonID) {
    console.log(buttonType);
    console.log(buttonID);
}
~~~

This is a function which can be overriden by your app to handle menu item button presses. the `buttonID` parameter will be equal to whatever `id` you set the button to, ie: `DIVIDE_ZERO` or `CHESS_RELOAD`. The `buttonType` parameter is used to differenciate between menu buttons (`systemMenuItemSelected`) and navbar buttons (TBA) and can be ignored.