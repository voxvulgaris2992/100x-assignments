/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  flip = [];
  for (i = str.length - 1; i > -1; i--) {
    flip.push(str[i])
  };
  console.log(str.toLowerCase());
  console.log(flip.join('').toLowerCase());
  if (str.toLowerCase().replace(/[^\w]/g, '') == flip.join('').toLowerCase().replace(/[^\w]/g, '')) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = isPalindrome;
