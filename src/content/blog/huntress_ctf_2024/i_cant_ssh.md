---
title:          "I can't SSH (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
hideListing: true
---

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

