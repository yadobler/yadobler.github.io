---
title:          "Discount Programming Devices (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
---

> Author: @sudo_Rem
>
> I used a tool on the internet to obfuscate my script!
> But I lost it, and I don't know how to get it back.
> Maybe you can help?

The file given has a python extension. Inspecting it, it was a one liner (*effectively 2 lines if the semicolons were replaced with newlines*). The base64 decoder from *zlib* is first imported, then used to decode another base64 string that gets executed:

```py
_ = lambda __ : __import__('zlib').decompress(__import__('base64').b64decode(__[::-1]))

---
title:          "cleaned (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
---

# cleaned

def helper(x):
__import__('zlib').decompress(__import__('base64').b64decode(x[::-1]))
```

Something very sneaky here - the base64 string is **reversed** before decoding, with `[::-1]`.
I carefully removed the `exec` and printed out the result, then ran the file using python. It yields another string that executes the result of the above `_` function. I again carve out the `exec` and repeat, and repeats, and repeats, and repeats.... My biggest fear is my fatigue might accidentally run with `exec`. After 13 times of manually outputting the results and removing the `exec`, I decided to just use *bpython* to override the string with the results of the helper function, with `[11:-3]` to carve out the `exec`. Good call because it took another 38 iterations to reach something new. The last iteration was just a direct decode of a base64 string, yielding the flag.

