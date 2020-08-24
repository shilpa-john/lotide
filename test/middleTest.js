const assert      = require('chai').assert;
const middlefc        = require('../middle');


describe("#middle", () => {
  it('Should return [2] when given [1, 2, 3]', () => {
    assert.deepEqual(middlefc([1, 2, 3]), [2]);
  });

  it('Should return [3] when given [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middlefc([1, 2, 3, 4, 5]), [3]);
  });

  it('Should return [3, 4] when given [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middlefc([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it('Should return [] when given [1]', () => {
    assert.deepEqual(middlefc([1]), []);
  });

  it('Should return [] when given [1, 2]', () => {
    assert.deepEqual(middlefc([1, 2]), []);
  });
});