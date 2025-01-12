---
title:          "No need for Brutus (Huntress CTF 2024)"
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

> Author: @aenygma
>
> A simple message for you to decipher:
>
> squiqhyiiycfbudeduutvehrhkjki
>
> Submit the original plaintext hashed with MD5, wrapped between the usual flag format: flag{}

In hindsight, **Brutus** is a big flag HAHAHAH but when I looked at this string, I saw some interesting clues:

- repeated letters like *ii* and *uu*
- the letters that appear like *y* and *k* at one part but not throughout
- all alphabets, no numbers or symbols

This has to be a shift-cipher. I had a tummy ache, so while on Neptune's throne I copied the text and searched for an online cipher app, [this one in particular](https://cryptii.com/pipes/caesar-cipher). I pasted, and then I slowly incremented the shift count one by one. At 16 (a -> q), I suddenly saw a _caesar_ in the plaintext output. I had accidentally incremented so i went back and yup!

**caesarissimplenoneedforbrutus**

I piped this into the `md5sum` to get the hash and inputted the flag, according to the instructions.

