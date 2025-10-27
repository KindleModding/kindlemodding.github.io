---
layout: default
title: com.lab126.contentpackd
---

# com.lab126.contentpackd

## LIPC Properties

| ID                 | Type | R/W/RW | Value                                                                                                                                                                                                     | Description |
|:------------------:|:----:|:------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| rebootDevice       | Str  | w      |                                                                                                                                                                                                           | TODO        |
| scanFont           | Str  | w      |                                                                                                                                                                                                           | TODO        |
| fontUpdateCallback | Str  | w      |                                                                                                                                                                                                           | TODO        |
| logMask            | Str  | rw     | [0x0fff0000]                                                                                                                                                                                              | TODO        |
| installKeyboard    | Str  | w      |                                                                                                                                                                                                           | TODO        |
| fontsMountedState  | Int  | r      | [1]                                                                                                                                                                                                       | TODO        |
| logLevel           | Str  | rw     | [Current log level=info(Possible transient levels: all, perf, debug[9-0], info, warn, error,crit, none)(Possible persistent levels: p_all, p_perf, p_debug[0-9], p_info, p_warn,p_error, p_crit, p_none)] | TODO        |