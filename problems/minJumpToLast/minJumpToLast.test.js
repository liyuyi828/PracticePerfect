const minJumpToLast = require('./minJumpToLast.js').minJumpToLast;
const assert = require ('chai').assert;

describe('minJumpToLast', () => {
  
  it('should return a number', () => {
    assert.equal(typeof minJumpToLast([1, 2, 3, 1, 2, 3, 4, 1, 2]), 'number');
  });

  it('should return the length of array minus 1 if all numbers are 1s', () => {
    var arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    var len = arr.length; 
    assert.equal(minJumpToLast(arr), len - 1);
  });

  xit('should return the length of array if all numbers are 0s', () => {
    var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var len = arr.length; 
    assert.equal(minJumpToLast(arr), len - 1);
  });

  it('should return the number of flips if all numbers are 0s', () => {
    var arr = [ 3, 4, 2, 3, 2, 2, 1, 4, 1, 1, 4, 5, 5, 1, 5, 1, 2, 2, 4, 5 ];
    assert.equal(minJumpToLast([2,3,1,1,4]), 2);
    assert.equal(minJumpToLast(arr), 6);
  });

});