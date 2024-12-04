---
title:          "Mimi (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
---

> Author: @JohnHammond
> Uh oh! Mimi forgot her password for her Windows laptop!
> Luckily, she dumped one of the crucial processes running on her computer (don't ask me why, okay)... can you help her recover her password?

The dump file is **HUGE**. From the start, it seems that this is a dump of *LSASS* (Local Security Authority Subsystem Service). LSASS dumps are known to leak credentials, hence this is perfect. Typically *mimikatz* is used, but on linux, the alternative is [pypykatz](https://github.com/skelsec/pypykatz). Using the `pypykatz lsa minidump` option, the password reveals itself as a flag. Now to save space and delete the dump....

