const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words).length, 3);

// const words = ["Yo"];
// console.log(tail(words));

// const words = [];
// console.log(tail(words));