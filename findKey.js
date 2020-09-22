const assertEqual = require('./assertEqual');

const findKey = function (object, callback) 
{
  for (let key of Object.keys(object))
   {
    if (callback(object[key]))
     {
      return key;
    }
    else {
      return undefined;
    }
  }
}

module.exports = findKey;