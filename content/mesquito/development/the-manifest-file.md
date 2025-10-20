---
layout: default
grand_parent: Mesquito
parent: Developing For Mesquito
title: The Manifest File
weight: 2
---

# The Manifest File
The manifest file holds all the information which Mesquito uses to identify the app, it should follow the following format:

~~~json
{
  "minVersion": 1,
  "manifestVersion": 2,
  "appVersion": "v0.1.0",
  "waf": false,
  "id": "com.bluebotlaboratories.kchess",
  "name": "KChess",
  "author": "Bluebotlaboratories",
  "description": "Chess on a Kindle!",
  "repo": "https://github.com/KindleModding/KWebBrew",
  "icon": "icon.jpg",
  "entrypoint": "index.html"
}
~~~

## Key Explanation
Here's a quick explanation of what everything does:

| Key            | Description                                                                                                                          |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------|
| minVersion     | The minimum KWebBrew version required to run                                                                                         |
| manifestVerion | The version of the manifest                                                                                                          |
| appVersion     | The version string of the app, it can be anything but it is recommended that you stick to the [semver](https://semver.org/) standard |
| waf            | Set this to true if you are using Mesquito-specific or WAF-specific features.                                                        |
| id             | The app's identifier (MUST MATCH FOLDERNAME, BE LOWERCASE and in that format)                                                        |
| name           | The display name of the app                                                                                                          |
| author         | The author of the app                                                                                                                |
| description    | A short description of the app                                                                                                       |
| repo           | A link to the repository or mobileread thread                                                                                        |
| icon           | The name of the icon file in the app's directory                                                                                     |
| entrypoint     | The name of the main app file in the app's directory                                                                                 |

## Version Info
The current latest Mesquito version number (for minVersion) is: 2<br/>
For historic reference, previous minimum version numbers were:<br/>

| Version Number | Mesquito Version |
|----------------|------------------|
| 2              | v1.0.0           |

The current latest manifest version number (for manifestVersion) is: 2<br/>
For historic reference, previous manifest version numbers were:<br/>

| Version Number | Mesquito Version |
|----------------|------------------|
| 2              | v1.0.0           |

## Manifest changelog
### 2
- Added WAF key (Must be `true` if you are using Mesquito features)
- Added version keys
- Added id key

[The Mesquito SDK](./the-mesquito-sdk.html){: .button }