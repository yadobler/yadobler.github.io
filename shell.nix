{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  packages = with pkgs; [
    nodejs_23
    npm-check-updates
    bootstrap-studio
  ];

  NODE_OPTIONS = "--no-deprecation";
}
