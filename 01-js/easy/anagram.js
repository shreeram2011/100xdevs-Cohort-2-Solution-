/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const lowerword1 = str1.toLowerCase();
  const lowerword2 = str2.toLowerCase();

  if(lowerword1.length !== lowerword2.length){
    return false;
  }

  const letterCount = {};
  for(let letter of lowerword1){
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  for(let letter of lowerword2){
    if(!letterCount[letter]){
      return false;
    }
    letterCount[letter]--;
  }

  return true;
}

console.log(isAnagram("top","pot"));
module.exports = isAnagram;
