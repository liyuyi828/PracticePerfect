// 1.1: Is Unique 
// Implement an algorithm to determine if a string has all unique characters.
// What is you cannot use additional data structure? 

// we can use an JS object or use Map() in ES6

// Solution: space complexity O(1), time complexity O(n)
const isUnique = str => {
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

// Solution: space complexity O(n), time complexity O(n)
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

// Solution: space complexity O(1), time complexity O(n)
const URLify = (str, len) => {
  return str.slice(0, len).split(' ').join('%20'); 
}
// console.log(URLify("Mr John Smith    ", 13));

// 1.4: Palindrom Permutaion
// Given a String, write a function to check if it is a permutation of a palindrome
// A palindrom is a word or phrase that is the same forward and backwards.
// A permutation is a rearrangement of letters. The palindrom does not need to b limited
// to just disctinary words

// Note: in the CTCI books, it use "Tact Coa" as example and return true;
//        I assume it we could ignore "space" and "case" for the implementation

// Solution: space complexity O(1), time complexity O(n)
const palindromePermutation = str => {
  let strWithoutSpace = str.split(' ').map(e => e.toLowerCase()).join('');
  let map = stringToMap(strWithoutSpace);
  let oddCount = 0; 
  for(let [key, value] of map){
    if(value % 2 !== 0){
      oddCount++; 
    }
  }
  return oddCount <= 1; 

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
// console.log(palindromePermutation("This is free land America"));
// console.log(palindromePermutation("Tact Coa"));

// 1.5: One Way
// There are three types of edits tht can be performed on strings:
// Insert a character, remove a character, or replace a character, 
// write a function to check if two string is one edit(or less) away

// Solution: space complexity O(1), time complexity O(n)
const oneEditAway = (str1, str2) => {
  let len1 = str1.length, len2 = str2.length; 
  let lenDiff = len1 - len2;  
  if(lenDiff > 1 || lenDiff < -1){
    return false; 
  } else {
    let diffCount = 0;
    let diffOffset = lenDiff;
    let tracker1 = 0; tracker2 = 0;
    while(tracker1 < len1 && tracker2 < len2){
      if(str1[tracker1] !== str2[tracker2]){
        diffCount++;
        if(diffOffset > 0){
          tracker2--; 
          diffOffset = 0; 
        } else if (diffOffset < 0) {
          tracker1--; 
          diffOffset = 0
        } 
      }
      tracker1++; 
      tracker2++; 
    }
    return diffCount <= 1;  
  }
}
// console.log(oneEditAway('pale', 'ple'));
// console.log(oneEditAway('pales', 'pale'));
// console.log(oneEditAway('pale', 'bale'));
// console.log(oneEditAway('pale', 'bake'));

// 1.6: String compression
// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original
// strings, your method should return the original string. You can assume the string has only uppercse and lowercase letters(a-z)

//Note: base on the last sentense, I am assuming "AAAAAa" would return "a6" for my implementation

// Solution: space complexity O(1), time complexity O(n)
const stringCompression = str => {
  let lowercaseStr = str.toLowerCase(); 
  let len = str.length;
  let currChar, nextChar, currCount = 0;
  let result = '';  
  for(let i = 0; i < len; i++){
    currChar = lowercaseStr[i];
    nextChar = lowercaseStr[i+1]; 
    currCount++; 
    if(currChar !== nextChar){
      result = result + currChar + currCount; 
      currCount = 0; 
    }
  }
  return result.length < len ? result : str; 
}
// console.log(stringCompression('aaabbBbccCddd'));
// console.log(stringCompression('adabb'));

// 1.7: Rotate Matrix in-place
// Given an image representing by an N x N matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees. Can you do this in place? 

// Note: the following implementation rotate the image counter-clockwise;
// The clockwise implementation is similar

// Solution: space complexity O(1), time complexity O(n) 
const rotateMatrix = matrix => {
  let len = matrix.length; 
  let round = 0, temp; 
  while(round < Math.floor(len / 2)){
    for(let i = round; i < len - round - 1; i++){
      temp = matrix[round][i]; 
      matrix[round][i] = matrix[i][len - round - 1]; 
      matrix[i][len - round - 1] = matrix[len - round - 1][len - round - i - 1]; 
      matrix[len - round - 1][len - round - i - 1] = matrix[len - round - i - 1][round];
      matrix[len - round - i - 1][round] = temp; 
    }
    round++; 
  }
  return matrix; 
}
// console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(rotateMatrix([[1, 2, 3, 4, 5], [11, 12, 13, 14, 15], [21, 22, 23, 24, 25], [31, 32, 33, 34, 35], [41, 42, 43, 44, 45]]));

// 1.8: Zero Matrix
// Write an algorithm such that if an element in an M X N matirix is 0, 
// its entire row and column are set to 0

// Solution: space complexity O(n), time complexity O(n)
const zeroMatrix = matrix => {
  let rowMap = new Map();
  let colMap = new Map();
  let row = matrix.length; 
  let col = matrix[0].length;  
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(matrix[i][j] === 0){
        rowMap.set(i, true);
        colMap.set(j, true);
      }
    }
  }
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(rowMap.get(i) || colMap.get(j) ){
        matrix[i][j] = 0; 
      }
    }
  }
  return matrix; 
}
// let a = [[1, 5, 6, 6], [2, 3, 4, 0], [1, 3, 5, 6]];
// console.log(zeroMatrix(a));

// 1.9: String Rotation 
// Given you have a isSubstring method to check if one string is subString of another. 
// Write a method to check if two strings are rotation of each other using one call of isSubstring
// ie ("waterbottle", "terbottlewa")

const isRotation = (str1, str2) => {
  
}