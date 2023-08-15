export default function digitDegree(n) {
  let count = 0;
  let newSum = n.toString();
  if (n < 10) {
    return count;
  }
  while (newSum >= 10) {
    let currentTotal = 0;
    for (let i = 0; i < newSum.length; i++) {
      currentTotal += parseInt(newSum[i]);
    }
    newSum = currentTotal.toString();
    count++;
  }
  return count;
}
