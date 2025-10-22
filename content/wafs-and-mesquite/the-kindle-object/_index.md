---
layout: default
parent: WAFs & Mesquite
title: The Kindle Object
weight: 2
---

# The Kindle Object
All WAFs have a `window.kindle` object available to them. This serves as a bridge between the Javascript and the Kindle's system.
There are many APIs available, which can be configured via the [Features](../understanding-config-xml.html#features) section of the `config.xml` file of a WAF.

This section aims to document every API available via the `window.kindle` object

The `kindle` object also has the following properties:

| Name    | Value   | Description                                           |
|---------|---------|-------------------------------------------------------|
| version | `1`     | An int which appears to store the version of the API? |


## Secret Dev Stuff
In the local-development version (the Kindle object is spoofed for local development), the following interesting properties also exist, `isMock` which is `1` and `extensions` which is `{}`