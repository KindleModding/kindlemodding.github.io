---
layout: default
title: com.lab126.scanner
---

# com.lab126.scanner
The scanner is a core component of the Kindle system. It watches the userstore filesystem at `/mnt/us/` and indexes books.

[appreg.db](/kindle-hacking/appreg.html) is used to determine corresponding file associations.  
For more information on how books are indexed, please see the [extractors](./extractors.html) section

## LIPC Properties

| ID             | Type | R/W/RW | Value                                                                                                                                                                                                     | Description |
|:--------------:|:----:|:------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| triggerUpdate  | Int  | w      |                                                                                                                                                                                                           | TODO        |
| doFullScan     | Int  | w      |                                                                                                                                                                                                           | Make scanner perform a full userstore scan        |
| logMask        | Str  | rw     | [0x0fff0000]                                                                                                                                                                                              | TODO        |
| fullScanStatus | Int  | r      | [0]                                                                                                                                                                                                       | TODO        |
| logLevel       | Str  | rw     | [Current log level=info(Possible transient levels: all, perf, debug[9-0], info, warn, error,crit, none)(Possible persistent levels: p_all, p_perf, p_debug[0-9], p_info, p_warn,p_error, p_crit, p_none)] | TODO        |
| reScanFile     | Str  | w      |                                                                                                                                                                                                           | TODO        |