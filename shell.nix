{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = with pkgs; [
    nodejs_23
    npm-check-updates
  ];

  shellHook = ''
            export NODE_OPTIONS="--no-deprecation"
            exec zsh
            '';
}
