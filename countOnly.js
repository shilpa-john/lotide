const assertEqual = function(actual, expected) {
  if (actual === expected)
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount)
 {
    const results = {};
    for(const key in itemsToCount)
    {
      if(allItems.includes(key))
       {
        results[key] = 0;
       }
      else
      {
       results[key] = undefined;
      }
    };
    for(const name of allItems)
    {
      if(results[name] >=0)
      {
        results[name] +=1;
      }
    };

  return results;
  };


 const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);