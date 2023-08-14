export default function arrayMaxConsecutiveSum(inputArray, k) {
  let maximumTotal = 0;
  for (let i = 0; i < inputArray.length - (k - 1); i++) {
    let count = 0;
    let currentCount = 0;
    while (k > count) {
      currentCount += inputArray[i + count];
      count++;
    }
    if (currentCount > maximumTotal) {
      maximumTotal = currentCount;
    }
  }
  return maximumTotal;
}
