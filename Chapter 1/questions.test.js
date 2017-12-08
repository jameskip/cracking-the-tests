const { isUnique } = require('./questions.js');

// 1.1
test('checks if string is unique', () => {
  expect(isUnique("james")).toBe(true);
  expect(isUnique("jjaammees")).toBe(false);
});
