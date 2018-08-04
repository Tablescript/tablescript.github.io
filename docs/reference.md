---
layout: docs
title: Documentation
subtitle: Language Reference
---

# Types

## String

String work like most other languages. Single quotes or double quotes, whatever you like. Double-quoted strings use interpolation (see below) and so if performance is a concern, stick to single-quoted strings when possible.

```
name = 'Joe Schmoe'
class = "fighter"
```

Strings have lengths:

```
print(name.length)

>> 10
```

Strings can be indexed (starting with 0):

```
print(name[0])

>> J
```

Strings can be reverse-indexed (starting with -1):

```
print(name[-1])

>> e
```

Strings indexed beyond the bounds are undefined:

```
print(name[100])

>> undefined
```

Strings can be concatenated:

```
first_name = 'Joe'
last_name = 'Schmoe'
print(first_name + ' ' + last_name)

>> Joe Schmoe
```

Numbers get converted to strings when adding to strings:

```
print(99 + ' bottles of ale on the wall')

>> 99 bottles of ale on the wall
```

Strings can be multiplied:

```
print('sneak attack ' * 3)

>> sneak attack sneak attack sneak attack
```

Strings have a variety of build-in methods too:

```
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
```

### String Interpolation

Double-quoted strings are treated as templates and anything inside `#{` and `}` is evaluated as a (mostly) standard expression.

```
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
```

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
