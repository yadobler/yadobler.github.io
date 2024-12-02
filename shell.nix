{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
    packages = with pkgs; [
        nodejs_23

    ];

    shellHook = ''

            exec zsh

    '';
}
