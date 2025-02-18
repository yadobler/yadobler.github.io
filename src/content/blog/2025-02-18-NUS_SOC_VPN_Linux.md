---
title: "Accessing NUS SOC VPN on Linux (fortinet)"
author: "Yukna"
pubDate: 2025-02-18
modDate: 2025-02-18
heroImage: "../../assets/nus_soc_vpn.png"
description: "How to set up VPN for access to NUS School of Computing network"
tags: 
    - NUS 
    - NUSSOC
    - NixOs
    - Guide
    - VPN
unlist: False
draft: False
---

Hello people.

If you are on something like Arch or NixOs, and need access to fortinet but are met with effectively what is "good game, well played, you're on your own buddy", here's what I found to help me. (See if it exists in AUR or official repo / nix repo. If not, clone the repos and build with `cmake`.)
 
1.  Install openfortinet for VPN access: [https://github.com/adrienverge/openfortivpn/](https://github.com/adrienverge/openfortivpn/)
2.  Install openfortinet-webview for access to SAML login (to get that blue colour NUS login page): [https://github.com/gm-vm/openfortivpn-webview](https://github.com/gm-vm/openfortivpn-webview)
3.  Use the webview to obtain a SVPNCOOKIE that can then be passed to openfortinet

Here's a shell script:

```shell
#! /bin/sh
VPN_HOST="webvpn.comp.nus.edu.sg"
VPN_PORT="443"
export $(openfortivpn-webview "$VPN_HOST:$VPN_PORT" | rg "SVPNCOOKIE=.*")
sudo openfortivpn "$VPN_HOST:$VPN_PORT" --cookie=$SVPNCOOKIE
```

For nix uses, here's a `shell.nix` that can be executed with `nix shell`:

```nix
{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  buildInputs = with pkgs; [
    openfortivpn
    openfortivpn-webview-qt
  ];

  VPN_HOST="webvpn.comp.nus.edu.sg";
  VPN_PORT="443";
  shellHook = ''
    export $(openfortivpn-webview "$VPN_HOST:$VPN_PORT" | rg "SVPNCOOKIE=.*")
    sudo openfortivpn "$VPN_HOST:$VPN_PORT" --cookie=$SVPNCOOKIE;
  '';
}
```
