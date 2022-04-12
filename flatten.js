// given an array with other arrays inside, faltten it into a single-level array
const flatten = function(array) {
  let newArr = [];
  for (const item of array) {
    //when item is array, concatenate
    if (Array.isArray(item)) {
      newArr = newArr.concat(item);
    } else {
      newArr.push(item);    //when item is just number, push to newArr
    }
  }
  return newArr;
};

module.exports = flatten;


