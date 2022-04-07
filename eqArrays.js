const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrOne, arrTwo) {
  let checked = true;
// check if array.length is same 
// console.log('lenght1',arrOne.length);
// console.log('length2',arrTwo.length);
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

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2"])); // => false
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual( eqArrays([1, 2, 3], [1, 2, 3]) , true );