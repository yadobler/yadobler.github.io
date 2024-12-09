---
title:          "Malibu (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
hideListing: true
---

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

