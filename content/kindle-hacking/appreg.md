---
title: appreg.db
---

# appreg.db

The `appreg.db` file at `/var/local/appreg.db` is a `sqlite3` database which stores numerous file-application relations and configuration values.

It contains the following tables:
- `associations`
- `extenstions`
- `handlerIds`
- `interfaces`
- `mimetypes`
- `properties`

(yes, `extenstions` is how it is spelt in the database)

## associations
The associations table is the most important table in the `appreg.db` file, linking specific *handlers* to specific types of *content* or *interfaces*.  
It is most notably used by [scanner](../kindle-apps-and-services/com.lab126.scanner.html) to determine what *extractor* to use when indexing a file.  
It is also used to determine what application to launch when opening a booklet.

| handlerId | interface | contentId | defaultAssoc |
| --------- | --------- | --------- | ------------ |
| com.lab126.adRotationManager	|	kaf-service	|	none	|	false
| com.lab126.purchaseManager	|	kaf-service	|	none	|	false
| com.lab126.todo.handler.PurchaseConfirmation	|	todo	|	TP:legacy.SET.PRCH	|	false
| com.amazon.kindle.booklet.ad	|	application	|	none	|	false
| com.lab126.adManager	|	kaf-service	|	none	|	false
| com.lab126.todo.handler.AdReset	|	todo	|	TP:legacy.SET.ADRS	|	false
| com.lab126.todo.handler.AdPackage	|	todo	|	TP:legacy.DOWNLOAD.ADPK	|	false
| com.lab126.todo.handler.AdPackage	|	todo	|	TP:legacy.REMOVE.ADPK	|	false
| com.lab126.sdk.addressbook	|	kaf-service	|	none	|	false
| com.lab126.booklet.oobe.tutorial	|	application	|	none	|	false
| com.lab126.audible.WSMarketplaceService	|	kaf-service	|	none	|	false

| handlerId | interface | contentId | defaultAssoc |
| --------- | --------- | --------- | ------------ |
| com.lab126.audible.extractor	|	extractor	|	GL:*.aax	|	true
| com.lab126.generic.extractor	|	extractor	|	GL:*.txt	|	true
| com.lab126.mobi.extractor	|	extractor	|	GL:*.mobi	|	true
| com.lab126.mobi.extractor	|	extractor	|	GL:*.pobi	|	true
| com.lab126.mobi.extractor	|	extractor	|	GL:*.prc	|	true
| com.lab126.mobi.extractor	|	extractor	|	GL:*.azw	|	true
| com.lab126.mobi8.extractor	|	extractor	|	GL:*.azw3	|	true
| com.lab126.pdf.extractor	|	extractor	|	GL:*.pdf	|	true
| com.lab126.topaz.extractor	|	extractor	|	GL:*.tpz	|	true
| com.lab126.topaz.extractor	|	extractor	|	GL:*.azw1	|	true
| com.lab126.yj.extractor	|	extractor	|	GL:*.yj	|	true
| com.lab126.yj.extractor	|	extractor	|	GL:*.azw8	|	true
| com.lab126.yj.extractor	|	extractor	|	GL:*.kfx	|	true
| org.kindlemodding.hd_extractor	|	extractor	|	GL:*.DO_NOT_DELETE	|	true
| com.lab126.generic.extractor	|	extractor	|	GL:*.run_persistence	|	true
| com.notmarek.shell_integration.extractor	|	extractor	|	GL:*.sh	|	true
| com.lab126.generic.extractor	|	extractor	|	GL:*.run_hotfix	|	true

| handlerId | interface | contentId | defaultAssoc |
| --------- | --------- | --------- | ------------ |
| com.lab126.booklet.reader	|	application	|	MT:application/pdf	|	true
| com.lab126.booklet.test	|	application	|	MT:application/x-amazon-testrunner	|	true
| com.lab126.booklet.reader	|	application	|	MT:application/x-kfx-ebook	|	true
| com.lab126.booklet.reader	|	application	|	MT:application/x-mobi8-ebook	|	true
| com.lab126.booklet.reader	|	application	|	MT:application/x-mobipocket-ebook	|	true
| com.lab126.booklet.periodicals	|	application	|	MT:application/x-mobipocket-subscription	|	true
| com.lab126.booklet.periodicals	|	application	|	MT:application/x-mobipocket-subscription-feed	|	true
| com.lab126.booklet.periodicals	|	application	|	MT:application/x-mobipocket-subscription-magazine	|	true
| com.lab126.booklet.reader	|	application	|	MT:application/x-topaz-ebook	|	true


## handlerIds
`handlerIds` is a table with a single column, `handlerId`:

| handlerId |
| --------- |
| com.lab126.adRotationManager |
| com.notmarek.shell_integration.launcher |
| com.notmarek.shell_integration.extractor |
| com.lab126.kft |
| com.lab126.oobe |

(the above table is not exhaustive)

## interfaces
`interfaces` is another single-column table containing a column called `interface`.  
This table, at the time of writing, contains 8 rows:

| interface |
| --------- |
| kaf-service |
| todo |
| application |
| download |
| detail |
| extractor |
| indexer |
| amazon-messaging |

## extenstions
`extenstions` is a database that associates a particular file extension with a mimetype.  
It consists of an `ext` column and a `mimetype` column, ie:

| ext | mimetype |
| --- | -------- |
| aax |	MT:audio/vnd.audible.aax |
| pobi |   	MT:application/x-mobipocket-subscription |
| pobi |   	MT:application/x-mobipocket-subscription-magazine |
| pobi |   	MT:application/x-mobipocket-subscription-feed |
| azw |	MT:application/x-mobipocket-ebook |
| mbp |	MT:application/x-mobipocket-sidecar |
| azw3 |   	MT:application/x-mobi8-ebook |
| azw6 |   	MT:application/x-mobi8-images |
| kfx |	MT:application/x-kfx-ebook |
| han |	MT:application/json |
| azw1 |   	MT:application/x-topaz-ebook |
| tan |	MT:application/x-topaz-sidecar |
| pdf |	MT:application/pdf |
| txt |	MT:text/plain |
| jpg |	MT:image/jpeg |
| apnx |   	MT:application/x-apnx-sidecar |
| phl |	MT:application/xml+phl |
| sa | 	MT:application/xml+sa |
| ea | 	MT:application/xml+ea |
| none |   	MT:application/x-kindle-oobe |
| none |   	MT:application/x-kindle-vocab-builder |
| none |   	MT:application/x-kindle-collection |
| none |   	MT:application/x-kindle-pvc |
| none |   	MT:application/x-kindle-series |
| runtest |	MT:application/x-amazon-testrunner |
| DO_NOT_DELETE |  	MT:text/hd_extractor |
| html |   	MT:text/html |
| run_persistence |	MT:kindlemodding/run_persistence |
| sh | 	MT:text/x-shellscript |
| run_hotfix | 	MT:kindlemodding/run_hotfix |

## mimetypes
The purpose of this table is unknown, it holds values similar to `extenstions`

| ext | mimetype |
| --- | -------- |
| AAX |	MT:audio/vnd.audible.aax |
| pobi |	MT:application/x-mobipocket-subscription-feed |
| azw |	MT:application/x-mobipocket-ebook |
| mobi |	MT:application/x-mobipocket-ebook |
| prc |	MT:application/x-mobipocket-ebook |
| mbp |	MT:application/x-mobipocket-sidecar |
| azw3 |	MT:application/x-mobi8-ebook |
| azw6 |	MT:application/x-mobi8-images |
| kfx |	MT:application/x-kfx-ebook |
| azw8 |	MT:application/x-kfx-ebook |
| yj |	MT:application/x-kfx-ebook |
| han |	MT:application/json |
| azw1 |	MT:application/x-topaz-ebook |
| tpz |	MT:application/x-topaz-ebook |
| tan |	MT:application/x-topaz-sidecar |
| pdf |	MT:application/pdf |
| txt |	MT:text/plain |
| jpg |	MT:image/jpeg |
| jpeg |	MT:image/jpeg |
| apnx |	MT:application/x-apnx-sidecar |
| phl |	MT:application/xml+phl |
| sa |	MT:application/xml+sa |
| ea |	MT:application/xml+ea |
| none |	MT:application/x-kindle-series |
| runtest |	MT:application/x-amazon-testrunner |
| DO_NOT_DELETE |	MT:text/hd_extractor |
| html |	MT:text/html |
| htm |	MT:text/html |
| run_persistence |	MT:kindlemodding/run_persistence |
| sh |	MT:text/x-shellscript |
| run_hotfix |	MT:kindlemodding/run_hotfix |

## properties
As the name suggests, this table is responsible for associating specific kinds of properties with handlers

### Properties for sh_integration
| handlerId | name | value |
| --------- | ---- | ----- |
| com.notmarek.shell_integration.launcher	 | extend-start |	Y
| com.notmarek.shell_integration.launcher	 | unloadPolicy | 	unloadOnPause
| com.notmarek.shell_integration.launcher	 | maxGoTime | 	60
| com.notmarek.shell_integration.launcher	 | maxPauseTime | 	60
| com.notmarek.shell_integration.launcher	 | maxUnloadTime | 	60
| com.notmarek.shell_integration.launcher	 | maxLoadTime | 	60
| com.notmarek.shell_integration.launcher	 | command | 	/var/local/kmc/bin/sh_integration_launcher
| com.notmarek.shell_integration.extractor	 | lib | 	/var/local/kmc/lib/sh_integration_extractor.so
| com.notmarek.shell_integration.extractor	 | entry | 	load_extractor

### Properties for the mobi8 extractor
| handlerId | name | value |
| --------- | ---- | ----- |
| com.lab126.mobi8.extractor |	lib |	/usr/lib/ccat/libmobi8extractorE.so
| com.lab126.mobi8.extractor |	entry |	load_mobi8_extractor

### Properties for the home booklet
| handlerId | name | value |
| --------- | ---- | ----- |
| com.lab126.booklet.home |	lipcId |	com.lab126.booklet.home
| com.lab126.booklet.home |	jar |	/opt/amazon/ebook/booklet/home.jar
| com.lab126.booklet.home |	supportedOrientation |	U
| com.lab126.booklet.home |	default-chrome-style |	TSB
| com.lab126.booklet.home |	maxExecTime |	22
| com.lab126.booklet.home |	maxLoadTime |	40
| com.lab126.booklet.home |	maxGoTime |	30
| com.lab126.booklet.home |	defaultContext |	context=0
| com.lab126.booklet.home |	extend-start |	Y
| com.lab126.booklet.home |	detailFactoryPath |	/opt/amazon/ebook/booklet/home.jar
| com.lab126.booklet.home |	detailFactoryClass |	com.amazon.kindle.home.detail.HomeDetailViewFactory
| com.lab126.booklet.home |	whisper-touch |	supported
| com.lab126.booklet.home |	asr |	supported

### Properties for com.lab126.tardis
| handlerId | name | value |
| --------- | ---- | ----- |
| com.lab126.tardis |	lipcId |	com.lab126.tardis |
| com.lab126.tardis |	jar |	/opt/amazon/ebook/booklet/tardis.jar |
| com.lab126.tardis |	supportedOrientation |	U |

### Properties for the reader booklet
| handlerId | name | value |
| --------- | ---- | ----- |
| com.lab126.booklet.reader |	asr |	supported |
| com.lab126.booklet.reader |	default-chrome-style |	NH |
| com.lab126.booklet.reader |	detailFactoryClass |	com.amazon.ebook.booklet.reader.impl.detail.ReaderDetailViewFactory |
| com.lab126.booklet.reader |	detailFactoryPath |	/opt/amazon/ebook/lib/detail_view.jar |
| com.lab126.booklet.reader |	downloadHandlerClass |	com.amazon.ebook.booklet.reader.impl.todo.handler.ContentToDoHandler |
| com.lab126.booklet.reader |	downloadHandlerPath |	/opt/amazon/ebook/lib/ReaderSDK-impl.jar |
| com.lab126.booklet.reader |	extend-start |	Y |
| com.lab126.booklet.reader |	grip-suppression |	supported |
| com.lab126.booklet.reader |	jar |	/opt/amazon/ebook/booklet/Reader.jar |
| com.lab126.booklet.reader |	lipcId |	com.lab126.booklet.reader |
| com.lab126.booklet.reader |	maxGoTime |	30 |
| com.lab126.booklet.reader |	maxPauseTime |	60 |
| com.lab126.booklet.reader |	searchbar-mode |	transient |
| com.lab126.booklet.reader |	supportedOrientation |	URL |
| com.lab126.booklet.reader |	whisper-touch |	supported |
