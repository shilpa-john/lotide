const assertEqual = require('./assertEqual');

/*const assertEqual = function(actual, expected) {
  if (actual === expected)
    return console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  else
    return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
};*/

const head = function(assertEqual) {
  return assertEqual;
};

module.exports = head;