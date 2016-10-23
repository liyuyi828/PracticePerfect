//  Given an array of binary values (0 and 1) and N number of flips (convert a 0 to a 1), 
//  determine the maximum number of consecutive 1's that can be made after N flips
//
//  Input: An Array of 1's and 0's, and an Integer N denoting the number of flips
//  Output: Integer
//
//  Example: maxOnesWithFlips([0,1,1,1,0,1,0,1,0,0], 2)
//  Result: 7
//

const maxOnesWithFlips = (arr, flips) => {
  // Your solution here
  var start = 0;
  var zeros = [];
  var zeroIndex = 0;
  var max = 0; ;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      zeros.push(i);
      if(zeros.length > flips){
        start = zeros[zeroIndex] + 1; 
        zeroIndex++;
      }
    }
    if(i + 1 - start > max ){
      max = i + 1 - start; 
    }
  }
  return max;
}

module.exports = { maxOnesWithFlips };