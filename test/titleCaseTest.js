const assert = require('chai').assert;
const titleCase = require('../titleCase');

describe('#titleCase', () => {
  it('returns "This Is An Example"', () => {
    const input = "this is an example";
    const output = "This Is An Example"
    assert.equal(titleCase(input), output);
  });
  it('returns "Test"', () => {
    const input = "test";
    const output = "Test"
    assert.equal(titleCase(input), output);
  });
  it('returns "I R Cool"', () => {
    const input = "i r cool";
    const output = "I R Cool"
    assert.equal(titleCase(input), output);
  });
  it('returns "What Happens Here"', () => {
    const input = "WHAT HAPPENS HERE";
    const output = "What Happens Here"
    assert.equal(titleCase(input), output);
  });
  it('returns ""', () => {
    const input = "";
    const output = ""
    assert.equal(titleCase(input), output);
  });
  it('returns "A"', () => {
    const input = "A";
    const output = "A"
    assert.equal(titleCase(input), output);
  });
});
