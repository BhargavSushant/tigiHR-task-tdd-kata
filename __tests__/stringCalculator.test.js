const StringCalculator = require("../StringCalculator");

// tests empty string
test("returns 0 for an empty string", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("")).toBe(0);
});

// test for single number
test("returns the sum of one number", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1")).toBe(1);
});

// test for 2 input numbers
test("returns the sum of two numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2")).toBe(3);
});

//test for unknown amount of numbers.
test("returns sum of Unknown Numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1,2,3,4")).toBe(10);
});

// test for handling new lines between numbers
test("handle new lines between numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("1\n1,3")).toBe(5);
});

// test for handling
test("handle new lines between numbers", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//;\n1;2")).toBe(3);
});

// test for Negarive numbers
test("throws an exception for negative numbers", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2")).toThrow("negatives not allowed: -2");
});

test("throws an exception with all negative numbers", () => {
  const calculator = new StringCalculator();
  expect(() => calculator.add("1,-2,-3")).toThrow(
    "negatives not allowed: -2,-3"
  );
});

test("ignores numbers greater than 1000", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("2,1001")).toBe(2);
});

// Multiple Delimeter testing

test("supports multiple delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[*][%]\n1*2%3")).toBe(6);
});

// Long delimeter test
test("supports long delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[***]\n1***2***3")).toBe(6);
});

// Many long delimeters test
test("supports multiple long delimiters", () => {
  const calculator = new StringCalculator();
  expect(calculator.add("//[**][%%]\n1**2%%3")).toBe(6);
});
