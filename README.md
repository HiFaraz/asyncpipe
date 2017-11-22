# asyncpipe

Compose asynchronous functions and Promises in JavaScript

[![Build Status][travis-image]][travis-url]

Like lodash.flow, but for Promises!

## Installation

`$ npm install --save asyncpipe`

## Example

```js
import asyncpipe from 'asyncpipe';

(async () => {
  const a = x => x + 1;
  const b = x => Promise.resolve(x * 2);
  const c = async x => {
    await ExternalService.store(x);
    return x;
  };

  const result = await asyncpipe(a, b, c)(99);
  console.log(result); // PRINTS: 200
})();
```

[travis-image]: https://travis-ci.org/HiFaraz/asyncpipe.svg?branch=master
[travis-url]: https://travis-ci.org/HiFaraz/asyncpipe
