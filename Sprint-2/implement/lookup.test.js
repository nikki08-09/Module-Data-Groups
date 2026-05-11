const createLookup = require("./lookup.js");

test.todo("creates a country currency code lookup for multiple codes");

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
test("returns an empty object if the input is not an array", () => {
  expect(createLookup("not an array")).toEqual({});
  expect(createLookup(123)).toEqual({});
  expect(createLookup({})).toEqual({});
  expect(createLookup(null)).toEqual({});
  expect(createLookup(undefined)).toEqual({});
});

test("returns an empty object if the input is an empty array", () => {
  expect(createLookup([])).toEqual({});
});

test("creates a lookup object for valid input", () => {
  const input = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["GB", "GBP"],
  ];
  const expectedOutput = {
    US: "USD",
    CA: "CAD",
    GB: "GBP",
  };
  expect(createLookup(input)).toEqual(expectedOutput);
});
