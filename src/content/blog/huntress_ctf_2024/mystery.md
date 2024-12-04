---
title:          "Mystery (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
---

> Author: Michael Orlino
>
> Someone sent this to me...
> such enigma, such mystery:
>
> ``` rkenr wozec gtrfl obbur bfgma fkgyq ctkvq zeucz hlvwx yyzat zbvns kgyyd sthmi vsifc ovexl zzdqv slyir nwqoj igxuu kdqgr fdbbd njppc mujyy wwcoy ```
>
> Settings as below:
>  - 3 Rotor Model
>  - Rotor 1: VI, Initial: A, Ring A
>  - Rotor 2: I, Initial: Q, Ring A
>  - Rotor 3: III, Initial L, Ring A
>  - Reflector: UKW B
>  - Plugboard: BQ CR DI EJ KW MT OS PX UZ GH

Seems like the Enigma machine used in World War 2. Anyways, using [cryptii](https://cryptii.com/pipes/enigma-machine), the settings by default were already set. The result reads:

> message wrapped in light hidden deeper out of sight locking it more tight anyway your flag is here flag <32CHARACTERS>zzz

The `zzz` at the end did throw me off, having to manually count again and again to realise that it is probably padding.

