const eqArrays = function (arrOne, arrTwo) {
  let checked = true;
  for (let i = 0; i < arrOne.length; i++) {
    if(arrOne[i] === arrTwo[i]){
      checked;
    } else {
      checked = false;
      return checked;
    }
  }
  return checked;
}

const assertArraysEqual = function(arrOne, arrTwo){
  if( eqArrays(arrOne,arrTwo) ) {
    console.log(`🟢 Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🔴 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const without = function (source, itemToRemove) {
    for ( let i = 0; i < itemToRemove.length; i++) {
      source = source.filter( item => item !== itemToRemove[i]);
    }
  return source;
};

// console.log(without([1, 2, 3], [1])); 
// console.log(without(["1", "2", "3"], [1, 2, "3"]) );

assertArraysEqual((without(["1", "2", "3"], [1, 2, "3"]) ), ['1','2']);
assertArraysEqual(without([1],[]),[1]);

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);