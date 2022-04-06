//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//take in a sentence as a string 
//return count of each of the letters in that sentence 
const countLetters = function (sentence){
  let output = {};
  //iterate each word of the sentence
  // if the letter is not space and exist in output, count++
  // if the letter is not space and not exist, count = 1  
  for (let word of sentence){
    if(word !== " "){
      if(output[word]) {
        output[word] += 1 ;
      } else {
        output[word] = 1;
      }
    }
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));