//const assertEqual = require('./assertEqual');
const assertEqual = function(actual, expected) {
  if (actual === expected)
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};


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


function middlefc(inputArray)
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
    let largeIndex = inputArray.length / 2;
    let smallIndex = (inputArray.length / 2) - 1;
    midArray.push(inputArray[smallIndex]);
    midArray.push(inputArray[largeIndex]);
    return midArray;
  }
};

//module.exports = middlefc;

//Test Cases
console.log(middlefc([1, 2, 3, 4])) // => [2, 3]
console.log(middlefc([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middlefc([1])) // => []
console.log(middlefc([1, 2])) // => []
console.log(middlefc([1, 2, 3])) // => [2]
console.log(middlefc([1, 2, 3, 4, 5])) // => [3]
console.log(assertArraysEqual(middlefc([1, 2, 3, 4, 5, 6]), [3, 4]));