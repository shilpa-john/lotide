const assertArraysEqual = function(arr1, arr2) 
{
  for (let i = 0; i < arr1.length; i++) 
  {
    for (let j = i; j <= i; j++) 
    {
      if (arr1[i] !== arr2[j])
       {
        return console.log("🙁" + `Assertion Failed: [${arr1}] !== [${arr2}]`);

      }
    }
  }
  return console.log("😀" + `Assertion Passed: [${arr1}] === [${arr2}]`);
};



const letterPositions = function(sentence)
 {
  const results = {};
  sentenceArr = sentence.toLowerCase();
  for (let i = 0; i < sentenceArr.length; i++) 
  {
    if (sentenceArr[i] !== " ")
     {
      if (results[sentenceArr[i]]) 
      {
        results[sentenceArr[i]].push(i);
      } 
      else
       {
        results[sentenceArr[i]] = [];
        results[sentenceArr[i]].push(i);
      }
    }
  }
  console.log(results);
  return results;
};

const sentence = "hello";

const resultObject = letterPositions(sentence);

assertArraysEqual(resultObject["h"], [0]);

assertArraysEqual(resultObject["e"], [1]);