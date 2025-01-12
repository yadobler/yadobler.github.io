---
title:          "Too Many Bits (Huntress CTF 2024)"
pubDate:        2024-11-27
tags:
    - CTF
    - ComSec
    - CyberSecurity
    - Write-up
    - Huntress
    - Huntress-CTF-2024
unlist:    true
draft:     false
description: ""
heroImage: ""
author: "yukna"
---

>Author: @JohnHammond
>What do all these ones and zero's mean!?! We are in the Warmups category after all...

```
01100110 01101100 01100001 01100111 01111011 01100100 00110000 00110001 00110100 00110111 00110001 00110111 00110000 00110010 01100001 00110001 00110000 00110001 00110011 00110100 01100011 01100100 01100001 01100100 00110001 01100100 01100100 01100100 01100101 00110000 00110110 00110110 00110111 00111000 01100110 00110010 01100110 01111101
```

I opened bpython and pasted the binary string into a variable called `binary`.

I then split them and using list comprehension, converted the binary as decimal integer with `int(x,2)`, then to ascii with `chr(x)` and then joint them together to get a flag:
```py
''.join([chr(int(a,2)) for a in binary.split(' ')])
```

