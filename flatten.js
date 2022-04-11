// assertArraysEqual function
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


// given an array with other arrays inside, faltten it into a single-level array

const flatten = function(array) {
  let newArr = [];
  for (const item of array) {
    //when item is array, concatenate
    if (Array.isArray(item)) {
      newArr = newArr.concat(item);
    } else {
      newArr.push(item);    //when item is just number, push to newArr
    }
  }
  return newArr;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
