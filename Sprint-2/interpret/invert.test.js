const invert = require("./invert");

test("invert should swap keys and values in the object", () => {
  expect(invert({ a: 1 })).toEqual({ 1: "a" });
  expect(invert({ a: 1, b: 2 })).toEqual({ 1: "a", 2: "b" });
  expect(invert({ x: 10, y: 20 })).toEqual({ 10: "x", 20: "y" });
});
test("invert should handle empty objects", () => {
  expect(invert({})).toEqual({});
});
test("invert should handle objects with non-string keys and values", () => {
  expect(invert({ 1: "a", 2: "b" })).toEqual({ a: "1", b: "2" });
  expect(invert({ true: false, false: true })).toEqual({
    false: "true",
    true: "false",
  });
});
test("invert should handle objects with duplicate values", () => {
  expect(invert({ a: 1, b: 1 })).toEqual({ 1: "b" });
});
