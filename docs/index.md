---
layout: docs
title: Documentation
subtitle: Introduction
---

Tablescript is a simple scripting language with built-in support for random content generation. The current version allows tables - arrays of elements selected at random when a table is called like a function - and dice literals (e.g. 3d6+5).

The language grew out of a desire to have more random content more readily available when running role-playing games. For instance, it's jarring to the players and the narrative when the characters decide to visit a town that the GM hadn't prepared. With Tablescript (and a random town generation script), a GM can quickly produce enough narrative colour to maintain the illusion that the game world is alive and complete.

### General Concepts

Tablescript has standard types (number, string, boolean, object, array, undefined), first class functions, and first class tables.

A simple script might look like this:

```
join_and_capitalize = fn(words) { words.map(fn(w) { w.capitalize() }).join(' ') }
print(join_and_capitalize(['green', 'dragon', 'inn']))

>> "Green Dragon Inn"
```

(Tablescript has several built-in functions - `print()` is one of them.)

Tablescript has two types of tables: a `choice` where each entry has the same probability, and a `table` where each entry has custom probabilities.

A simple `choice` table might look like this:

```
treasure = choice {
  '100gp'
  'magic sword'
  'healing potion'
  'a rock'
}
```

To use the table, call it like a function:

```
print(treasure())

>> "magic sword"
```

You can make complex tables by adding scripting elements:

```
potions = choice {
  'healing'
  'super healing'
  'super duper healing'
  'useless'
}

treasure = choice {
  3d6 * 10 + 'gp'
  'magic ' + choose(['sword', 'dagger', 'beans'])
  potions() + ' potion'
}
```

Tables (`table`) can also have entries with different probabilities:

```
wandering_monsters = table {
  1-5: 'goblins'
  6-9: 'orcs'
  10: 'ogre'
}
```

Tablescript has only expressions - no statements. Every expression evaluates to a value. If/else expressions are evaluated the same way math is:

```
bonus = if (character.class == 'fighter') {
  4
} else {
  2
}
```

Functions automatically return the last value - there is no `return` statement:

```
calculate_bonus = fn (class) {
  if (class == 'fighter') {
    4
  } else {
    2
  }
}
```

### History

I first wrote [Tablescript in C++](https://github.com/jamiehale/tablescript). It was large (~10k lines) and terrible. Then I discovered Ruby and built [Tablescript.rb](https://github.com/jamiehale/tablescript.rb) in 756 lines. It served the purpose, but was just a DSL and scripts needed to conform to Ruby structures.

In 2017, I took a job as a Javascript developer for a world-class front-end web development company. Before then, I wasn't a big fan of Javascript, and more importantly didn't understand it. Now, as I've learned from some of the best, I've come to love the language and ecosystem. Since my intent was always for this to be built into a campaign management tool, I decided to migrate the concept to Javascript. This is the result.