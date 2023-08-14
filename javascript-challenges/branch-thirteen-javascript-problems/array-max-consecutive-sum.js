export default function arrayMaxConsecutiveSum(inputArray, k) {
  let maximumTotal = 0;
  for (let i = 0; i < inputArray.length - (k - 1); i++) {
    let count = 2;
    let currentCount = 0;
    while (k >= count) {
      currentCount = currentCount + inputArray[i] + inputArray[i + 1];
      count++;
      console.log(inputArray[i], currentCount);
    }
    if (currentCount > maximumTotal) {
      maximumTotal = currentCount;
    }
  }
  return maximumTotal;
}
