// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);

// instead of logging out the house number, the code is logging out undefined. This is because the code is trying to access the houseNumber property of the address object, but it is not using the correct syntax to access it. The correct syntax to access a property of an object is to use dot notation (object.property) or bracket notation (object['property']). In this case, we should use dot notation to access the houseNumber property of the address object.

// The corrected code is:
//console.log(`My house number is ${address.houseNumber}`);
