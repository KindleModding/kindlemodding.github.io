---
layout: default
draft: true
title: com.lab126.pillow
---

# com.lab126.pillow
Pillow is commonly used to display alerts and dialogues to the user. Pillow can be invoked via Mesquite and Mesquito apps via the `Mesuqito SDK` which contains a wrapper for Pillow based on [this code](https://github.com/PaulFreund/WebLaunch/blob/master/bin/pillowHelper.js)

## LIPC Properties

| ID                    | Type | R/W/RW | Value                                                                                                                                                                                                     | Description |
|:---------------------:|:----:|:------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| disableEnablePillow   | Str  | w      |                                                                                                                                                                                                           | TODO        |
| dismissChrome         | Str  | w      |                                                                                                                                                                                                           | TODO        |
| customDialog          | Str  | w      |                                                                                                                                                                                                           | TODO        |
| applicationWindow     | Str  | w      |                                                                                                                                                                                                           | TODO        |
| logLevel              | Str  | rw     | [Current log level=info(Possible transient levels: all, perf, debug[9-0], info, warn, error,crit, none)(Possible persistent levels: p_all, p_perf, p_debug[0-9], p_info, p_warn,p_error, p_crit, p_none)] | TODO        |
| activityIndicator     | Str  | w      |                                                                                                                                                                                                           | TODO        |
| debugInfo             | Str  | w      |                                                                                                                                                                                                           | TODO        |
| logMask               | Str  | rw     | [0x0fff0000]                                                                                                                                                                                              | TODO        |
| displayChrome         | Str  | w      |                                                                                                                                                                                                           | TODO        |
| interrogatePillow     | Str  | w      |                                                                                                                                                                                                           | TODO        |
| interrogatePillowHash | Has  | rw     | [*NOT SHOWN*]                                                                                                                                                                                             | TODO        |
| pillowAlert           | Str  | w      |                                                                                                                                                                                                           | TODO        |