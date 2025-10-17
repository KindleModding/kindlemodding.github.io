---
layout: default
parent: Mesquito
title: Developing For Mesquito
has_children: true
---

# Developing For Mesquito
Developing for Mesquito is extremely simple, in fact, almost any webapp can be easily converted into a Mesquito-compatible one, all it needs is an icon and a [`manifest`](./the-manifest-file.html) file

## Limitations
As it is overriding the store WAF, Mesquito can only access the `com.lab126.pillow`, `com.lab126.chromebar` and `com.lab126.readnow` LIPC services via the [`messaging`](../../wafs-and-mesquite/the-kindle-object/kindle-messaging.html) object. Additionally, as it is running on a Kindle, it has the same featureset as `Safari 5`, you can use the [caniuse.com](https://caniuse.com/) (or [Can Mesquite Use?](https://html-preview.github.io/?url=https://github.com/polish-penguin-dev/Illusion/blob/main/Mesquite/Can-Mesquite-Use.html)) site to determine if you can use certain web features on the Kindle.

Mesquito also includes its own polyfill, and whilst the polyfill works extremely well, there are some things that can't be replaced by a polyfill, for this reason the following features do not work:
- [Arrow Functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default Parameters](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Default_parameters)

(The reason for this is that a polyfill can add modern web APIs to your application, it does *not* add modern language features - see Babel/SWC).

{: .info}
A fix for the `LIPC` limitation is being worked on.

[Getting Started](./kindle-models.html){: .button }