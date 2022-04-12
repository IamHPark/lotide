# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @hpark_/lotide`

**Require it:**

`const _ = require('@hpark_/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- countLetters : return count of each of the letters in that sentence
- countOnly : return counts for a specific subset of those items
- eqArrays : check if the two arrays are equal
- eqObjects : check if the two objects are equal
- findKey : return the first key for which the callback returns a truthy value
- findKeyByValue : return the first key which contains the given value
- flatten : faltten the array into a single-level array
- head : return the first element of the array
- letterPositions : return all the indices in the string where each character is found
- map : return a new array based on the results of the callback function
- middle : return the middle one or two elements of the array
- tail : return the rest of array except the first element of the array
- takeUntil : return slice of the array with elements taken from the beginning until the cllback returns a truthy value
- titleCase : capitalize the first letter of each words in sentence
- without : return the array after removing the given items
