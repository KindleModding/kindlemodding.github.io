---
layout: default
parent: Developing For Mesquito
title: Getting Started
weight: 1
---

# Getting Started
This guide will show you how to setup the correct structure for a Mesquito app.

## Introduction
Every Mesquito app needs an `identifier`. This is basically the same as say, a Java namespace, and follows the following format:
~~~
<type>.<author>.<appname>
~~~

for example:
~~~
com.bluebotlaboratories.kchess
dev.tesseractcat.sudoku
~~~

This identifier is important as it must be unique to all other apps, hence why the format is as it is. Additionally, identifiers must be lowercase and contain **NO** symbols.

## Creating the folder
You will need to create an empty folder in the `apps` folder of your Kindle with the same name as your identifier.

Generally speaking, there are 3 main files of importance to be placed in that folder, a [manifest](./the-manifest-file.html), a payload and an [app icon](./the-manifest-file.html)

For example, the directory structure for `kchess` is as follows:
~~~
com.bluebotlaboratories.kchess
│   icon.jpg
│   index.html
│   main.css
│   main.js
│   manifest.json
│
└───pieces
        bB.svg
        bK.svg
        bN.svg
        bP.svg
        bQ.svg
        bR.svg
        wB.svg
        wK.svg
        wN.svg
        wP.svg
        wQ.svg
        wR.svg
~~~
You can see the `manifest.json` file, the `index.html` payload and the `icon.jpg` icon. There are also additional files which are used by the app as assets and dependencies.

## Finding an icon
The app icon can be almost any image format, however, a resolution of `512x512` is recommended as Mesquito is optimized for `square` icons.

[The Manifest File](./the-manifest-file.html){: .button }