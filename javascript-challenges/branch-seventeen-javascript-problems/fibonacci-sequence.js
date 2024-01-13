export function fibonacciSequence(input) {

  if (input === 0) {
    return [];
  }

  let firstNumber = 0;
  let secondNumber = 1;
  const countArray = [firstNumber, secondNumber];
  input = input - 2;

  while (input > 0) {
    const nextSequence = firstNumber + secondNumber;
    countArray.push(nextSequence);
    firstNumber = secondNumber;
    secondNumber = nextSequence;
    input = input - 1;
  }
  console.log(countArray);
  return countArray;
}
