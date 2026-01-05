{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = with pkgs; [
    pnpm
    nodejs_24
    # npm-check-updates
    # bootstrap-studio
  ];

  NODE_OPTIONS = "--no-deprecation";
}
