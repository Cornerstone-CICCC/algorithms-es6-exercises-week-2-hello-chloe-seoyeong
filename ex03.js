/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

// filter

const numberOfVowels = function (data) {
  // Put your solution here
  const splitWord = data.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const countVowels = splitWord.filter((vowel) => {
    for(let i = 0; i < vowels.length; i++) {
      if (vowel === vowels[i]) {
        return true;
      }
    }
  })

  return countVowels.length;
};

console.log(numberOfVowels("orange")); // 3
console.log(numberOfVowels("cornerstone college")); // 7
console.log(numberOfVowels("aeiou")); // 5

module.exports = numberOfVowels;
