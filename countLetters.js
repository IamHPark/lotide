//take in a sentence as a string 
//return count of each of the letters in that sentence 
const countLetters = function (sentence){
  let output = {};
  //iterate each word of the sentence
  // if the letter is not space and exist in output, count++
  // if the letter is not space and not exist, count = 1  
  for (let word of sentence.toLowerCase()){
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

module.exports = countLetters;


