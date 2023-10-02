export function adjacentElements(inputArray) {
  let largestSoFar = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > largestSoFar) {
      largestSoFar = inputArray[i] * inputArray[i + 1];
    }
  }
  return largestSoFar;

}
