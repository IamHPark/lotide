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

//test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

