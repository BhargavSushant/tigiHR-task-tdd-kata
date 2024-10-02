class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    // removing delim
    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2);
      delimiter = parts[0].slice(2);
      numbers = parts[1];
    }
    // console.log(delimiter);

    // replace \n with delimeter
    const inputArr = numbers
      .replace(/\n/g, delimiter)
      .split(delimiter)
      .map(Number);
    // console.log(inputArr);

    return inputArr.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
