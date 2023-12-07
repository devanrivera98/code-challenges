export default function filterArray(arr, fn) {
  const newData = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(fn(arr[i]));
    if (fn(arr[i], i)) {
      newData.push(arr[i]);
    }
  }
  return newData;
}
