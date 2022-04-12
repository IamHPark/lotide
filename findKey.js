// take in two parameters : object , callback
// scan object and return the first key for which the callback returns a truthy value 
// if no key founded, return undefined 
const findKey = function (obj, callback) {
  for ( const key in obj) {
    // console.log('key',key);
    // console.log('value', obj[key])
    if (callback(obj[key]) === true) {
      return key;
    }
  }
};

module.exports = findKey;
