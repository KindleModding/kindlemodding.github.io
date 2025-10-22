---
layout: default
draft: true
title: com.lab126.cmd
---

# com.lab126.cmd

## LIPC Properties

| ID                  | Type | R/W/RW | Value                                                                                                                                                                                                     | Description |
|:-------------------:|:----:|:------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| ensureConnection    | Str  | w      |                                                                                                                                                                                                           | TODO        |
| activeInterface     | Str  | r      | [wifi]                                                                                                                                                                                                    | TODO        |
| logLevel            | Str  | rw     | [Current log level=none(Possible transient levels: all, perf, debug[9-0], info, warn, error,crit, none)(Possible persistent levels: p_all, p_perf, p_debug[0-9], p_info, p_warn,p_error, p_crit, p_none)] | TODO        |
| logMask             | Str  | rw     | [0x00000000]                                                                                                                                                                                              | TODO        |
| interfaceProperties | Has  | rw     | [*NOT SHOWN*]                                                                                                                                                                                             | TODO        |
| disableInterfaces   | Has  | rw     | [*NOT SHOWN*]                                                                                                                                                                                             | TODO        |
| wirelessEnable      | Int  | rw     | [1]                                                                                                                                                                                                       | TODO        |
| availableInterfaces | Has  | rw     | [*NOT SHOWN*]                                                                                                                                                                                             | TODO        |
| smsRecvRequired     | Int  | rw     | [0]                                                                                                                                                                                                       | TODO        |