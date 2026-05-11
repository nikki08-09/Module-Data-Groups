// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});
test("parses querystring values containing &", () => {
  expect(parseQueryString("equation=x&y=1")).toEqual({
    equation: "x",
    y: "1",
  });
});
test("parses querystring values containing empty value", () => {
  expect(parseQueryString("equation=")).toEqual({
    equation: "",
  });
});
test("parses querystring values containing empty key", () => {
  expect(parseQueryString("=x")).toEqual({
    "": "x",
  });
});
test("parses querystring values containing empty key and value", () => {
  expect(parseQueryString("=")).toEqual({
    "": "",
  });
});
test("strips leading ?", () => {
  expect(parseQueryString("?equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});
test("handles querystring with only ?", () => {
  expect(parseQueryString("?")).toEqual({});
});
test("decodes complex values", () => {
  expect(parseQueryString("message=Hello%20World")).toEqual({
    message: "Hello World",
  });
});
test("decodes Urll encoded keys", () => {
  expect(parseQueryString("greeting%20message=Hello%20World")).toEqual({
    "greeting message": "Hello World",
  });
});
test("ignores empty segments from double &&", () => {
  expect(parseQueryString("a=1&&b=2")).toEqual({
    a: "1",
    b: "2",
  });
});
