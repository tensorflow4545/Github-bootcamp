const assert = require('assert');
const { add } = require('./index');

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(0, 0), 0);
assert.strictEqual(add(-1, 1), 0);

console.log("All tests passed!");
