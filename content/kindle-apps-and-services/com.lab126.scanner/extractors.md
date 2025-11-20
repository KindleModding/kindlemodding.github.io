---
title: Extractors
---

# Extractors
Extractors are Amazon's name for programs that index books, they are C executables and they must be defined in the `appreg.db` as such:

## appreg entries
### associations
| handlerId | interface | contentId | defaultAssoc |
| --------- | --------- | --------- | ------------ |
| com.notmarek.shell_integration.extractor	|	extractor	|	GL:*.sh	|	true

### extenstions
| ext | mimetype |
| --- | -------- |
| sh | 	MT:text/x-shellscript |

### mimetypes
| ext | mimetype |
| --- | -------- |
| sh |	MT:text/x-shellscript |

### properties
| handlerId | name | value |
| --------- | ---- | ----- |
| com.notmarek.shell_integration.extractor	 | lib | 	/var/local/kmc/lib/sh_integration_extractor.so |
| com.notmarek.shell_integration.extractor	 | entry | 	load_extractor |

## Implementation
Extractors can be written in `C/C++` or `Java` - This section will cover the `C` version.  
Your extractor **must** link against `libscanner.so` in order to access necessary functions to notify it of indexed files, etc.  
For convenience, [a stub is often used](https://github.com/KindleModding/sh_integration/tree/master/stubs/scanner).

```c
#include <stdio.h>

enum ScannerEventType {
    SCANNER_ADD,
    SCANNER_DELETE,
    SCANNER_UPDATE,
    SCANNER_ADD_THUMB,
    SCANNER_UPDATE_THUMB,
};

struct scanner_event {
    enum ScannerEventType event_type;
    char *path;
    void *lipchandle;
    char *filename;
    char *uuid;
    char *glob;
};

int extractor(const struct scanner_event* event) {
    printf("Extractor called with event type %i\n", event->event_type);
    printf("\n.event_type=%i\n.filename=%s\n.glob=%s\n.lipchandle=%u\n.path=%s\n.uuid=%s\n\n", event->event_type, event->filename, event->glob, event->lipchandle, event->path, event->uuid);
    switch (event->event_type) {
        case SCANNER_ADD:
            // @TODO: Index a file
            break;
        case SCANNER_DELETE:
            // @TODO: Remove a file
            break;
        case SCANNER_UPDATE:
            // @TODO: Handle file update
            break;
        case SCANNER_ADD_THUMB:
            break;
        case SCANNER_UPDATE_THUMB:
            break;
        default:
            printf("Received unknown event: %i\n", event->event_type);
            return 1;
    }

    return 0;
}

__attribute__((__visibility__("default"))) int load_extractor(ScannerEventHandler** handler, int *unk1) {
    printf("Extractor initialised.\n");
    *handler = extractor;
    *unk1 = 0;
    return 0;
}
```

As shown in the above code, a single function is exposed called `load_extractor`.  
The name of the function **must** match the value of the `entry` key in the `properties` table in `appreg.db` for this handler.  

The `load_extractor` function can be named anything but will always set `*unk1` to `0` and will always set `*handler` to the `extractor` function.  
Returning any non-zero value is treated as an error and the extractor will not be used.  

The `handler` is a function that takes a pointer to a `scanner_event` object

## Handler
### SCANNER_ADD
The `SCANNER_ADD` event type is the most important event, it is triggered when the scanner detects a new file in the userstore.  


For example, when `Kterm.sh` is copied to `/mnt/us`, the `sh_integration` extractor receives the following `scanner_event`

```c
.event_type=0
.filename="Kterm.sh"
.glob="*.sh"
.lipchandle=76036
.path="/mnt/us/documents"
.uuid=null
```

The `sh_integration` extractor then reads the script at `/mnt/us/documents/Kterm.sh` (`path` + `filename`) and from the header it detects it has an image.  
The use of `.sdr` folders is standardised by Amazon's extractors but it is not mandatory - nonthesless `sh_integration` extracts icons to `.sdr` folders.

`sh_integration` then pulls the rest of the metadata, and generates the following `JSON Change Request` object as a `cJSON*` object: 
```json
{
  "type": "ChangeRequest",
  "commands": [
    {
      "insert": {
        "uuid": "03ce9b20-b6bb-41ef-b3c6-f4a174525112",
        "location": "/mnt/us/documents/Kterm.sh",
        "type": "Entry:Item",
        "modificationTime": 1761120511,
        "diskUsage": 15537,
        "contentSize": 15537,
        "mimeType": "text/x-shellscript",
        "cdeKey": "*85e8f37eb383fe6c0633406d21f93ae44d464160",
        "cdeType": "PDOC",
        "displayTags": [
          "NEW"
        ],
        "isVisibleInHome": true,
        "isArchived": false,
        "displayObjects": [
          {
            "ref": "titles"
          },
          {
            "ref": "credits"
          }
        ],
        "credits": [
          {
            "kind": "Author",
            "name": {
              "display": "Unknown"
            }
          }
        ],
        "thumbnail": "/mnt/us/documents/Kterm.sh.sdr/icon.jpeg",
        "titles": [
          {
            "display": "Kterm"
          }
        ]
      }
    }
  ]
}
```


This object is then passed to the `scanner_post_change` function provided by `libscanner.so` - which tells the scanner to update the Kindle's library.

Note that:
- The `cdeKey` entry is set to the `sha1` hash of the file's path
- The `diskUsage` and `contentSize` fields represent the size of the file on the disk
- For flexibility, `sh_integration` extracts icons to a `.sdr` folder, however, this is not convention - extractors typically place icons in `/mnt/us/system/thumbnails/`, for example: `/mnt/us/system/thumbnails/thumbnail_B005EM8O5W_EBSP_portrait.jpg`

### SCANNER_DELETE
The `scanner_event` file looks like:
```c
.event_type=1
.filename="Kterm.sh"
.glob="*.sh"
.lipchandle=76036
.path="/mnt/us/documents"
.uuid="23735687-d282-4630-a751-64d9f7fb2a8a"
```

`sh_integration` checks for the existence of a `.sdr` folder, if so, it runs uninstall hooks from the script cached inside that folder. The reason we have a separate script cache is because the `SCANNER_DELETE` event is triggered *after* a file has been deleted, so we cannot run script hooks from the original script.

Once that is done, `scanner_delete_ccat_entry` is called with the `uuid` as an argument, telling the scanner to remove the entry from the Kindle's library.

### SCANNER_UPDATE
We handle updates by removing then re-indexing the file, the scanner appears to support this and doesn't complain much.

### Unknown Events
We handle `SCANNER_ADD_THUMB` and `SCANNER_UPDATE_THUMB` by returning `0` without doing anything, and we handle any other events by logging it and returning `1` - this is in accordance to how Amazon's extractors (such as the `mobi8` extractor) work.