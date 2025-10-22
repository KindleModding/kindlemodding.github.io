---
title: Debug Commands
---

# Debug Commands

`;dm`, `;kmclog`, `;711`, `;log mrpi` - these are all **debug commands** that can be executed in the search bar!  
They generally start with `;` but this is not necessary, ie: `freset`

They are defined in three place:
- `/app/kpp_app_cmds.json`
- `/usr/share/app/kpp_sys_cmds.json`
- `/usr/share/webkit-1.0/pillow/debug_cmds.json`

For example, `/app/kpp_app_cmds.json` on stock firmware:
```json
{
    ";framer" : "/app/tools/framerTool.sh",
    ";launcher" : "/app/tools/launcher.sh",
    ";ui" : "/app/tools/altNLevel.sh",
    ";term" : "/app/tools/kterm.sh",
    ";kppchrome2" : "/app/tools/switchChrome.sh kpp 2",
    ";kppstore" : "/app/tools/switchChrome.sh kppstore",
    ";debugon" : "/app/tools/enableKPPDebugMenu.sh true",
    ";debugoff" : "/app/tools/enableKPPDebugMenu.sh false",
    ";lightbox" : "/app/tools/lightboxMode.sh",
    ";odac" : "/app/tools/switchODAC.sh",
    ";cpuProfilerOn" : "/app/tools/cpuProfiler/start_polling.sh",
    ";cpuProfilerOff" : "/app/tools/cpuProfiler/stop_polling.sh",
    ";kidsjava" : "/app/tools/enableKPPAmazonKids.sh false",
    ";kidskpp" : "/app/tools/enableKPPAmazonKids.sh true",
    ";enable2x" : "/app/tools/enable2xScaling.sh true",
    ";disable2x" : "/app/tools/enable2xScaling.sh false",
    ";default2x" : "/app/tools/enable2xScaling.sh default",
    ";enablePerPageExport" : "/app/tools/enablePerPageExport.sh gamma",
    ";disablePerPageExport" : "/app/tools/enablePerPageExport.sh prod",
    ";enableHiddenPDF" : "/app/tools/enableHiddenPDF.sh gamma",
    ";disableHiddenPDF" : "/app/tools/enableHiddenPDF.sh prod",
    ";stylusDataOn" : "/app/tools/stylusDataPoints.sh true",
    ";stylusDataOff" : "/app/tools/stylusDataPoints.sh false",
    ";stroke" : "/app/tools/strokeSampleApps.sh",
    ";kppreader" : "/app/tools/useKPPReader.sh true",
    ";javareader" : "/app/tools/useKPPReader.sh false",
    ";defaultreader" : "/app/tools/useKPPReader.sh default",
    ";syncweblab" : "/app/tools/syncweblab.sh",
    ";summaryon" : "/app/tools/useScribeAI.sh summary true",
    ";formaton" : "/app/tools/useScribeAI.sh format true",
    ";summaryoff" : "/app/tools/useScribeAI.sh summary false",
    ";formatoff" : "/app/tools/useScribeAI.sh format false",
    ";aion" : "/app/tools/useScribeAI.sh ai true",
    ";aioff": "/app/tools/useScribeAI.sh ai false",
    ";fabricDemo": "/app/tools/launchKppFabricDemoApp.sh"
}
```

<blockquote class="note">
We use ;log as the MRPI installation command because previous versions of Kindle firmware contained it as a stock command that we overwrote.
<br/>
Nowadays, the command is added to the list of commands and installed entirely from the hotfix
</blockquote>

As you can imagine, when you type a debug command in the search bar and hit enter, it checks if it exists in this file, and if it does, it runs it.  
Arguments are passed to the script in the same way they would with a shell, so:

```
;test 1 2 3
```

Where the command is defined with a sh file as:
```sh
echo $1
echo $2<blockquote class="note">
    We use
    </blockquote>
echo $3
```

Would output:
```sh
1
2
3
```

## Documented Commands
### kpp_sys_cmds

| Search Command | Command | Description |
| -------------- | ------- | ----------- |
| `;enter_demo`       | `/usr/bin/createDemoModeFlagFile.sh` | Enters demo mode on the Kindle
| `;exit_demo`        | `/usr/bin/deleteDemoModeFlagFile.sh` | Exits demo mode on the Kindle
| `;vfd`      | `/usr/bin/verifyDemo.sh` |
| `;dm`       | `/usr/bin/dm.sh` | Dumps a list of system messages and logs to the `/mnt/us/documents` folder
| `;311`      | `/usr/bin/311.sh` | Change carrier settings
| `;411`      | `/usr/bin/411.sh` | Server information
| `;611`      | `/usr/bin/611.sh` | WAN information (3G)
| `;711`      | `/usr/bin/711.sh` | WiFi information
| `;st`       | `/usr/bin/dateTime.sh` | Set the date to `date -D "%F %H:%M" +%s -d "$1 $2"` where `$1` and `$2` are args
| `;shpm`     | `/usr/sbin/shipping_mode` | Put the Kindle in shipping mode
| `;un`       | `/usr/local/bin/usbnetwork.sh start` | 
| `;uns`      | `/usr/local/bin/usbnetwork.sh stop` | 
| `;debugOn`      | `/usr/bin/debugOn.sh` | 
| `;debugOff`     | `/usr/bin/debugOff.sh` |
| `;bsalogoff`        | `/usr/bin/bsaLogOff.sh` |
| `;bsalogon`     | `/usr/bin/bsaLogOn.sh` |
| `;wmtlog`       | `/usr/bin/wmtLog.sh` |
| `;uzb`      | `/usr/bin/enableUSBInDemo.sh` | Enable USB file management in demo mode
| `;dsts`     | `/usr/bin/startSettingsInDemo.sh` | Open settings in demo mode
| `;updateCamp`       | `/usr/bin/updateCamp.sh` |
| `;wwreset`      | `/usr/bin/wwReset.sh` |
| `;demo`     | `/usr/bin/demoConfig.sh` | 
| `;duzb`     | `/usr/bin/disableUSBInDemo.sh` |
| `;chkup`        | `/usr/bin/checkUpdate.sh` |
| `;ledon`        | `/usr/bin/turnOnLed.sh` |
| `freset`        | `/bin/sh -c /usr/sbin/factory_reset` | Factory resets your Kindle - It requires NO `;` when run

### kpp_app_cmds
Note that the `/app/tools` folder only ships on [internal-use prototype Kindles](./prototype-kindles/)

| Search Command | Command | Description |
| -------------- | ------- | ----------- |
| `;framer`       |        `/app/tools/framerTool.sh` | 
| `;launcher`     |        `/app/tools/launcher.sh` | 
| `;ui`       |        `/app/tools/altNLevel.sh` | 
| `;term`     |        `/app/tools/kterm.sh` | 
| `;kppchrome2`       |        `/app/tools/switchChrome.sh kpp 2` | 
| `;kppstore`     |        `/app/tools/switchChrome.sh kppstore` | 
| `;debugon`      |        `/app/tools/enableKPPDebugMenu.sh true` | 
| `;debugoff`     |        `/app/tools/enableKPPDebugMenu.sh false` | 
| `;lightbox`     |        `/app/tools/lightboxMode.sh` | 
| `;odac`     |        `/app/tools/switchODAC.sh` | 
| `;cpuProfilerOn`        |        `/app/tools/cpuProfiler/start_polling.sh` | 
| `;cpuProfilerOff`       |        `/app/tools/cpuProfiler/stop_polling.sh` | 
| `;kidsjava`     |        `/app/tools/enableKPPAmazonKids.sh false` | 
| `;kidskpp`      |        `/app/tools/enableKPPAmazonKids.sh true` | 
| `;enable2x`     |        `/app/tools/enable2xScaling.sh true` | 
| `;disable2x`        |        `/app/tools/enable2xScaling.sh false` | 
| `;default2x`        |        `/app/tools/enable2xScaling.sh default` | 
| `;enablePerPageExport`      |        `/app/tools/enablePerPageExport.sh gamma` | 
| `;disablePerPageExport`     |        `/app/tools/enablePerPageExport.sh prod` | 
| `;enableHiddenPDF`      |        `/app/tools/enableHiddenPDF.sh gamma` | 
| `;disableHiddenPDF`     |        `/app/tools/enableHiddenPDF.sh prod` | 
| `;stylusDataOn`     |        `/app/tools/stylusDataPoints.sh true` | 
| `;stylusDataOff`        |        `/app/tools/stylusDataPoints.sh false` | 
| `;stroke`       |        `/app/tools/strokeSampleApps.sh` | 
| `;kppreader`        |        `/app/tools/useKPPReader.sh true` | 
| `;javareader`       |        `/app/tools/useKPPReader.sh false` | 
| `;defaultreader`        |        `/app/tools/useKPPReader.sh default` | 
| `;syncweblab`       |        `/app/tools/syncweblab.sh` | 
| `;summaryon`        |        `/app/tools/useScribeAI.sh summary true` | 
| `;formaton`     |        `/app/tools/useScribeAI.sh format true` | 
| `;summaryoff`       |        `/app/tools/useScribeAI.sh summary false` | 
| `;formatoff`        |        `/app/tools/useScribeAI.sh format false` | 
| `;aion`     |        `/app/tools/useScribeAI.sh ai true` | 
| `;aioff`        |       `/app/tools/useScribeAI.sh ai false` | 
| `;fabricDemo`       |       `/app/tools/launchKppFabricDemoApp.sh` | 


`/usr/share/webkit-1.0/pillow/debug_cmds.json` no longer exists.