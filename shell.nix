{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = with pkgs; [
    nodejs_23
    npm-check-updates
  ];

  NODE_OPTIONS = "--no-deprecation";
}
