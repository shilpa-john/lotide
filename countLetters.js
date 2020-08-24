const assertEqual = function(actual, expected) 
{
  if (actual === expected)
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};

function countLetters(inputString)
{
  let countedLetters = {};
  let lowerCaseString = inputString.toLowerCase();
  for (let char of lowerCaseString)
   {
    if (char !== " ")
     {
      if (countedLetters[char])
      {
        countedLetters[char] += 1;
      } 
      else
      {
        countedLetters[char] = 1;
      }
    }

  }
  console.log(countedLetters);
  return countedLetters;
}
module.exports = countLetters;

//countLetters("lighthouse in the house");
//countLetters("Shilpa Chegudi");