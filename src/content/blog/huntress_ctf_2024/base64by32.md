---
title:          "Base64by32 (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
---

> Author: @JohnHammond
> This is a dumb challenge. I'm sorry.

The title screams **Base64** so I started by running the file with `base64 -d`. Another base64 file. Trying to run `base32 -d` gives an error since the text is encoded in Base64. '64by32' reminds me of _2 by 4s_, also written _2x4s_. Ah! I wrote a little script to decode the file 32 times:

```sh
for i in {1..32}; do base64 -d "stage$i" > "stage$(($i + 1))"; done
```

The file `stage33` (ah you thought `stage32`, but nope!) had the flag.

