'use strict';

/**
 * Module dependencies.
 */

var asyncpipe = require('.');

// Utility functions
function a(x) {
  return x + 1;
}

function b(x) {
  return x * 2;
}

function c(x) {
  return x;
}

function d(x) {
  throw new Error('Error from function d. Input argument: ' + x);
}

/**
 * Test 1
 */
(function() {
  var combined = asyncpipe(a, b, c);
  combined(99)
    .then(function(result) {
      if (result !== 200) {
        throw new Error('Result was not 200 as expected');
      }
    })
    .catch(function(error) {
      console.error('Test 1 failed', error);
      process.exit(1);
    });
})();

/**
 * Test 2
 */
(function() {
  var combined = asyncpipe(a, d, c);
  combined(99)
    .then(function(result) {
      throw new Error('Expected an error to be thrown');
    })
    .catch(function(error) {
      if (error.message !== 'Error from function d. Input argument: 100') {
        console.error('Test 2 failed', error);
        process.exit(1);
      }
    });
})();
