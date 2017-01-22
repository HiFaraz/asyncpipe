'use strict';

import 'babel-polyfill';
import asyncpipe from '.';

(async() => {
  const a = x => x + 1;
  const b = x => Promise.resolve(x * 2);
  const c = async x => {
    await Promise.resolve();
    return x;
  };

  const result = await asyncpipe(
    a,
    b,
    c,
  )(99);
  console.log(result); // PRINTS: 200
})();