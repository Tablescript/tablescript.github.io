---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

Tablescript is a simple __programming language__ designed to help players and gamemasters __generate content__ for __roleplaying games__.

Roleplaying games are filled with tables of random _things_: treasure, monsters, room contents, etc. Sometimes these tables can get complicated. Or hard to keep track of.

Tablescript allows you to turn these tables of random _things_ into small scripts that when run produce a random result as if you had rolled on the tables.

For example:

    wandering_monsters = table {
      1-3: "#{ d6 } Goblins"
      4-7: "#{ d3 } Orcs"
      8-9: "#{ 2d4 } Dire Gerbils"
      10: 'Ancient Red Dragon'
    }
    
    print(wandering_monsters())

* [Try it out!](/fiddle)
* [Download it!](https://www.npmjs.com/package/tablescript.js)
* [Fork it!](https://github.com/jamiehale/)
