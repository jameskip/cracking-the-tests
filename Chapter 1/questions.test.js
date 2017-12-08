const { isUnique, checkPermutation, urlify } = require('./questions.js');

// 1.1: isUnique
test('1.1: checks if string is unique', () => {
  expect(isUnique('james')).toBe(true);
});

test('1.1: checks if string is not unique', () => {
  expect(isUnique('jjames')).toBe(false);
});

// 1.2: checkPermutation
test('1.2: should check if one string is a permutation of the other', () => {
  expect(checkPermutation('apple', 'ppale')).toBe(true);
})

// 1.3: urlify
test('1.3: should replace " " with "%20"', () => {
  expect(urlify('Mr. James Contreras')).toBe('Mr.%20James%20Contreras')
})

// 1.4:
test('1.4: should check if string is a permutation of a palindrome', () => {
  
})
