/*
1.1
Is Unique: Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?
*/

const isUnique = string => {
  let mySet = new Set();

  for (let i = 0; i < string.length; i++) {
    if (mySet.has(string[i])) {
      return false;
    }
    mySet.add(string[i]);
  }
  return true;
  
}

module.exports = {isUnique};
