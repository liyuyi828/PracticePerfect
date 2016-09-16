//Source: LeetCode (https://leetcode.com/problems/longest-palindromic-substring/)

//Write a function, to find the longest palindromic substring from a input Str. 

//You may assume that the maximum length of Str is 1000, contains only lowercase letter, and does not contain any space, 

//For example: 
// longestPalindromeSubstring('racecar');  //return 'racecar' 
// longestPalindromeSubstring('abba'); //return 'abba'
// longestPalindromeSubstring('abab'); //return 'aba'

//Challenge: try to complete in Big O(n^2)

const longestPalindromeSubstring = (str) => {
  //You solution here:
  var longest = str[0];
  for(var i = 0; i < str.length; i+=0.5){
    var temp = palindromeFromMidIndex(str, i);
    if(temp.length > longest.length){
      longest = temp;
    }
  }
  return longest;
}

function palindromeFromMidIndex(string, mid){
  var len = string.length;
  var start, end; 
  if(Math.floor(mid) === mid){
    start = mid - 1;
    end = mid + 1;  
  } else {
    start = Math.floor(mid);
    end = Math.floor(mid) + 1; 
  }
  while(start >= 0 && end <= len - 1 ){
    if(string[start] !== string[end]){
      break;
    } else {
      start--;
      end++;
    }
  }
  return string.slice(start+1, end);
}


module.exports = { longestPalindromeSubstring };