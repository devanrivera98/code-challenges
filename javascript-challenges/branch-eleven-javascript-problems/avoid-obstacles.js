export function avoidObstacles(inputArray) {
  inputArray.sort((a, b) => a - b);
  console.log(inputArray);
  for (let i = 1; i < Math.max(...inputArray); i++) {
    if (!(inputArray.includes(i))) {
      console.log(i);
      let currentNumber = 0;
      currentNumber += i;
      while (i < Math.max(...inputArray)) {
        if ((inputArray.includes(currentNumber))) {
          break;
        } else if (currentNumber > Math.max(...inputArray)) {
          return i;
        }
        currentNumber += i;
      }
    }
  }
  return Math.max(...inputArray) + 1;
}
