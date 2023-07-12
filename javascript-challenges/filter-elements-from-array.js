export function filterElements(arr, fn) {
  const emptyArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      emptyArray.push(arr[i]);
    }
  }
  return emptyArray;
}
