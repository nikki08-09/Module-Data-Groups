// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
//{a: 1}

// b) What is the current return value when invert is called with { a: 1, b: 2 }
//{a: 1, b: 2}

// c) What is the target return value when invert is called with {a : 1, b: 2}
//{"1": "a", "2": "b"}

// c) What does Object.entries return? Why is it needed in this program?
// Object.entries returns an array of a given object's own enumerable string-keyed property [key, value] pairs. It is needed in this program to iterate over the key-value pairs of the input object so that we can swap them and create the inverted object.

// d) Explain why the current return value is different from the target output
// The current return value is different from the target output because in the current implementation,
// we are assigning the value to a property named "key" in the inverted object,
//  instead of using the actual key from the original object.
// This means that all values will be assigned to the same property "key",
//  resulting in an incorrect output.
// e) Fix the implementation of invert (and write tests to prove it's fixed!)
