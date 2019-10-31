---
layout: docs
title: Documentation
subtitle: Language
section: language
---

### Everything is an Expression!

Literally. Assignments, loops, even an entire script file. Everything is an expression. Tablescript evaluates each expression in turn. Some constructs (loops, conditionals, functions, tables, etc.) "return" values but really they don't; they *evaluate* to values.

This is important to know as a Tablescript developer.

You will find no `return` statements. Or `break` or `continue` inside loops. You might find you have to think about code differently to the way you'd write it in JavaScript or PHP.

For instance, in JavaScript you might write something like this:

    while (true) {
      doAThing();
      if (checkCondition()) {
        break;
      }
      doAnotherThing();
      ...
    }

In Tablescript, you would write the same thing as:

{% capture code %}
# This won't actually run without more definitions...
running = true;
while (running) {
  doAThing();
  if (checkCondition()) {
    running = false;
  } else {
    doAnotherThing();
    # ...
  };
};
{% endcapture %}
{% include code.html code=code %}

This might seem overly restrictive, but it really isn't. It actually encourages you to write more, smaller functions.

{% capture code %}
# This won't actually run without more definitions...
checkOrDo = fn(test, f) if (test) { false; } else { f(); true; };

checkAndDoMore = fn() checkOrDo(checkCondition(), fn() {
  doAnotherThing();
  # ...
});

running = true;
while (running) {
  doTheThing();
  running = checkAndDoMore();
};
{% endcapture %}
{% include code.html code=code %}

### Conditionals

Conditionals come in two varieties: if/else expressions, and ternary expressions.

#### If/Else

`if` and `else` work like in other languages, with the exception that the entire expression evaluates to the last value in the selected branch. For example:

{% capture code %}
x = 5;
result = if (x > 2) {
  'greater';
} else {
  'less than';
};
{% endcapture %}
{% include code.html code=code %}

`result` will be assigned the value 'greater' because `x` is greater than 2 and the first expression (the if clause) is evaluated. If `x` was 1, the else clause would be evaluated and `result` would be 'less than'.

#### Ternary ( ?: )

Ternary operators work like in other languages. If the test is true, the first clause is evaluated. Otherwise, the second clause is evaluated. For example:

{% capture code %}
x = 5;
result = (x > 2) ? 'greater' : 'less than';
{% endcapture %}
{% include code.html code=code %}

In most cases, using a ternary operator will make your code more succinct, but you risk confusing the reader if your tests or clauses are complex. They both accomplish the same thing and can often be swapped for the other with little effort.

{% capture code %}
x = 5;
result = if (x > 2) 'greater' else 'less than';
{% endcapture %}
{% include code.html code=code %}

### Loops

Tablescript supports 3 types of loops: for/in, while, and until.

#### For Loops

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

#### While Loops

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

#### Until Loops

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

### Operators

Standard math operators: `+`, `-`, `*`, `/`, and `%`.

Standard logic operators: `and`, `or`, and `not`.

Standard comparison operators: `==`, `!=`, `<`, `>`, `<=`, and `>=`.

### Comments

### Variables

### Functions

### Scope and Closures
