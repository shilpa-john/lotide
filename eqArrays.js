const assertEqual = function(actual, expected) 
{
  if (actual === expected)
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

function eqArrays (array1, array2)
 {
  if (array1.length !== array2.length)
   {
    return false;
   }
  for (let i = 0; i < array1.length; i++)
  {
    if (array1[i] !== array2[i])
     {
      return false;
     }
  }
  return true;
}

//Testing Code
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), false);
