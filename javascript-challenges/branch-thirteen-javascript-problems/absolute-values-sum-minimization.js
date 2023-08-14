export default function absoluteValuesSumMinimization(a) {
  let lowestNumber = 0;
  let lowestCount = 10000000000;
  for (let i = 0; i < a.length; i++) {
    let currentCount = 0;
    for (let j = 0; j < a.length; j++) {
      currentCount = currentCount + Math.abs(a[j] - a[i]);
    }
    // console.log(a[i], currentCount);
    if (currentCount < lowestCount) {
      lowestCount = currentCount;
      lowestNumber = a[i];
    }
  }
  return lowestNumber;
}
