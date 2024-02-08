export default function chuckArray(arr, size) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length < size) {
    return [arr];
  }
  const newArray = [];
  const copyArray = arr;
  while (copyArray.length > size) {
    newArray.push(copyArray.splice(0, size));
  }
  newArray.push(copyArray);
  return newArray;
}
