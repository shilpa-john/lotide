const middlefc          = require('../middle'); 
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(middlefc([1,2,3,4,5,6,7]), [4]);
assertArraysEqual(middlefc([1,2,3,4,5,6,7,8]), [4,5]);
assertArraysEqual(middlefc([1, 2, 3]) ,[2]);
assertArraysEqual(middlefc([3, 4, 5]), [4,5,6]);