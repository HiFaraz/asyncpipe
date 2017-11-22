'use strict';

module.exports = function buildAsyncpipe() {
  const steps = Array.from(arguments);
  return function asyncpipe(arg) {
    return steps.reduce(function(result, nextStep) {
      return result.then(nextStep);
    }, global.Promise.resolve(arg));
  };
};
