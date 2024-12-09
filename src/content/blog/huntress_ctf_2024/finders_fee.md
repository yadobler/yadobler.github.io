---
title:          "Finder's Fee  (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
hideListing: true
---

> Author: @JohnHammond
> 
> You gotta make sure the people who find stuff for you are rewarded well!
> 
> Escalate your privileges and uncover the flag.txt in the finder user's home directory.

This took me some time because I was careless. The first thing to try is to find a `SUID` or `SGID` file. I kept trying to search and search but no file with `SUID` set was helpful. I started to try all possible loopholes and was about to give up.

Then I reread the prompt. "people who ***FIND*** stuff ...".

I immediately ran `ls -l` on `find` after using `which find` to get its path.

```
-rwxr-sr-x 1 root finder 204264 Apr  8  2024 /usr/bin/find
```

My God. That `s` bit is signalling `SGID` is set. I felt so dumb for searching `SUID` that I did not check the `SGID` bit also. Anyways, I used the following command and got the flag.

```sh
find /home/finder -name flag.txt -exec cat {} \;
```

