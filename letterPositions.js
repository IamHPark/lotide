// return all the indices in the string where each character is found 
const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if ( string[i] !== " ") {
      if(results[string[i]]){    //when results already have that letter
        results[string[i]].push(i);
      } else {
        results[string[i]] = [i];
      }
    }
  }
  return results; 
};

module.exports = letterPositions;