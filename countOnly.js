//copy assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//take in a collection of items
// return counts for a specific subset of those items 
// in order to decide 

// when a key has truthy value, return + count in the resulting object 
// false and no included should not be counted 

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let results = {};

  //to get truthy name 
  let truthyNameArr = [];
  // if the value of the each name is true, push to the truthyNameArr
  for (let givenName in itemsToCount) {
    let truthy = itemsToCount[givenName];
    // console.log("name: " + name + ', truthy: ' + truthy);

    if(truthy === true){
      truthyNameArr.push(givenName);
    }
  }

// if name of the allItems matches with one of truthyNameArr, then count++
for (const name of allItems) {
  let count = 0;
  // console.log('count',count);
    for (const truthyName of truthyNameArr) {
      if ( name === truthyName) {
        if(results[name]) {
          count += 1;
          results[name] += 1;
        } else {
          results[name] = 1;
        }
      }
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Karl"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);