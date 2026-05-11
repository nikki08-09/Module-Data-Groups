/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test.todo("given an empty array, returns -Infinity");
const emptyArray = [];
test("given an empty array, returns -Infinity", () => {
  expect(findMax(emptyArray)).toBe(-Infinity);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test.todo("given an array with one number, returns that number");
const singleNumberArray = [42];
test("given an array with one number, returns that number", () => {
  expect(findMax(singleNumberArray)).toBe(42);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test.todo(
  "given an array with both positive and negative numbers, returns the largest number overall"
);
const mixedNumbersArray = [-10, 20, -5, 30, 0];
test("given an array with both positive and negative numbers, returns the largest number overall", () => {
  expect(findMax(mixedNumbersArray)).toBe(30);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test.todo(
  "given an array with just negative numbers, returns the closest one to zero"
);
const negativeNumbersArray = [-20, -5, -15, -1];
test("given an array with just negative numbers, returns the closest one to zero", () => {
  expect(findMax(negativeNumbersArray)).toBe(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test.todo(
  "given an array with decimal numbers, returns the largest decimal number"
);
const decimalNumbersArray = [1.5, 2.3, 0.7, 3.1];
test("given an array with decimal numbers, returns the largest decimal number", () => {
  expect(findMax(decimalNumbersArray)).toBe(3.1);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
