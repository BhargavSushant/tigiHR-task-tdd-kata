class StringCalculator {
  add(numbers) {
    if (numbers === "") {
      return 0;
    }
    // removing delim
    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n", 2);
      const delimiterPart = parts[0].slice(2);

      // Check if there are multiple delimiters
      const delimiterPattern = /\[(.*?)\]/g;
      const delimiters = [];
      let match;

      while ((match = delimiterPattern.exec(delimiterPart)) !== null) {
        delimiters.push(match[1]);
      }

      if (delimiters.length === 0) {
        delimiter = delimiterPart;
      } else {
        delimiter = delimiters.join("|");
      }
      //   console.log(delimiters);

      numbers = parts[1];
    }

    // replace \n with delimeter
    // const inputArr = numbers
    //   .replace(/\n/g, delimiter)
    //   .split(delimiter)
    //   .map(Number);

    // converting the input array to proper format
    const inputArr = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);

    // Handling negative numbers
    const negative = inputArr.filter((num) => num < 0);
    if (negative.length > 0) {
      throw new Error(`negatives not allowed: ${negative.join(",")}`);
    }

    // Ignore numbers >= 1000

    const filteredArray = inputArr.filter((num) => num <= 1000);

    return filteredArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
