const stairStep = require('./stairStep.js').stairStep;
const assert = require ('chai').assert;

describe('stairStep', () => {

  it('should return a number', () => {
    assert.equal(typeof stairStep(1), 'number');
  });

  it('should return the correct number of combination', () => {
    assert.equal(stairStep(1), 1);
    assert.equal(stairStep(2), 2);
    assert.equal(stairStep(3), 4);
    assert.equal(stairStep(4), 7);
    assert.equal(stairStep(5), 13);
    assert.equal(stairStep(6), 24);
    assert.equal(stairStep(7), 44);
    assert.equal(stairStep(8), 81);
    assert.equal(stairStep(9), 149);
  });

});
