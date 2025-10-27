---
layout: default
title: com.lab126.btfd
---

# com.lab126.btfd

## LIPC Properties

| ID                     | Type | R/W/RW | Value                                                                                                                                                                                                       | Description |
|:----------------------:|:----:|:------:|:---:|:-----------:|
| isAudibleAvailable     | Int  | r      | [1]                                                                                                                                                                                                         | TODO        |
| triggerBTscan          | Int  | w      |                                                                                                                                                                                                             | TODO        |
| hasNeverPaired         | Int  | r      | [1]                                                                                                                                                                                                         | TODO        |
| Unbond                 | Str  | w      |                                                                                                                                                                                                             | TODO        |
| Bond                   | Str  | w      |                                                                                                                                                                                                             | TODO        |
| Disconnect             | Str  | w      |                                                                                                                                                                                                             | TODO        |
| ensureBTconnection     | Str  | w      |                                                                                                                                                                                                             | TODO        |
| isBtchQueuedOrRunning  | Int  | r      | [0]                                                                                                                                                                                                         | TODO        |
| BTplaybackData         | Has  | rw     | [*NOT SHOWN*]                                                                                                                                                                                               | TODO        |
| isBtchRunning          | Int  | r      | [0]                                                                                                                                                                                                         | TODO        |
| BTstate                | Int  | r      | [1]                                                                                                                                                                                                         | TODO        |
| btPopupDone            | Str  | w      |                                                                                                                                                                                                             | TODO        |
| logLevel               | Str  | rw     | [Current log level=info(Possible transient levels: all, perf, debug[9-0], info, warn, error, crit, none)(Possible persistent levels: p_all, p_perf, p_debug[0-9], p_info, p_warn, p_error, p_crit, p_none)] | TODO        |
| PairUserConfirmation   | Int  | w      |                                                                                                                                                                                                             | TODO        |
| ListPaired             | Has  | rw     | [*NOT SHOWN*]                                                                                                                                                                                               | TODO        |
| DumpStateInfo          | Int  | w      |                                                                                                                                                                                                             | TODO        |
| logMask                | Str  | rw     | [0x0fff0000]                                                                                                                                                                                                | TODO        |
| BTconnectedDevName     | Str  | r      |                                                                                                                                                                                                             | TODO        |
| BTenable               | Str  | w      |                                                                                                                                                                                                             | TODO        |
| BTmetadata             | Has  | rw     | [*NOT SHOWN*]                                                                                                                                                                                               | TODO        |
| BTflightMode           | Int  | w      |                                                                                                                                                                                                             | TODO        |
| DiscoverA2DP           | Int  | w      |                                                                                                                                                                                                             | TODO        |
| Connect                | Str  | w      |                                                                                                                                                                                                             | TODO        |
| ListConnected          | Has  | rw     | [*NOT SHOWN*]                                                                                                                                                                                               | TODO        |
| BLEenable              | Str  | w      |                                                                                                                                                                                                             | TODO        |
| BLEdisable             | Str  | w      |                                                                                                                                                                                                             | TODO        |
| currentBTOperatingMode | Int  | r      | [2]                                                                                                                                                                                                         | TODO        |
| ListDiscovered         | Has  | rw     | [*NOT SHOWN*]                                                                                                                                                                                               | TODO        |
