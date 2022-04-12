const assert = require('chai').assert;
const countLetters = require('../countLetters');
const eqObjects = require('../eqObjects');

describe('#countLetters', () => {
  it('count this sentense "Failed to write to file"', () => {
    const input = "Failed to write to file";
    const output = { f: 2, a: 1, i: 3, l: 2, e: 3, d: 1, t: 3, o: 2, w: 1, r: 1 };
    assert.strictEqual(eqObjects(countLetters(input), output), true);
  });
})



// console.log(countLetters("Failed to write to file"));
// console.log(countLetters(""));
// console.log(countLetters("22 students"));