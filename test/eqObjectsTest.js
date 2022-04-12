const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true compared cd and dc objects', () => {
    const input1 = { c: "1", d: ["2", 3] };
    const input2 = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(input1, input2), true);
  });
  it('should return false compared cd and cd2 objects', () => {
    const input1 = { c: "1", d: ["2", 3] };
    const input2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(input1, input2), false);
  })
});

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

