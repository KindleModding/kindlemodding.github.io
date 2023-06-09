---
layout: default
grand_parent: WAFs & Mesquite
parent: The Kindle Object
title: kindle.dconfig
---

# kindle.dconfig
It isn't fully known what this does, it seems to hold store-specific configuration values.


## kindle.dconfig.getValue
~~~js
kindle.dconfig.getValue(key)
~~~
Returns a string representing whatever configuration value exists for `key`, known keyvalue pairs are as so:

| Key                           | Value                                                | Dscription                                                                                                                                                                                                                      |
|-------------------------------|------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| url.store                     | https://www.amazon.co.uk/gp/digital/juno/index.html  | Seemingly the URL which the store WAF uses                                                                                                                                                                                      |
| amz.cor                       | GB                                                   | Something todo with CORS???                                                                                                                                                                                                     |
| url.cantilever                | https://digprjsurvey$DOMAIN/csad/workflow/ed89e52d   | $DOMAIN is replaced at runtime, example of a valid url: [`https://digprjsurvey.amazon.com/csad/workflow/ed89e52d`](https://digprjsurvey.amazon.com/csad/workflow/ed89e52d)                                                      |
| marketplace.obfuscated.id     | ..............                                       | 14 character alphanumeric ID of sorts, not sharing it here as it could be sensitive information. Used by whatever `csapp` is                                                                                                    |
| url.ku.eligible               | /gp/kindle/ku/sign-up/ajax/is-customer-eligible      | Relates to `ku`, which is what `kindle unlimited` is sometimes reffered to as internally                                                                                                                                        |
| url.ku.landing.page           | /gp/kindle/ku/sign-up/ui/juno/upsell/ref=            | Relates to `ku`, which is what `kindle unlimited` is sometimes reffered to as internally                                                                                                                                        |
| url.mysn.reap                 | https://rexp-auth-proxy.amazon.cn/social_device_auth | Used by whatever `mysn` is                                                                                                                                                                                                      |
| url.odac                      | https://www.amazon.com                               | Used by whatever `odac` is                                                                                                                                                                                                      |
| cmd.account.registration      | gp/kw/land                                           | Used by whatever `odac` is                                                                                                                                                                                                      |
| url.website                   | https://www.amazon.co.uk                             | Used by `payment` WAF                                                                                                                                                                                                           |
| url.kindlestore.kcw.metrics   | /mn/kcw/workflow/log-metrics                         | Used by `payment` WAF                                                                                                                                                                                                           |
| store.disableDiskFileUse      |                                                      | Returns nothing, makes sense as its output is used in an `if` statement                                                                                                                                                         |
| mesquite.interceptorIndicator | ................................                     | A 32-character alphanumeric ID of sorts, not sharing it here as it could be sensitive. Used by the Kindle store in relation to `getCacheTriggersKey` in which a `hash fragment` is added to the URL for "`cache triggers case`" |