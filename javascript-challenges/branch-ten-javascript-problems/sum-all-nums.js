// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

export function sumAll(arr) {
  let sum = 0;
  if (arr[0] < arr[1]) {
    for (let i = arr[1]; i >= arr[0]; i--) {
      sum += i;
    }
    return sum;
  } else if (arr[0] > arr[1]) {
    for (let i = arr[1]; i <= arr[0]; i++) {
      sum += i;
    }
    return sum;
  }
}

sumAll([1, 5]);
