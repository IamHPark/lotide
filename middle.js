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
};

const assertArraysEqual = function(arrOne, arrTwo){
  if( eqArrays(arrOne,arrTwo) ) {
    console.log(`🟢 Assertion Passed: ${arrOne} === ${arrTwo}`);
  } else {
    console.log(`🔴 Assertion Failed: ${arrOne} !== ${arrTwo}`);
  }
};

const middle = function (array) {
 
  let output = [];
  let middleIndex = Math.floor(array.length/2)

  //middle function should return an array with only the middle elements 
  //arrays with one or two elements > return empty array
  if ( array.length < 3) {
    return output;
  }

  if ( array.length >= 3) {
    //arrays with even numbers of elements > return two elements in the middle 
  //if the array.length is even, (array.length/2) - 1 & (arr.length/2) should be two middle index 
    if( array.length % 2 === 0) {
      output.push(array[middleIndex - 1], array[middleIndex]);
      return output; 
    } else {
  //arrays with odd numbers elements > return a single middle element
  // if the array.length is odd, Math.floor(array.lenght/2) should be one middle element index 
      output.push(array[middleIndex]);
      return output;
    } 
  }
};

middle([1,2,3]);

//write test assertions 
assertArraysEqual( middle([1.2]) , []); // => []
assertArraysEqual(middle([1, 2, 3]) , [2]); // => [2]

assertArraysEqual(middle([1]) , []); // => []
assertArraysEqual(middle([1, 2, 3, 4, 5]) , [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]) , [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) , [3, 4]); // => [3, 4]

