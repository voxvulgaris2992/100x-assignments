/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const strings = [str1.toLowerCase(), str2.toLowerCase()];
  let objects = [];
  function sortObjectByKey(object) {
    const sortedKeys = Object.keys(object).sort();
    const sortedObject = {};
    for (const key of sortedKeys) {
      sortedObject[key] = object[key];
    }
    return sortedObject;
  }
  for (const string of strings) {
    charCount = {};
    for (const char of string) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    objects.push(charCount);
  }
  if (JSON.stringify(sortObjectByKey(objects[0])) === JSON.stringify(sortObjectByKey(objects[1]))) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = isAnagram;

// console.log(main("adc!", "!bac"));
