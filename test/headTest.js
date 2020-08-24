//const assertEqual = require('../assertArraysEqual');
const assert      = require('chai').assert;
const head        = require('../head');

describe ('#head', () => {
  it("returns 1 for [1, 2, 3]", () => {
     assert.strictEqual(head([1, 2, 3]), 1);
  });
    it("returns 5 for [5, 2, 3]", () => {
      assert.strictEqual(head([5, 2, 3]), 5);
    });
});

it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
  assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
});

it("returns 'dog' for ['dog']", () => {
  assert.strictEqual(head(['dog']), 'dog');
});

it("returns undefined for []", () => {
  assert.strictEqual(head([]), undefined);
});