---
layout: default
grand_parent: WAFs & Mesquite
parent: The Kindle Object
title: Enums
nav_order: 1
---

# Enums
Many of the Kindle Object API calls rely on or return certain strings. The meaning of these strings is detailed in this page.


## connectionPromptLevels

| Value     | Description                                                                        |
|-----------|------------------------------------------------------------------------------------|
| all       | Turn on all user prompting. Everything needed to make a connection will be used.   |
| never     | Turn off all user prompting. A connection will be made _automatically_ if possible |
| nocaptive | Turn on user prompting for everything but a captive portal situation               |


## connectionResults

| Value                  | Description                                                |
|------------------------|------------------------------------------------------------|
| success                | The connection attempt succeeded                           |
| failure-user-canceled  | The user canceled the connection request                   |
| failure                | There was a failure when connecting                        |
| failure-captive-portal | There was a captive-portal related failure when connecting |


## scrollBarStates

| Value   | Description                       |
|---------|-----------------------------------|
| auto    | Automatically hide/show scrollbar |
| hidden  | Hide the scrollbar                |
| visible | Show the scrollbar                |


## fileDownloadResults

| Value    | Description                                |
|----------|--------------------------------------------|
| success  | Succeeded in downloadin the file           |
| error    | There was an error downloading the file    |
| canceled | The file download was canceled by the user |
| rejected | The file type is not downloadable          |


## eInkRefreshModes

| Value   | Description                                                         |
|---------|---------------------------------------------------------------------|
| auto    | Automatically set the refresh mode                                  |
| minimal | Do not refresh the display often                                    |
| maximal | Refresh the display often                                           |
| manual  | Do not refresh the display at all unless directly called by JS/Code |


## connectionTypes

| Value | Description                                                      |
|-------|------------------------------------------------------------------|
| wifi  | Kindle is connected via WiFi                                     |
| wan   | Kindle is connected via 3g                                       |
| none  | No interfaces are currently active on the Kindle (airplane mode) |


## orientations

| Value          | Description                                 |
|----------------|---------------------------------------------|
| auto           | Set orientation automatically               |
| portrait       | Set **portrait** orientation automatically  |
| portraitUp     | Portrait orientation                        |
| portraitDown   | Portrait orientation (upside down)          |
| landscape      | Set **landscape** orientation automatically |
| landscapeLeft  | Landscape orientation (clockwise)           |
| landscapeRight | Landscape orientation (anticlockwise)       |


## direction

| Value | Description |
|-------|-------------|
| up    | Up          |
| down  | Down        |
| left  | Left        |
| right | Right       |


## alignment

| Value  | Description |
|--------|-------------|
| top    | Top         |
| buttom | Bottom      |
| center | Center      |
| left   | Left        |
| right  | Right       |


## pillow.buttons

| Value     | Description                  |
|-----------|------------------------------|
| back      | Back button                  |
| store     | Store button                 |
| home      | Home button                  |
| forward   | Forward button               |
| menu      | Menu button                  |
| refresh   | Browser refresh button       |
| cancel    | Cancel button                |
| discovery | Discovery button             |
| KPP_BACK  | Decanter Chrome back button  |
| KPP_CLOSE | Decanter Chrome close button |


## pillow.buttonStates

| Value    | Description                                                             |
|----------|-------------------------------------------------------------------------|
| enabled  | Button is enabled                                                       |
| disabled | Button is disabled                                                      |
| false    | Button is hidden (this one is a boolean, not a string like the others)  |


## pillow.buttonHandling

| Value     | Description                            |
|-----------|----------------------------------------|
| system    | Button is handled by the Kindle itself |
| notifyapp | Button is handled by the WAF           |


## pillow.contextMenuIDs

| Value                   | Description |
|-------------------------|-------------|
| browserSettings         | ???         |
| browserBookmarks        | ???         |
| browserBookmarkPage     | ???         |
| browserHistory          | ???         |
| browserArticleOrWebMode | ???         |


## pillow.contextMenuStates

| Value    | Description        |
|----------|--------------------|
| enabled  | Menu item enabled  |
| disabled | Menu item disabled |