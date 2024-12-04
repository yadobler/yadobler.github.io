---
title:          "Strange Calc (Huntress CTF 2024)"
pubDate:        2024-11-27
updatedDate:    2024-12-04
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
---

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

# This is a work in progress, apologies!
