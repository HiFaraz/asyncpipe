'use strict';

export default (...steps) => (arg) => steps.reduce(async(value, step) => step(await value), arg);