// checking equal function
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