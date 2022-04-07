// checking equal function
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
// return all the indices in the string where each character is found 

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    let word = sentence[i];
    let indexArr = [];
    if ( word !== " "){
      if(results[word]){
        results[word] = results[word].concat([i]);
      } else {
        results[word] = [i];
      }
    }
  }
  console.log(results);
  return results; 
};

// letterPositions("hello bye");
assertArraysEqual(letterPositions("hello").e, [1]);