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
