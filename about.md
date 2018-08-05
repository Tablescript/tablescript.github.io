---
layout: page
title: About
permalink: /about
---

Tablescript is an idea I had a _looooong_ time ago. It started with questions like these:

> _"What if I could very quickly create Dungeons &amp; Dragons NPCs?"_

> _"What if I could roll random treasure without flipping pages?"_

> _"What if I could combine multiple sources and instantly generate random but useful descriptions of entire towns?"_

> _"What if I could do all these things in the context of a campaign design and management tool?"_

I wrote the first version of Tablescript in __C++__ somewhere between 2001 and 2004. It was large (~10k lines) and mostly terrible. I never really got it to the point where it was useful, but I kept the source around anyways. You can find it [here](https://github.com/Tablescript/tablescript).

And then somewhere around 2005 I discovered __Ruby__ and fell in love. With [Tablescript.rb](https://github.com/Tablescript/tablescript.rb), I replaced 10k lines of C++ with 756 lines of Ruby. Tablescript.rb is a simple DSL that overlays the Ruby language, requiring you to write valid Ruby - which isn't so bad because Ruby is lovely. It wouldn't, however, run in a browser.

In 2017 I learned that Javascript wasn't so terrible if you took the time to actually learn it. I'm still learning, but I've managed to scrap together Tablescript.js - a standalone scripting language that is both __browser-embeddable__ and available as a __command-line tool__.
