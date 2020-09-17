const assertEqual = function(actual, expected) {
  if (actual === expected)
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};


//module.exports = assertEqual;
// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

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

//without function
const without = function(source,itemsToRemove){
  let newArray = [];  
  for(let i = 0; i < source.length; i++){
    let flag = 0;
    for(let j = 0; j < itemsToRemove.length; j++){
      
      if(source[i] === itemsToRemove[j]){
         flag = 1;        
      }
    }
    if(flag == 0){
      newArray.push(source[i]);
    }    
  }
  return newArray;
}
//TEST
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]); 
assertArraysEqual(without([1, 2, 3], ["1", "2"]),[1, 2, 3]);

//Test to make sure that the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);