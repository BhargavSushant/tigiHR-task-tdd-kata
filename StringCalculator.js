class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }

    // handle one or more inputs
    const inputArr = numbers.replace(/\n/g, ",").split(",").map(Number);
    return inputArr.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
