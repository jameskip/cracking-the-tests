const {
  isUnique, checkPermutation, urlify, palindromePerm, oneAway, strCompress, rotMatrix, zeroMatrix, strRot,
} = require('./questions.js');

// 1.1: isUnique
test('1.1: checks if string is unique', () => {
  expect(isUnique('james')).toBe(true);
});

// 1.2: checkPermutation
test('1.2: should check if one string is a permutation of the other', () => {
  expect(checkPermutation('apple', 'ppale')).toBe(true);
});

// 1.3: urlify
test('1.3: should replace " " with "%20"', () => {
  expect(urlify('Mr. James Contreras')).toBe('Mr.%20James%20Contreras');
});

// 1.4: palindromePerm TODO
xtest('1.4: should check if string is a permutation of a palindrome', () => {
  expect(palindromePerm('tact coa')).toBe(true);
});

// 1.5: oneAway
test('1.5: shoud return true if strings are one letter away from the other', () => {
  expect(oneAway('pale', 'ple')).toBe(true);
});

// 1.6 strCompress
test('1.6: should compress string', () => {
  expect(strCompress('aabcccccaaa')).toBe('a2b1c5a3');
});

test('1.6: should return origional string if compressed is longer', () => {
  expect(strCompress('abcdefghijklmnopq')).toBe('abcdefghijklmnopq');
});

// 1.7 rotMatrix TODO
xtest('1.7: should rotate NxN matrix', () => {

});

// 1.8 zeroMatrix TODO
xtest('1.8: should rotate NxN matrix', () => {

});

// 1.9 strRot
test('1.9: should check if string 2 is rotation of string 1', () => {
  expect(strRot('waterbottle', 'erbottlewat')).toBe(true);
});
