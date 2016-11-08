const minStepsToOne = require('./minStepsToOne.js').minStepsToOne;
const assert = require ('chai').assert;

describe('minStepsToOne', () => {
  
  it('should return a number', () => {
    assert.equal(typeof minStepsToOne(4), 'number');
  });

  it('should return the correct answer for all small numbers', () => {
    assert.equal(minStepsToOne(2), 1);
    assert.equal(minStepsToOne(3), 1);
    assert.equal(minStepsToOne(7), 3);
    assert.equal(minStepsToOne(97), 7);
    assert.equal(minStepsToOne(99), 6);
    assert.equal(minStepsToOne(120), 6);
  });

  it('should return the correct answer for large numbers', () => {
    assert.equal(minStepsToOne(100000), 18);
    assert.equal(minStepsToOne(1000000), 19);
    assert.equal(minStepsToOne(10000000), 22);    
  });

});