---
layout: docs
title: Documentation
subtitle: Using Tablescript
section: usage
---

Tablescript comes in 2 forms: a command line program to run scripts, and a JavaScript package that can be embedded in other software.

### Installation

The command line interface (CLI) Tablescript interpreter can be installed as follows:

    $> npm install --global tablescript.js

This will install the Tablescript module in your global modules, and expose the `tablescript` command. After installing, run Tablescript like this:

    $> tablescript /path/to/script.tab

#### Prerequisites

In order for the installation above to work, you will need to have Node 10+ installed. If you don't have it already, follow [the instructions here](https://nodejs.org/en/download/package-manager/).

### Usage

Tablescript has 2 CLI modes: scripts from files, and REPL.

#### Running Script Files

From the command line, run script files like this:

    $> tablescript /path/to/script.tab

Script files should be named with the `.tab` extension.

The interpreter will run the script, printing any output to the console (`stdout`).

#### REPL

REPL (read-evaluate-print loop) mode allows you to play with the language in a sandbox environment without having to create a script file. Run it like this:

    $> tablescript
    Tablescript v0.6.6
    >

At the prompt, type a valid Tablescript expression, and the interpreter will evaluate it and print the result.

    > 4d6d;
    13
    > bonus = 3;
    3
    > damage = 2d12 + bonus;
    15
    >

### Command Line Options

The Tablescript interpreter has several command line options for adjusting its behaviour. They are the following:

#### `-V` or `--version`

Prints the version of the interpreter.

#### `-p` or `--print-last-value`

If this flag is set, Tablescript prints (to `stdout`) the value of the last expression evaluated.

By default, the last value is not printed.

#### `-V` or `--no-validate-tables`

If this flag is set, Tablescript will not validate `table` definitions. Validation ensures there are no breaks in allowable rolls. For example, the following `table` is invalid:

{% capture code %}
t = table {
  1-3: a goblin
  5:   an orc
  6:   an ancient red dragon
};
{% endcapture %}
{% include code.html code=code %}

It doesn't include an entry for a roll of 4. By default, Tablescript will not allow this table to be defined.

#### `-c` or `--evaluate-callable-result`

If this flag is set, and the last expression evaluates to something that is callable (`function` or `table`), Tablescript will call it before exiting. This is useful for script separation and testing. For example:

{% capture code %}
table {
  1-3: a goblin
  4-5: an orc
  6:   an ancient red dragon
};
{% endcapture %}
{% include code.html code=code %}

This program only defines a table. It can be `import`ed into other scripts and used there, but if you just want to test this table, you can run it with the `-c` and `-p` flags:

    $> tablescript -c -p monsters.tab
    an ancient red dragon
    $>

By default, Tablescript does not call callable results.

#### `-l` or `--max-loop-count <count>`

By default, Tablescript will run `while` and `until` loops 100,000 times. After that, Tablescript throws an error. This prevents infinite loops taking over browsers. If you need to change this limit for any reason, set a new `count` using this option.

    $> tablescript -l 10000000 mine-bitcoin-really-slow.tab

#### `-s` or `--max-stack-depth <count>`

By default, Tablescript will allow scripts to grow the call stack to 200 frames. After that, Tablescript throws an error. This prevents infinite recursion from eating memory. If you need to change this limit for any reason, set a new `count` using this option.

    $> tablscript -s 800 calculate-chess-move.tab

#### `-d` or `--debug`

This flag enables JavaScript/Node error messages when something goes wrong. It will only be useful for debugging the Tablescript interpreter itself. By default, Tablescript shows error messages useful to the writer of Tablescript scripts.

#### `-h` or `--help`

This flag dumps the command line options.
