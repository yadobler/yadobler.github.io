{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = with pkgs; [
    nodejs_23
    npm-check-updates
  ];

  shellHook = ''
            exec zsh
            '';
}
