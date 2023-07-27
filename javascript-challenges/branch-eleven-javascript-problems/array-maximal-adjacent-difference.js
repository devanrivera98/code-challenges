export function arrayMaximalAdjacentDifference(inputArray) {
  let maxDifference = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const eachDifference = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (eachDifference > maxDifference) {
      maxDifference = eachDifference;
    }
  }
  return maxDifference;
}
