const assert = require('chai').assert
const findKey = require('../findKey');

describe('#findKey' , () => {
  it('returns "noma" for result1', () => {
    const result1 = 
    findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2) // => "noma"
   assert.strictEqual(result1,"noma"); 

  });
  /*
  const result2 = 
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 3) // => "noma"
  */
});

// assertEqual(result1, 'noma');
// assertEqual(result2, 'Akaleri')