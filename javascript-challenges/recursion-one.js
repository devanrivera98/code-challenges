export function multiplyRecursion(arr, n) {
  if (n < 0) {
    return 1;
  }

  return multiplyRecursion(arr, n - 1) * arr[n];
}
