const assert      = require('chai').assert;
const tail        = require('../tail');

 describe("#tail", () => {
   it('Should return ["Lighthouse", "Labs"] when given ["Hello", "Lighthouse", "Labs"]', () => {
     assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('Should return [] when given "[]"', () => {
    assert.deepEqual(tail([]), []);
  });

  it('Should return undefined when given ["2"]', () => {
    assert.deepEqual(tail(["2"]), []);
  });

});
  
  /*assertEqual(result.length, 2); // ensure we get back two elements
  assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
  assertEqual(result[1], "Labs"); // ensure second element is "Labs"*/