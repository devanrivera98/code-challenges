// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

function largestSwap(num) {
  const stringNumber = num.toString();
  console.log(stringNumber);
  const firstNumber = stringNumber.charAt(0);
  const lastNumber = stringNumber.charAt(1);
  const reverseNumber = lastNumber + firstNumber;
  if (reverseNumber > stringNumber) {
    return false;
  } else {
    return true;
  }
}

largestSwap(27);
