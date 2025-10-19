---
layout: default
grand_parent: WAFs & Mesquite
parent: The Kindle Object
title: kindle.todo
---

# kindle.todo
Kindle's use an internal system known as `ToDo` to handle communication with Amazon. This is used for downloading books, updating screensavers*, updating the store, telemetry, etc.

## kindle.todo.scheduleItems
~~~js
kindle.todo.scheduleItems(items)
~~~
This sends a series of items via a string argument in the required XML format (described below)

## Todo Document Format
~~~xml
<?xml version="1.0" encoding="UTF-8"?>
<response>
    <total_count>1</total_count>
    <items>
        <item priority="1" type="WISHLIST" action="REFRESH" key="DUMMY" is_incremental="false" sequence="0"></item>
    </items>
</response>
~~~

This XML format dictates the TODO action via the `type` and `action` parameters, this is known as the `contentId`.
The `contentId` is in the format `action.type`, so in this case, it would be `REFRESH.WISHLIST`. All TODO items have a `priority` and a `key` attribute, however, all other attributes are arbritary and are simply passed to the handler.

### Attributes

| Name     | Value    | Dscription                                                                                             |
|----------|----------|--------------------------------------------------------------------------------------------------------|
| priority | 1        | An integer which dictates the priority of a TODO item                                                  |
| type     | WISHLIST | What type of action to perform                                                                         |
| action   | REFRESH  | The action to perform                                                                                  |
| key      | DUMMY    | A string used to uniquely identify the TODO item, can also be used by the handler or simply be "DUMMY" |


A list of valid todo documents will be made in the future, more research is required.