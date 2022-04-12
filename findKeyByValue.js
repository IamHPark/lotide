// scan the object and return the first key which contains the given value
// if no key with that given value, should return undefined

const findKeyByValue = function( givenObj, givenValue) {
  for ( const key in givenObj) {
    if (givenObj[key] === givenValue) {
      return key;
    };
  }
};

module.exports = findKeyByValue;


