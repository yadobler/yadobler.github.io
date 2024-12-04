---
title:          "Red Phish Blue Phish (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024 SMTP
---

> Author: Truman Kain (@truman.huntress), Adam Rice (@adam.huntress)
> You are to conduct a phishing excercise against our client, Pyrch Data.
>
> We've identified the Marketing Director, Sarah Williams (swilliams@pyrchdata.com), as a user susceptible to phishing.
>
> Are you able to successfully phish her? Remember your OSINT ;)
>
> NOTE: The port that becomes accessible upon challenge deployment is an SMTP server. Please use this for sending any phishing emails.
>
> You will not receive an email/human response as the mail infrastructure for this challenge is emulated.

This was very very fun! I learnt a lot on SMTP conversations. I first did some OSINT. A quick google yields the following website: `pyrchdata.com`.

![Image of Webpage](./images/Red_Phish_Blue_Phish_20241005-142041-original.png)

Very generic, but the disclaimer at the end was assuring:

> This site was created for the Huntress Cybersecurity Awareness Month CTF.

Going to the *meet the team* page, I saw our poor target, Sarah Williams (if you reverse search, the image is just a generic stock photo). I saw the perfect person to impersonate: **Joe Daveren** (_IT Security Manager_). Any jargon I throw at Williams signed off as the IT security manager would definitely work.

![Image of About Us](./images/Red_Phish_Blue_Phish_20241005-142207-original.png)

The next part was trying to understand SMTP server conversations. I had to read up and honestly it was fun! I tried to manually key in one by one, but it was painful. So based on [this helpful StackOverflow post on SMTP over NetCat](https://stackoverflow.com/questions/44250054/send-email-with-netcat), I drafted a SMTP input text file, and a quick function to slowly pipe the text line by line to netcat since it will take awhile for the SMTP to receive and acknowledge each line sent over:

```sh
function slowcat(){ cat "$1" | while read; do sleep .05; echo "$REPLY"; done; }
```

This was what was sent over:
```
HELO challenge.ctf.games
MAIL FROM:<jdaveren@pyrchdata.com>
RCPT TO:<swilliams@pyrchdata.com>
DATA
From: [IT Security] <jdaveren@pyrchdata.com>
To: <swilliams@pyrchdata.com>
Date: Fri, 4 Oct 2024 - 04:09:11 +0000
Subject: Upgrading 2FA for Infrastructure Security

Dear Sarah Williams,

Hope this email finds you well. My phone is down so I have to draft this quick email. Please forgive any formatting and grammar!

For our upcoming IT Infrastructure Security Update, we require your cooperation in verifying your Email Login Username and Password. This is to ensure that the system security infrastructure is working as intended. Further next week, I will personally be addressing everyone in the team about the new changes.

Have a good day!

Best Regards,
Joe Deveren
IT Security Manager


.
QUIT

```

Yes very creative eheh. `HELO`, `MAIL`, `RCPT`, `DATA` (terminated with `<CR><LF>.<CR><LF>`), and `QUIT` are SMTP commands. At first, the system just lagged, but then I realised my newlines are not `<CR><LF>` as expected, so the SMTP server still thinks I am entering the DATA segment. I had to run `awk '{printf "%srn", $0}'` to convert the newlines.

Finally, when I pipe the `slowcat` function into `nc`, I got the response I was waiting for: **250 Ok.** and then the flag.

