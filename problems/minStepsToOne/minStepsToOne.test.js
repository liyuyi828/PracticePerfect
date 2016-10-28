const minStepsToOne = require('./minStepsToOne.js').minStepsToOne;
const assert = require ('chai').assert;

describe('minStepsToOne', () => {
  
  it('should return a number', () => {
    assert.equal(typeof minStepsToOne(4), 'number');
  });

  it('should return the length of array minus 1 if all numbers are 1s', () => {
    var arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    var len = arr.length; 
    assert.equal(minStepsToOne(arr), len - 1);
  });

  xit('should return the length of array if all numbers are 0s', () => {
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var len = arr.length; 
    assert.equal(minStepsToOne(arr), len - 1);
  });

  it('should return the number of flips if all numbers are 0s', () => {
    var arr = [ 3, 4, 2, 3, 2, 2, 1, 4, 1, 1, 4, 5, 5, 1, 5, 1, 2, 2, 4, 5 ];
    assert.equal(minStepsToOne([2,3,1,1,4]), 2);
    assert.equal(minStepsToOne(arr), 6);
  });

});