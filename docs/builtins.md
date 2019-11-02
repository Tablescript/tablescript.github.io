---
layout: docs
title: Documentation
subtitle: Built-Ins
section: builtins
---

Tablescript comes with a large number of built-in functions.

### Basic

#### import

`import(module, arg1, ...)`

The `import` built-in loads and evaluates another module. For example:

{% capture code %}
helpers = import('./helpers');
names = import('names');
last_names = import('names/last-names');
{% endcapture %}
{% include code.html code=code %}

If the module name is pathed (ie. starts with `/`, `./`, or `../`), Tablescript will import from a path relative to the script being evaluated.

If the module name is unpathed, Tablescript will import from a root `bundles` path, or relative to any paths defined in the `TS_PATH` environment variable.

#### range

`range(start, end, step)`

### Math
### Gaming
### Functional Programming
