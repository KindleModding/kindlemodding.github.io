---
layout: default
draft: true
title: com.lab126.volumd
---

# com.lab126.volumd

## LIPC Properties

| ID                           | Type | R/W/RW | Value                                                                                                                                                                                                     | Description |
|:----------------------------:|:----:|:------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| userstoreIsAvailable         | Int  | r      | [1]                                                                                                                                                                                                       | TODO        |
| userstoreTotalSpace          | Int  | r      | [1042168]                                                                                                                                                                                                 | TODO        |
| userstoreDeferUnmountRequest | Int  | w      |                                                                                                                                                                                                           | TODO        |
| logLevel                     | Str  | rw     | [Current log level=info(Possible transient levels: all, perf, debug[9-0], info, warn, error,crit, none)(Possible persistent levels: p_all, p_perf, p_debug[0-9], p_info, p_warn,p_error, p_crit, p_none)] | TODO        |
| logMask                      | Str  | rw     | [0x0fff0000]                                                                                                                                                                                              | TODO        |
| recreateUserstoreResponse    | Str  | w      |                                                                                                                                                                                                           | TODO        |
| userstoreReadyToUnMount      | Int  | w      |                                                                                                                                                                                                           | TODO        |
| useUsbForNetwork             | Int  | rw     | [1]                                                                                                                                                                                                       | TODO        |
| driveModeState               | Int  | r      | [0]                                                                                                                                                                                                       | TODO        |
| userstoreFreeSpace           | Int  | r      | [646248]                                                                                                                                                                                                  | TODO        |