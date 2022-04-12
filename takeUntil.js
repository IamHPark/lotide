//take in two parameters : array, callback
//return slice of the array with elements taken from the beginning 
// keep going until the cllback returns a truthy value
const takeUntil = function (array, callback) {
  let output = [];
  //when you meet truthy value, return the output  
  for (const num of array){
    if( callback(num) === true ) {
      return output;
    } else {
      output.push(num);
    }
  }
};

module.exports = takeUntil;