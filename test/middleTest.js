const assert = require('chai').assert;
const middle = require('../middle');
const eqArrays = require('../eqArrays');

describe('#middle', () => {
  it('returns [] for [1,2]', () => {
    const input = [1,2];  
    const output = [];
    const checkEqArr = eqArrays(middle(input),output);
    assert.strictEqual(checkEqArr,true);
  });
  it('returns [2] for [1,2,3]', () => {
    const input = [1,2,3];  
    const output = [2];
    const checkEqArr = eqArrays(middle(input),output);
    assert.strictEqual(checkEqArr,true);
  });
  it('returns [2,3] for [1,2,3,4]', () => {
    const input = [1,2,3,4];  
    const output = [2,3];
    const checkEqArr = eqArrays(middle(input),output);
    assert.strictEqual(checkEqArr,true);
  });
  it('returns [] for [1]', () => {
    const input = [1];  
    const output = [];
    const checkEqArr = eqArrays(middle(input),output);
    assert.strictEqual(checkEqArr,true);
  });
  it('returns ["hi"] for ["say","hi","hello"]', () => {
    const input = ["say","hi","hello"];  
    const output = ["hi"];
    const checkEqArr = eqArrays(middle(input),output);
    assert.strictEqual(checkEqArr,true);
  });
})
