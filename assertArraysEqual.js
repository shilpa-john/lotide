const assertEqual = function(actual, expected) {
  if (actual === expected)
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};


//module.exports = assertEqual;
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const eqArrays = assertEqual;
function assertArraysEqual (array1, array2)
 {
  if (eqArrays(array1, array2))
   {
    return console.log(`👍👍👍Array Assertion Passed: ${array1} equals ${array2}`);
  } 
  else 
  {
    return console.log(`🛑🛑🛑Array Assertion Failed: ${array1} does not equal ${array2}`);
  }
}
