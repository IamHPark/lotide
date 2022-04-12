const assert = require('chai').assert
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
    "Karl"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  it('return 1 for result1["Jason"]', () => {
    assert.strictEqual(result1["Jason"],1);
  });
});

/*
console.log(result1);

console.log((result1["Jason"], 1));
console.log((result1["Karima"], undefined));
console.log((result1["Fang"], 2));
console.log((result1["Agouhanna"], undefined));
*/