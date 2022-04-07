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

const assertArraysEqual = function(arrOne, arrTwo){
  if( eqArrays(arrOne,arrTwo) ) {
    console.log(`🟢 Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🔴 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 1]);