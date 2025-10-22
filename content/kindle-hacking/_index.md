---
layout: default
title: Kindle Hacking
weight: 7
---

# Kindle Hacking
Are you a jailbreak developer?  
Have you found a cool exploit?  
You want to release a jailbreak - but don't know where to go from here?  
Or maybe you just want to understand how it all works


This is the section for you.

## An Overview of jailbreaking
Once you have code execution as `root`, a jailbreak simply performs the following steps:
1. Mount the root filesystem as `rw`
2. Install developer keys in `/etc/uks` or the `/etc/uks.sqsh` squashfs file
3. Create a file named `/PRE_GM_DEBUGGING_FEATURES_ENABLED__REMOVE_AT_GMC` in `/` to enable debugging features
4. Create a file named `/MNTUS_EXEC` in `/` which makes the Kindle mount `/mnt/us` 
5. Mount the root filesystem as `ro`

This prepares the system for a [hotfix](./hotfix.html)