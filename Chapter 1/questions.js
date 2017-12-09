// 1.1
// Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const isUnique = (string) => {
  const mySet = new Set();

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
  const chars = new Map();

  // go through string 1 and set key as string and value as count. ex. { j: 1 }
  for (let i = 0; i < string1.length; ++i) {
    chars.set(string1[i], chars.get(string1[i]) + 1 || 1);
  }

  // go through string 2 and calculate counts
  for (let i = 0; i < string2.length; ++i) {
    const count = chars.get(string2[i]);
    if (!count) {
      return false;
    }
    if (count === 1) {
      chars.delete(string2[i]);
    } else {
      chars.set(string2[i], count - 1);
    }
  }
  // if the map's size is 0 there is possibility of permutation
  return chars.size === 0;
};

// 1.3
// URLify: Write a method to replace all spaces in a string with '%20:
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string. (Note: If implementing in Java,
// please use a character array so that you can perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith " J 13 Output: "Mr%20J ohn%20Smith"

const urlify = string => string.split(' ').join('%20');

// 1.4
// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)

const palindromePerm = (string) => {

};

// 1.5
// One Away: There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character. Given two strings,
// write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true pales. pale -> true pale. bale -> true pale. bake -> false

const oneAway = (str1, str2) => {
  if (str1.length - 1 > str2.length || str1.length + 1 < str2.length) {
    return false;
  }

  let isEdited = false;
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (isEdited) {
        return false;
      }
      if (str1.length > str2.length) {
        j--;
      } else if (str2.length > str1.length) {
        i--;
      }
      isEdited = true;
    }
  }
  return true;
};

// 1.6
// String Compression: Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string,
// your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

const strCompress = (string) => {
  let newStr = '';
  let count = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    }
    if (string[i] !== string[i + 1]) {
      newStr += string[i] + count;
      count = 1;
    }
  }

  return newStr.length > string.length ? string : newStr;
};

// 1.7
// Rotate Matrix: Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
// Can you do this in place?

const rotMatrix = (matrix) => {

};

// 1.8
// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to O.

const zeroMatrix = (matrix) => {

};

// 1.9
// String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
// (e.g.,"waterbottle"is a rotation of "erbottlewat").

const strRot = (s1, s2) => (s1.length !== s2.length ? false : isSubstring(s1 + s1, s2));

// helper function
const isSubstring = (s1, s2) => s1.includes(s2);


module.exports = {
  isUnique, checkPermutation, urlify, palindromePerm, oneAway, strCompress, rotMatrix, zeroMatrix, strRot,
};
