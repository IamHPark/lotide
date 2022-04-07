// copy assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// take in two parameters : object , callback
// scan object and return the first key for which the callback returns a truthy value 
// if no key founded, return undefined 
const findKey = function (obj, callback) {
  for ( const key in obj) {
    // console.log('key',key);
    // console.log('value', obj[key])
    if (callback(obj[key]) === true) {
      return key;
    }
  }
};

const result1 = 
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const result2 = 
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "noma"

assertEqual(result1, 'noma');
assertEqual(result2, 'Akaleri')