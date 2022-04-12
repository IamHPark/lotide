// take in two arguments : array, callback function 
// return a new array based on the results of the callback function.
const map = function(array, callback) {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  };

  return result;
};

module.exports = map;