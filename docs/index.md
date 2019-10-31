---
layout: docs
title: Documentation
subtitle: Introduction
section: intro
---

Tablescript is a simple scripting language with built-in support for random content generation. The current version allows tables - arrays of elements selected at random when a table is called like a function - and dice literals (e.g. 3d6+5).

The language grew out of a desire to have more random content more readily available when running role-playing games. For instance, it's jarring to the players and the narrative when the characters decide to visit a town that the GM hasn't prepared. With Tablescript (and a random town generation script), a GM can quickly produce enough narrative colour to maintain the illusion that the game world is alive and complete.

### Getting Started

Tablescript has standard types (`number`, `string`, `boolean`, `object`, `array`, `undefined`), first class `functions`, and first class `tables`.

A simple script might look like this:

{% capture code %}
join_and_capitalize = fn(words) {
  words.map(fn(w) w.capitalize()).join(' ');
};
print(join_and_capitalize(['green', 'dragon', 'inn']));
# >> "Green Dragon Inn"
{% endcapture %}
{% include code.html code=code %}

(Tablescript has several built-in functions - `print()` is one of them.)

Tablescript has two types of tables: a `choice` where each entry has the same probability, and a `table` where each entry has custom probabilities.

A simple `choice` table might look like this:

{% capture code %}
treasure = choice {
  100gp
  magic sword
  healing potion
  a rock
};
{% endcapture %}
{% include code.html code=code %}

To use the table, call it like you would a function:

{% capture code %}
treasure = choice {
  100gp
  magic sword
  healing potion
  a rock
};

print(treasure()); # >> "magic sword"
{% endcapture %}
{% include code.html code=code %}

You can make complex tables by adding scripting elements:

{% capture code %}
potions = choice {
  healing
  super healing
  super duper healing
  useless
};

treasure = choice {
  ${ 3d6 * 10 } gp
  magic ${ choose(['sword', 'dagger', 'beans']) }
  ${ potions() } potion
};
{% endcapture %}
{% include code.html code=code %}

Tables (`table`) can also have entries with different probabilities:

{% capture code %}
wandering_monsters = table {
  1-5: goblins
  6-9: orcs
  10:  ogre
};
{% endcapture %}
{% include code.html code=code %}

Both tables and choices can have arbitrary expressions as entries:

{% capture code %}
sword_bonus = table {
  1-10: > 1;
  11-14: > 2;
  15-17: > 3;
  18-19: > 4;
  20: > 5;
};

sword_adjectives = choice {
  > { value: 'holy', order: 1 };
  > { value: 'vorpal', order: 2 };
  > { value: 'dancing', order: 3 };
  > { value: 'luck', order: 4 };
};

treasure = table {
  1-99: nothing!
  100: > {
    count = d4;
    adjectives = sword_adjectives.unique(count)
      .sort(fn(a, b) a.order - b.order)
      .map(fn(a) a.value)
      .join(' ');
    `+${ sword_bonus() } ${ adjectives } blade`;
  }
};
{% endcapture %}
{% include code.html code=code %}

Tablescript has only expressions - no statements. Every expression evaluates to a value. If/else expressions are evaluated the same way math is:

{% capture code %}
character = {
  class: 'fighter'
};
# ...
bonus = if (character.class == 'fighter') {
  4;
} else {
  2;
};
{% endcapture %}
{% include code.html code=code %}

Functions automatically return the last value - there is no `return` statement:

{% capture code %}
calculate_bonus = fn (class) {
  if (class == 'fighter') {
    4;
  } else {
    2;
  };
};

print(calculate_bonus('fighter'));

# >> 4

print(calculate_bonus('clown'));

# >> 2
{% endcapture %}
{% include code.html code=code %}

Tablescript also has a conditional operator, so that example could be written much more succinctly:

{% capture code %}
calculate_bonus = fn (class) class == 'fighter' ? 4 : 2;

print(calculate_bonus('fighter'));

# >> 4

print(calculate_bonus('clown'));

# >> 2
{% endcapture %}
{% include code.html code=code %}
