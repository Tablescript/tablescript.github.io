---
layout: docs
title: Documentation
subtitle: Language Reference
---

# Types

## String

String work like most other languages. Single quotes or double quotes, whatever you like. Double-quoted strings use interpolation (see below) and so if performance is a concern, stick to single-quoted strings when possible.

{% capture code %}
name = 'Joe Schmoe'
class = "fighter"
{% endcapture %}
{% include code.html code=code %}

Strings have lengths:

{% capture code %}
print(name.length)

>> 10
{% endcapture %}
{% include code.html code=code %}

Strings can be indexed (starting with 0):

{% capture code %}
print(name[0])

>> J
{% endcapture %}
{% include code.html code=code %}

Strings can be reverse-indexed (starting with -1):

{% capture code %}
print(name[-1])

>> e
{% endcapture %}
{% include code.html code=code %}

Strings indexed beyond the bounds are undefined:

{% capture code %}
print(name[100])

>> undefined
{% endcapture %}
{% include code.html code=code %}

Strings can be concatenated:

{% capture code %}
first_name = 'Joe'
last_name = 'Schmoe'
print(first_name + ' ' + last_name)

>> Joe Schmoe
{% endcapture %}
{% include code.html code=code %}

Numbers get converted to strings when adding to strings:

{% capture code %}
print(99 + ' bottles of ale on the wall')

>> 99 bottles of ale on the wall
{% endcapture %}
{% include code.html code=code %}

Strings can be multiplied:

{% capture code %}
print('sneak attack ' * 3)

>> sneak attack sneak attack sneak attack
{% endcapture %}
{% include code.html code=code %}

Strings have a variety of build-in methods too:

{% capture code %}
name = 'Joe Schmoe'
print(name.split(' '))

>> ["Joe","Schmoe"]

print(name.startsWith('Joe'))

>> true

print(name.endsWith('DiMaggio'))

>> false

print(name.indexOf('S'))

>> 4

print(name.includes('ch'))

>> true

print(name.slice(4))

>> Schmoe

print(name.slice(4, 7))

>> Sch

print('*' + '   Padded   '.trim() + '*')
# .trimLeft()
# .trimRight()

>> *Padded*
{% endcapture %}
{% include code.html code=code %}

### String Interpolation

Double-quoted strings are treated as templates and anything inside `#{` and `}` is evaluated as a (mostly) standard expression.

{% capture code %}
strength = 16
print("Strength: #{strength}")

>> Strength: 16

print("Treasure: #{3d6 * 10}gp")

>> Treasure: 140gp

treasure = choice {
  'candy'
  'a sword'
  'a potion'
  'a rock'
}
print("Treasure: #{treasure()}")

>> Treasure: a sword

print("Treasure: #{3d6 * 10}gp and {2d10 * 100}sp")

>> Treasure: 80gp and 1300sp
{% endcapture %}
{% include code.html code=code %}

Template string expressions cannot include assignments or function or table definitions.

## Number

## Boolean

A boolean value can be `true` or `false`. Standard boolean logic operators (see below) are available.

## Undefined

`undefined` is more a value than a type. It can be compared to other values to test for things like undefined variables, undefined object properties, undefined array elements, and undefined table entries.

## Object

## Array

## Function

## Table

# Expressions

## if/else

## Math

## Logic

Standard logic operators: `and`, `or`, and `not`.

## Comparison

Standard comparison operators: `==`, `!=`, `<`, `>`, `<=`, and `>=`.

# System Object

## assert()

## choose()

## keys()

## print()

## range()

## require()
