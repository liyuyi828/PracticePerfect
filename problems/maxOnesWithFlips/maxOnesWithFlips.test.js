const maxOnesWithFlips = require('./maxOnesWithFlips.js').maxOnesWithFlips;
const assert = require ('chai').assert;

describe('maxOnesWithFlips', () => {
  
  it('should return a number', () => {
    assert.equal(typeof maxOnesWithFlips([1, 0], 1), 'number');
  });

  it('should return the length of array if all numbers are 1s', () => {
    var arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    var len = arr.length; 
    assert.equal(maxOnesWithFlips(arr, 1), len);
  });


  it('should return the number of flips if all numbers are 0s', () => {
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    assert.equal(maxOnesWithFlips(arr, 2), 2);
  });

  it('should return the correct length of different input', () => {
    assert.equal(maxOnesWithFlips([0,1,1,1,0,1,0,1,0,0], 2), 7);
    assert.equal(maxOnesWithFlips([0,1,1,0,1,0,1,1,0,0,0, 1, 1, 1, 1, 1], 2), 7);
    assert.equal(maxOnesWithFlips([0,1,1,0,1,0,1,1,0,0,0, 1, 1, 1, 1, 1], 3), 10);
  });

});