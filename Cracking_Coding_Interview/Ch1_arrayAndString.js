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

const isPermutation = (str1, str2) => {
  if(str1 === str2 || str1.length !== str2.length){
    return false;
  } else {
    let map1 = stringToMap(str1);
    let map2 = stringToMap(str2);
    for(let [key, value] of map1){
      if(value !== map2.get(key)){
        return false; 
      }
    }
    return true;
  }

  function stringToMap(str){
    let map = new Map();
    let key, curr 
    for(let i = 0; i < str.length; i++){
      key = str[i]; 
      curr = map.get(key); 
      if(curr){
        map.set(key, curr + 1); 
      } else {
        map.set(key, 1); 
      }
    }
    return map; 
  }
}

// console.log(isPermutation('abc d', 'abc d'));
// console.log(isPermutation('abcd ', 'd abc'));

// 1.3: URLify
// Write a method to replace all spaces in a string with "%20". You may assume
// that the string has sufficient space at the end to hold the additional characers, 
// and that you are given the "true" length of the string.

