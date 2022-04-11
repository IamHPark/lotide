//1 
const letterPositions = function(string) {
  const results = {};
  let index = 0;
  for(const letter of string){
    //console.log(letter);
    if(letter !== " "){
      if(results[letter]){
        //console.log(Push  [${index}] into key);
        results[letter].push(index);
      }else {
        //console.log(Initially add the key = [${index}]);
        results[letter] = [index];
      }
    }
    index ++;
  }
  //console.log(results);
  return results;
};


//2
const letterPositions = function(string) {
  let output = {};

  for (let i = 0; i < string.length; i++) {

    if (string[i] !== ' ') {
      if (output[string[i]]) {
        output[string[i]].push(i);  //if this index value exsists inside output already and the current index value to output as well
      } else {
        output[string[i]] = [i];   //if this letter does NOT exsist within output, add it and set its initial value to 1
      }
    }
  }
  return output;
};
console.log(letterPositions("bob says"));
