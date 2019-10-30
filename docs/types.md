---
layout: docs
title: Documentation
subtitle: Types
---

Tablescript has standard JavaScript-y types including strings, numbers, booleans, and functions. It also has built-in support for table types and dice literals for content generation.

## String

Tablescript supports `'single-quoted strings'` and `"double-quoted strings"`. These work like they do in JavaScript and support escaping characters if necessary.

{% capture code %}
print('And I said, "Hey! What a wonderful kind of day."');
print("And I said, \"Hey! What a wonderful kind of day.\"");
print('I can\'t believe it\'s not JavaScript!');
print("I can't believe it's not JavaScript!");
{% endcapture %}
{% include code.html code=code %}

### Template Strings

Tablescript also supports `` `back-tick template strings` `` for interpolation. Inside a template string, inject arbitrary Tablescript expressions using `${ ... }`.

{% capture code %}
print(`You found ${ 3d10 * 100 }gp!`);
print(`A ${ choose(['red', 'green', 'blue', 'purple']) } dragon!`);
{% endcapture %}
{% include code.html code=code %}

### Operations

Strings can be indexed (starting with 0):

{% capture code %}
name = 'Joe Schmoe';
print(name[2]); # >> e
{% endcapture %}
{% include code.html code=code %}

Strings can be reverse-indexed (starting with -1):

{% capture code %}
name = 'Joe Schmoe';
print(name[-2]); # >> o
{% endcapture %}
{% include code.html code=code %}

Strings indexed beyond the bounds are undefined:

{% capture code %}
name = 'Joe Schmoe';
print(name[100]); # >> undefined
{% endcapture %}
{% include code.html code=code %}

Strings can be concatenated:

{% capture code %}
first_name = 'Joe';
last_name = 'Schmoe';
print(first_name + ' ' + last_name); # >> Joe Schmoe
{% endcapture %}
{% include code.html code=code %}

...though it's better to use template strings:

{% capture code %}
first_name = 'Joe';
last_name = 'Schmoe';
print(`${first_name} ${last_name}`); # >> Joe Schmoe
{% endcapture %}
{% include code.html code=code %}

Strings can be multiplied:

{% capture code %}
print('sneak attack ' * 3); # >> sneak attack sneak attack sneak attack
{% endcapture %}
{% include code.html code=code %}

## Number

Tablescript supports Javascript-y numbers like integers and floats.

{% capture code %}
price = 120;
tax_rate = 31.4159;
tax = price * (tax_rate / 100);
total = price + tax;
print(`You owe ${ total }gp`);
{% endcapture %}
{% include code.html code=code %}

You can convert from string to number with the `int()` built-in.

{% capture code %}
a_number = '3.14159';
numberethized = int(a_number);
{% endcapture %}
{% include code.html code=code %}

Tablescript does not support scientific or engineering notation. If you need those types of numbers, Tablescript might not be the right tool for the job.

## Boolean

Tablescript supports boolean values: either `true` or `false`.

{% capture code %}
a = true;
b = false;
c = a or b;
assert(c == true);
d = a and b;
assert(d == false);
{% endcapture %}
{% include code.html code=code %}

## Array

Tablescript supports arrays of values and a variety of operations on those arrays.

### Methods

Arrays have built-in methods for manipulating them. Call array methods like this:

{% capture code %}
a = [4, 2, 7, 19, 3];
print(a.sort());    # >> [2, 3, 4, 7, 19]
print(a.reverse()); # >> [3, 19, 7, 2, 4]
{% endcapture %}
{% include code.html code=code %}

#### append(i)

Returns a new array with `i` appended to the end of the old array.

{% capture code %}
a = [1, 2, 3, 4, 5];
print(a.append(6)); # >> [1, 2, 3, 4, 5, 6]
{% endcapture %}
{% include code.html code=code %}

#### choose()

Returns a randomly selected entry from the array.

{% capture code %}
a = ['red', 'green', 'blue', 'yellow', 'black'];
print(a.choose()); # >> blue
{% endcapture %}
{% include code.html code=code %}

#### countBy(f)

Returns an object where the keys are the result of calling `f(entry)` for each array entry, and the values are the count of the number of array entries that return the same key.

{% capture code %}
a = [1, 2, 3, 4, 5, 6, 7];
f = fn(n) n % 2 == 0 ? 'even' : 'odd';
print(a.countBy(f)); # >> { 'odd': 4, 'even': 3 }
{% endcapture %}
{% include code.html code=code %}

#### each(f)

Calls `f(entry)` for each array entry, and returns the value of the last call.

{% capture code %}
a = [1, 2, 3, 4, 5, 6, 7];
f = fn(n) print(n);
v = a.each(f);  # >> 1, 2, 3, 4, 5, 6, 7
print(v);       # >> 7
{% endcapture %}
{% include code.html code=code %}

#### every(f)

Returns `true` if for every array entry, `f(entry)` returns true.

{% capture code %}
a = [2, 4, 6, 8, 10];
is_even = fn(n) n % 2 == 0;
is_less_than_10 = fn(n) n < 10;
print(a.every(is_even));          # >> true
print(a.every(is_less_than_10));  # >> false
{% endcapture %}
{% include code.html code=code %}

#### some(f)

Returns `true` if for at least 1 array entry, `f(entry)` returns true.

{% capture code %}
a = [2, 4, 6, 8, 10];
at_least_10 = fn(n) n >= 10;
is_odd = fn(n) n % 2 != 0;
print(a.some(at_least_10)); # >> true
print(a.some(is_odd));      # >> false
{% endcapture %}
{% include code.html code=code %}

#### filter
#### includes
#### indexOf
#### find
#### findIndex
#### length
#### join
#### map
#### reduce
#### reverse
#### slice
#### sort
#### unique

## Object

## Function

## Table

## Dice Literals

Tablescript supports dice literals in mathematical expressions. For example:

{% capture code %}
str = 4d6d1;            # 4d6 drop the low die
target = d5;            # select from an odd number of targets
attack = 2d20k1;        # 2 x d20 and only keep the highest
damage = 2d12 + d6 + 3; # combine dice and math
{% endcapture %}
{% include code.html code=code %}

The dice format looks like this:

    <count>d<sides><modifiers>

where `count` is the optional number of dice to roll, `sides` is the number of theoretical sides on the die, and `modifiers` is a combination of the following:

* `d` - drop the lowest die
* `d1`, `d2`, etc. - drop a number of lowest dice
* `dl1`, `dl2`, etc. - also drop a number of lowest dice
* `dh1`, `dh2`, etc. - drop a number of highest dice
* `k` - keep the highest die
* `k1`, `k2`, etc. - keep a number of highest dice
* `kh1`, `kh2`, etc. - also keep a number of highest dice
* `kl1`, `kl2`, etc. - keep a number of lowest dice
* `r1` - re-roll 1s
* `r<3` - re-roll 1s and 2s
* `r>19` - re-roll 20s (on a d20 for instance)

Other examples include:

* `d6` (`count` is optional)
* `3d6`
* `4d6d` (4d6 drop the lowest)
* `2d20dr<3` (2 d20s, re-roll 1s and 2s, drop the lowest result)

`sides` can also be `F` to roll Fate/Fudge dice.

* `dF`
* `4dF`

Roll20-style formats are largely supported. For more details, see [the Roll20 documentation](https://wiki.roll20.net/Dice_Reference#Roll20_Dice_Specification).

## Undefined

Uninitialized variables are `undefined`.

{% capture code %}
assert(x == undefined);
assert(undefined == undefined);
{% endcapture %}
{% include code.html code=code %}
