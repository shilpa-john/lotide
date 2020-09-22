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

module.exports = middlefc;