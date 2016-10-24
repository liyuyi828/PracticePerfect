// Source: unknown

// Given an array of non-negative integers, each represents the maximum jump length at that position.
// Determine the minimum jump from the first to the last element of the array.

// Input: Array of non-negative integers
// Output: Integer

// Example: minJumpToLast([2,3,1,1,4])
// Result: 2 because traveling from 2 -> 3 -> 4 uses 2 jumps

// What is the time and space complexity for your solution?
// Can you optimized it? 
 
const minJumpToLast = (arr) => {
  // Your solution here
  var steps = [0];
  var len = arr.length;
  for(var i = 0; i < len; i++){
    for(var j = 1; j <= arr[i]; j++){
      if(steps[i+j] === undefined){
        steps[i+j] = steps[i] + 1; 
      } else {
        steps[i+j] = Math.min(steps[i] + 1, steps[i+j]);
      }
    }
  }
  return steps[len - 1] 
}

module.exports = { minJumpToLast };