const longestPalindromeSubstring = require('./longestPalindromeSubstring.js').longestPalindromeSubstring;
const assert = require ('chai').assert;

describe('stairStep', () => {

  it('should return a string', () => {
    assert.equal(typeof longestPalindromeSubstring('aba'), 'string');
  });

  it('should return the entire string if input string is palindrome', () => {
    assert.equal(longestPalindromeSubstring('racecar'), 'racecar');
  });


  it('should return the palindrome substring at the beginning of input string', () => {
    assert.equal(longestPalindromeSubstring('racecarbmw'), 'racecar');
  });

  it('should return the palindrome substring in the middle of the input string', () => {
    assert.equal(longestPalindromeSubstring('bmwracecarbmw'), 'racecar');
  });

  it('should return the palindrome substring at the end of the input string', () => {
    assert.equal(longestPalindromeSubstring('bmwracecar'), 'racecar');
  });

});