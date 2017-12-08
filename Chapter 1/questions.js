// 1.1
// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const isUnique = string => {
  let mySet = new Set();

  for (let i = 0; i < string.length; i++) {
    if (mySet.has(string[i])) {
      return false;
    }
    mySet.add(string[i]);
  }
  return true;

};

// 1.2
// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

const checkPermutation = (string1, string2) => {
  if (string1.length !== string2.length || string1.length === 0) {
    return false;
  }

  // create map to hold possible characters
  let chars = new Map();

  // go through string 1 and set key as string and value as count. ex. { j: 1 }
  for (let i = 0; i < string1.length; ++i) {
    chars.set(string1[i], chars.get(string1[i]) + 1 || 1);
  }

  // go through string 2 and calculate counts
  for (let i = 0; i < string2.length; ++i) {
    let count = chars.get(string2[i]);
    if (!count) {
      return false;
    }
    if (count === 1) {
      chars.delete(string2[i]);
    }
    else {
      chars.set(string2[i], count - 1);
    }
  }
  // if the map's size is 0 there is possibility of permutation
  return chars.size === 0;
};

// 1.3
// URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith " J 13 Output: "Mr%20J ohn%20Smith"

const urlify = string => string.split(' ').join('%20');

// 1.4
// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)




module.exports = { isUnique, checkPermutation, urlify };
