# asyncpipe

Compose asynchronous functions in JavaScript

[![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
[![Maintainability][maintainability-image]][maintainability-url]

`asyncpipe` composes asynchronous functions, a perfect fit for functional
programming with Promises or `async`/`await`. It was inspired by `lodash.flow`,
which is excellent but does not support functions that return Promises.

# Is this production ready?

Yes. This module:

* [is small](lib/index.js)
* [is tested with continuous integration](test)
* [works on Node.js v4+](.travis.yml)
* does not need to be built/transpiled
* [does not have any production dependencies](package.json)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install asyncpipe
```

## API

```js
var asyncpipe = require('asyncpipe');
```

### asyncpipe(func1, func2, ...)

Compose an asynchronous function from the series of input arguments (`func1`,
`func2`, ...).

Any error thrown within the series of async functions will be thrown by the
composed function.

## Example

```js
const asyncpipe = require('asyncpipe');

(async () => {
  const a = x => x + 1;
  const b = x => Promise.resolve(x * 2);
  const c = async x => {
    await someExternalService(x);
    return x;
  };

  const result = await asyncpipe(a, b, c)(99);
  console.log(result); // PRINTS: 200
})();
```

[npm-image]: https://img.shields.io/npm/v/asyncpipe.svg
[npm-url]: https://npmjs.org/package/asyncpipe
[travis-image]: https://travis-ci.org/HiFaraz/asyncpipe.svg?branch=master
[travis-url]: https://travis-ci.org/HiFaraz/asyncpipe
[maintainability-image]: https://api.codeclimate.com/v1/badges/c7e61e4de474c6b264dc/maintainability
[maintainability-url]: https://codeclimate.com/github/HiFaraz/asyncpipe/maintainability
