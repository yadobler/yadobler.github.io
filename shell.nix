with import <nixpkgs> {};
pkgs.mkShell {
    buildInputs = with pkgs; [
        ruby_3_2
        libffi
    ];

    shellHook = ''
        export NIX_SHELL_TITLE=""
        export BUNDLE_PATH="${builtins.toString ./cache/BUNDLE}"
        export GEM_PATH="${builtins.toString ./cache/GEM}"
        export GEM_HOME="${builtins.toString ./cache}"
        exec zsh
        '';
}
