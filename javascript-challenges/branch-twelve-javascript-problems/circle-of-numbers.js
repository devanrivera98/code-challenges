export default function circleOfNumbers(n, firstNumber) {
  if (firstNumber >= (n / 2)) {
    const dividine = n / 2;
    const difference = n - firstNumber;
    const total = dividine - difference;
    return total;
  } else {
    const newDifference = (n / 2) - firstNumber;
    return n - newDifference;
  }
}
