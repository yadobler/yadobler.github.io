---
title:          "MatryoshkaQR (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
hideListing: true
---

>Author: @JohnHammond
>Wow! This is a big QR code! I wonder what it says...?

Huge QR code! Using `zbarimg` I first decoded the image to reveal another PNG file - except it is an ascii text string with the starting magic number header `0x89 P N G`. If you run `file` on this, you get `ASCII text, with very long lines (943)`. This is an example of the outputted string:

```
x89PNGrnx1anx00x00x00rIHDRx00x00x00
```

It was irritating but a little bit of python can solve this. I imported the result into a string in python. Then with the **codecs** library, escape the string with `codecs.escape_decode(x)` and then write back the `byte string` using the `wb` flag.

This gives a proper PNG file: `PNG image data, 39 x 39, 1-bit grayscale, non-interlaced`. Yes. I view it and it is another QR code! This time much much smaller. Running `zbarimg` on this gives another ascii text! Thankfully this is the actual flag. yay.

