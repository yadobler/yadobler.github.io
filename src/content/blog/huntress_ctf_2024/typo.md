---
title:          "Typo (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
---

> Author: @JohnHammond
> 
> Gosh darnit, I keep entering a typo in my Linux command prompt!

Firstly, trying to ssh with `ssh -p <PORT> user@challenge.ctf.games` gives an error:

```
Error opening terminal: foot.
```

I am using *foot* as my terminal emulator, so to fix it I need to set the variable `$TERM` to `xterm-256color`: 

```sh
TERM=xterm-256color ssh -p <PORT> user@challenge.ctf.games
```

I am greeted with a *Choo Choo train*! This is the classic `sl` command, for when one types `ls` wrongly. This is probably happening because the `.bashrc_profile` or `.bashrc` executes `sl` wrongly. I am immediately thrown out afterwards. To overcome this, either hack the server and get rid of that, or make ssh execute another program instead, with the `-t` flag. I run a new shell, which would not load the `bashrc_profile`. 

```sh
TERM=xterm-256color ssh -p <PORT> user@challenge.ctf.games -t /bin/sh
```

I get in, and `ls` correctly. The flag file is there.

