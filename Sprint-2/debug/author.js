// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(author[value]);
}
// The problem is that the for...of loop is being used to iterate over an object, which is not iterable.
// To fix this, we can use a for...in loop instead, which is designed to iterate over the properties of an object.

// for (const key in author) {
// console.log(author[key]);
// }
