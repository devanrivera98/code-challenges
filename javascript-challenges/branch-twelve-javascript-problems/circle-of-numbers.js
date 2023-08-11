export default function circleOfNumbers(n, firstNumber) {
  if (firstNumber >= (n / 2)) {
    const dividine = n / 2;
    const difference = n - firstNumber;
    const total = dividine - difference;
    return total;
  } else {
    const newDifference = (n / 2) - firstNumber;
    console.log('this is the newDifference', newDifference);
    return n - newDifference;
  }
}
