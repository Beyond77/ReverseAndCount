export const countOcurrencies = (numbers, numberToCount) => {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const numberStr = numbers[i].toString();
    for (let j = 0; j < numberStr.length; j++) {
      if (numberStr[j] === numberToCount.toString()) {
        count++;
      }
    }
  }
  return count;
};
