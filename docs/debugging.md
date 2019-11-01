---
layout: docs
title: Documentation
subtitle: Debugging
section: debugging
---

Sometimes it's hard to figure out what your errors are. This section identifies common problems and what you can do to fix them.

### Common Problems

#### RuntimeError: UNDEFINED is not callable at: ...

This probably means you tried to call a function that isn't defined. If you're calling a built-in function, check to make sure you've spelled it correctly with the correct cases. `typeof(x)` is not the same as `typeOf(x)` - the first will result in the error, the second will not.

#### SyntaxError: Expected "(", ".", ";", "?", "[", "and", "or", addition or subtraction operator, assignment operator, comment, end of line, equality operator, multiply, divide, or modulo operator, relational operator, or whitespace but "..." found. at: ...

You probably forgot a `;` at the end of an expression.
