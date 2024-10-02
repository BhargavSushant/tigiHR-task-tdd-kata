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
