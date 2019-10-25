---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

Tablescript is a simple __programming language__ designed to help players and gamemasters __generate content__ for __roleplaying games__.

Roleplaying games are filled with tables of random _things_: treasure, monsters, room contents, etc. Sometimes these tables can get complicated. Or hard to keep track of.

Tablescript allows you to turn these tables of random _things_ into small scripts that when run produce a random result as if you had rolled on the tables.

<div class="flex flex-row justify-between">
  <div class="w-50">
    <p>For example, a table like this...</p>
    <table class="collapse w-90">
      <thead class="bg-light-gray bb">
        <tr>
          <th class="tc f4 pb2" colspan="2">Wandering Monsters</th>
        </tr>
        <tr>
          <th class="pl3 tc">Roll</th>
          <th class="pl3 tl">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr class="striped--near-white">
          <td class="pl3 tc">1-3</td>
          <td class="pl3 tl">d6 Goblins</td>
        </tr>
        <tr class="striped--near-white">
          <td class="pl3 tc">4-7</td>
          <td class="pl3 tl">d3 Orcs</td>
        </tr>
        <tr class="striped--near-white">
          <td class="pl3 tc">8-9</td>
          <td class="pl3 tl">2d4 Dire Gerbils</td>
        </tr>
        <tr class="striped--near-white">
          <td class="pl3 tc">10</td>
          <td class="pl3 tl">Ancient Red Dragon</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="w-50">
    <p>... becomes a script like this...</p>
    <pre class="bg-light-gray pa2 f6 w-90">
wandering_monsters = table {
  1-3: ${ d6 } Goblins
  4-7: ${ d3 } Orcs
  8-9: ${ 2d4 } Dire Gerbils
  10: Ancient Red Dragon
};

print(wandering_monsters());

>> 3 Dire Gerbils
</pre>
  </div>
</div>

<div class="flex justify-around mv2">
  <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-red" href="/fiddle">Try it out!</a>
  <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-red" href="https://www.npmjs.com/package/tablescript.js">Download it!</a>
  <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-red" href="https://github.com/Tablescript/tablescript.js">Contribute!</a>
</div>
