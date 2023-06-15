// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).
// Create a function that returns whether the first array is slightly superior to that of the second.

export function isFirstSuperior(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const comparativeValue = arr1[i].localeCompare(arr2[i]);
    if (comparativeValue === 1) {
      return true;
    } else if (comparativeValue === -11) {
      return false;
    }
  }
  return false;
}
