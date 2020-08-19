// TEST/ASSERTION FUNCTIONS
const assertEqual = function(actual, expected)
 {
  if (actual === expected)
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

const assertArraysEqual = function(actual, expected) 
{

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
};

function middle(inputArray)
 {
  let midArray = [];
  if (inputArray.length === 1 || inputArray.length === 2)
   {
    return midArray;
  } 
  else if (inputArray.length % 2 !== 0) 
  {
    let indexToPrint = Math.floor(inputArray.length / 2);
    midArray.push(inputArray[indexToPrint]);
    return midArray;
  } 
   else 
  {
    let largerIndex = inputArray.length / 2;
    let smallerIndex = (inputArray.length / 2) - 1;
    midArray.push(inputArray[smallerIndex]);
    midArray.push(inputArray[largerIndex]);
    return midArray;
  }
};
console.log(middle([1, 2, 3] ,[2]));
console.log(middle([3, 4, 5], [4,5,6]));
console.log(middle([1,2,3,4,5,6,7,8]));
