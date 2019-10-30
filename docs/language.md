---
layout: docs
title: Documentation
subtitle: Language
---

## Everything is an Expression!

## Conditionals

## Loops

Tablescript supports 3 types of loops: for/in, while, and until.

### For Loops

Tablescript supports bounded loops over arrays.

{% capture code %}
a = [1, 2, 3, 4, 5];
for (i in a) {
  print(i);
}; # >> 1, 2, 3, 4, 5
{% endcapture %}
{% include code.html code=code %}

For loops are expressions, just like everything else. Their value is the value of the last expression evaluated inside the loop.

{% capture code %}
a = [1, 2, 3, 4, 5];
x = for (i in a) {
  i % 2 == 0;
};
print(x); # >> false
{% endcapture %}
{% include code.html code=code %}

### While Loops

While loops are unbounded and loop until their test condition is `false`.

{% capture code %}
count = 0;
while (count < 10) {
  print(count);
  count += 1;
}; # >> 0, 1, 2, ... 9
{% endcapture %}
{% include code.html code=code %}

While loops are also expressions and have the value of the last expression evaluated inside the loop.

{% capture code %}
count = 0;
x = while (count < 10) {
  count += 1;
};
print(x); # >> 10
{% endcapture %}
{% include code.html code=code %}

### Until Loops

Until loops are unbounded and loop until their test condition is `true`.

{% capture code %}
count = 0;
until (count == 10) {
  print(count);
  count += 1;
}; # >> 0, 1, 2, ... 9
{% endcapture %}
{% include code.html code=code %}

Until loops are also expressions and have the value of the last expression evaluated inside the loop.

{% capture code %}
count = 0;
x = until (count == 10) {
  count += 1;
};
print(x); # >> 10
{% endcapture %}
{% include code.html code=code %}

## Operators

Standard math operators: `+`, `-`, `*`, `/`, and `%`.

Standard logic operators: `and`, `or`, and `not`.

Standard comparison operators: `==`, `!=`, `<`, `>`, `<=`, and `>=`.

## Comments

## Variables

## Functions

## Scope and Closures
