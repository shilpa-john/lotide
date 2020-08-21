 const assertEqual = function(actual, expected) 
 {
  if (actual === expected) 
  {
    return console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } 
  else 
  {
    return console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) 
{
  for (let key of Object.keys(object))
   {
    if (callback(object[key]))
     {
      return key;
    }
  }
}


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