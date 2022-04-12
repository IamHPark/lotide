const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrOne, arrTwo) {
  let checked = true;
// check if array.length is same 
  if(arrOne.length === arrTwo.length) {
    for (let i = 0; i < arrOne.length; i++) {
      if(arrOne[i] === arrTwo[i]){
        checked;
      } else {
        checked = false;
        return checked;
      }
    }
  } else {
    return false;
  }
  return checked;
}

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

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if( eqObjects(actual,expected)) {
    console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc);
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2);