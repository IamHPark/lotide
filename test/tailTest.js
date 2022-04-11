
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const tail = require('../tail');

describe('#tail', () => {
  it('returns [2,3] for [1,2,3]', () => {
    const input = [1,2,3];  
    const output = [2,3];
    const checkEqArr = eqArrays(tail(input),output);
    assert.strictEqual(checkEqArr,true);
  });
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const input = ["Yo Yo", "Lighthouse", "Labs"];  
    const output = ["Lighthouse", "Labs"];
    const checkEqArr = eqArrays(tail(input),output);
    assert.strictEqual(checkEqArr,true);
  });
  it('returns [] for [1]', () => {
    const input = [1];  
    const output = [];
    const checkEqArr = eqArrays(tail(input),output);
    assert.strictEqual(checkEqArr,true);
  });
  it('returns [] for []', () => {
    const input = [];  
    const output = [];
    const checkEqArr = eqArrays(tail(input),output);
    assert.strictEqual(checkEqArr,true);
  });

})