---
title:          "Zimmer Down (Huntress CTF 2024)"
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

> Author: @sudo_Rem
>
> A user interacted with a suspicious file on one of our hosts.
> The only thing we managed to grab was the user's registry hive.
> Are they hiding any secrets?

This took a lot of searching, and rethinking. Firstly trying strings yielded nothing easy to crack. The shortcut file names were funny though. 

- `How to find flags.mp4.lnk`
- `notthe_flag.lnk`
- `john_and_i_at_dinner.lnk`
- `john_and_i_on_the_beach.lnk`
- `just_john.lnk`
- `huntress_beats_to_study_and_relax_to.mp3.lnk`

There was a lot of figuring out what I can try to find with `chntpw`, which allows manipulation of registry hive data. However I couldn't get it to dump any data, and manually checking each key is going to take forever. So I went back to the prompt - it mentioned how the user interacted with something and they managed to grab the hive "just in time". So it must be something along the path of Explorer and recent files. Having seen all the `.lnk` shortcut files, I decided to take a look at strings once again, hoping to maybe see what recent apps were opened by the shortcut files.

After a few dozen `.lnks`, I spotted something. A file name that was encoded alphanumerically (looked like Base64), with the extension `.b62.lnk.` The `.lnk` denotes it is a shortcut, but the extension of the original file, `b62`, made lights go off in my mind. I remembered while trying to decode the files for [[Ran Somewhere]], I accidentally scanned for the file type of one of the encoded files without decoding it first from Base64. It said it was a *Base64 encoded JPEG* with the possible extensions `.b64`. So I figured this *b62 file*'s name would also be in Base62. I threw it into [CyberChef](https://gchq.github.io/CyberChef), and out came the flag.

