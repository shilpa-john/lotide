const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

//Tests:

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }},x => x.stars === 2);

 assertEqual(test1, "noma");

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const test2 = findKey(bestTVShowsByGenre, x => x === "The Wire"); //drama 
assertEqual(test2, 'drama');