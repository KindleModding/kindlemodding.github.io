---
layout: default
title: WAFs & Mesquite
weight: 6
---

# WAFs & Mesquite
WAFs are Kindle "applications", which similar to Mesquito or KWebBrew applications, are really just webapps in fancy wrappers.

WAFs should be placed in `/opt/var/local/mesquite`, in its own folder, such as:
~~~
/opt/var/local/mesquite/store
~~~

Additionally, they should be declared in `/opt/var/local/appreg.db` so they are launchable.

For example, lets examine the Kindle store's folder structure:
~~~
/opt/var/local/mesquite/store/
│   config.xml
│   config_bellatrix.xml
│   config_duet.xml
│   config_heisenberg.xml
│   config_rex.xml
│   config_wario.xml
│   config_yoshi.xml
│   config_yoshime3.xml
│   config_zelda.xml
│   index.html
│   privateCookies
│   store.js
│
├───images
│       spinner.gif
│
├───js
│       jquery.js
│       sprite_v1.js
│       sprite_v2.js
│
├───locales
│   ├───de
│   │   └───strings
│   │           strings.js
│   │
│   ├───en-GB
│   │   └───strings
│   │           strings.js
│   │
│   ├───es
│   │   └───strings
│   │           strings.js
│   │
│   ├───fr
│   │   └───strings
│   │           strings.js
│   │
│   ├───it
│   │   └───strings
│   │           strings.js
│   │
│   ├───ja
│   │   └───strings
│   │           strings.js
│   │
│   ├───nl
│   │   └───strings
│   │           strings.js
│   │
│   ├───pt
│   │   └───strings
│   │           strings.js
│   │
│   ├───ru
│   │   └───strings
│   │           strings.js
│   │
│   └───zh
│       └───strings
│               strings.js
│
└───strings
        config_wario.xml
        privateCookies
        strings.js
~~~

Most of the files are just dependencies used by the store, lets filter it down to whats interesting to us:
~~~
/opt/var/local/mesquite/store/
│   config.xml
│   config_bellatrix.xml
│   config_duet.xml
│   config_heisenberg.xml
│   config_rex.xml
│   config_wario.xml
│   config_yoshi.xml
│   config_yoshime3.xml
│   config_zelda.xml
│   index.html
│   privateCookies
│   store.js
│
├───images
│       spinner.gif
│
├───js
│       jquery.js
│       sprite_v1.js
│       sprite_v2.js
│
├───locales
│   └───en-GB
│       └───strings
│               strings.js
│
└───strings
        config_wario.xml
        privateCookies
        strings.js
~~~

All WAFs have a `config.xml` file, which gives the Kindle the metadata which it needs to launch the WAF.

Additionally, notice the `strings` folder, whilst not required, Amazon has a standardized localisation method of using `strings.js` files in `strings` folders for each `locale` (ie: the `locales` folder).

More information on these is available in the sub-pages of this section.
