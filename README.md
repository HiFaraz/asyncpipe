# asyncpipe
Functional composition library for asynchronous functions in JavaScript

Like lodash.flow, but for Promises!

## Installation
`$ npm install --save asyncpipe`

## Example
```js
import 'asyncpipe';

(async() => {
  const a = x => x + 1;
  const b = x => Promise.resolve(x * 2);
  const c = async x => {
    await ExternalService.store(x);
    return x;
  };

  const result = await asyncpipe(
    a,
    b,
    c,
  )(99);
  console.log(result); // PRINTS: 200
})();
```