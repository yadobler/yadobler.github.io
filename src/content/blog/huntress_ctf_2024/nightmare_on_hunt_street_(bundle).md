---
title:          "Nightmare on Hunt Street (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
---

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

