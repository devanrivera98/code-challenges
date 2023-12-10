export default function applyTransform(arr, fn) {
  const newData = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn.length === 1) {
      newData[i] = fn(arr[i]);
    } else {
      newData[i] = fn(arr[i], i);
    }
  }
  return newData;
}
