//const assertEqual = require('./assertEqual');

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
    let largerIndex = inputArray.length / 2;
    let smallerIndex = (inputArray.length / 2) - 1;
    midArray.push(inputArray[smallerIndex]);
    midArray.push(inputArray[largerIndex]);
    return midArray;
  }
};

module.exports = middlefc;