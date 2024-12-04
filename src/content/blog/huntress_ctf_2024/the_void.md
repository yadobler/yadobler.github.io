---
title:          "The Void (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
---

> Author: @JohnHammond#6971
> 
> When you gaze long into the void, the void gazes also into you...

Connecting to this results in the shell getting spammed with *nothing*. I redirected the output to a file, and it just kept growing and growing. Eventually I killed it and tried to see the hexdump, passing it to `head` to only see a bit of it. Strangely it was `1b 5b 33 30 3b 34 30 6d 20` being repeated over and over. The ascii view showed some brackets and *m*s - indicative of *ANSI escape sequence*. I did not feel motivated to decode it, so I asked ChatGPT. It gave me this breakdown:

- `1b`: ESC (Escape character)
- `[`: Beginning of an ANSI control sequence
- `30;40`: Control codes for setting text colors
- `30`: Set text color to black
- `40`: Set background color to black
- `m`: End of the control sequence
- `20`: A space character

It gave this gem: `'s/\x1b\[[0-9;]*m//g'`. Using this, I managed to `sed` the output file to remove the escape characters and extract any non sequence characters and it was just the flag, padded with plenty of spaces.

