const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  // check if both Object.keys.length are same, if not give false 
  keyArrOne = Object.keys(object1);
  keyArrTwo = Object.keys(object2);
  if( keyArrOne.length === keyArrTwo.length) {

    // for key in object1 , check if the value of the key is same with the value of the key in object2
    let isEqual = true;
    for (let key in object1) {
      // check if the value is array 
      let checkArrForObj1 = Array.isArray(object1[key]);
      let checkArrForObj2 = Array.isArray(object2[key]);

      // if both values are arrays, pass them to eqArrays and ensure it returns true 
      if( checkArrForObj1 && checkArrForObj2 ) {
        isEqual = eqArrays(object1[key], object2[key]);
        if(!isEqual){
          return false;
        }
      } else {     //if one of values or both are not arrays, compare each values 
        if(object1[key] === object2[key]) {
          isEqual = true;
        } else {
          isEqual = false;
          return isEqual;
        }
      } 
    }
    return isEqual;
  } else {       // if two object.keys.length are different, return false 
    return false;
  }
};

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2), false); // => false