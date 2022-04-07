// take in two arguments : array, callback function 

const words = ["ground", "control", "to", "major", "tom"];
const strings = ['123', 'bye', 'hello', 'find', 'length']

const map = function(array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  };

  return result;
};

const results1 = map(words, word => word[0]);
const results2 = map(strings, string => string.length);


//assertArrayEqual function to check 
const eqArrays = function (arrOne, arrTwo) {
  let checked = true;
// check if array.length is same 
  if(arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if(arrOne[i] === arrTwo[i]){
        checked;
      } else {
        checked = false;
        return checked;
      }
    }
  } else {
    return false;
  }
  return checked;
}

const assertArraysEqual = function(actual, expected){
  if( eqArrays(actual, expected) ) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 3, 3, 5, 4, 6 ]);