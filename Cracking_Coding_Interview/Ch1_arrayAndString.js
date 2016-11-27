// 1.1: Is Unique 
// Implement an algorithm to determine if a string has all unique characters.
// What is you cannot use additional data structure? 

// we can use an JS object or use Map() in ES6
const isUnique = (str) => {
  let tracker = new Map();
  for(var i=0; i < str.length; i++){
    if(tracker.get(str[i])){
      return false;
    } else {
      tracker.set(str[i], true);
    }
  }
  return true;
}
// console.log(isUnique('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
// console.log(isUnique('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZa'));

// 1.2: Check Permutation
// Given two strings, write a method to decide if one is a permuation of the other.