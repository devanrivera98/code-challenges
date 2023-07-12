export function chunckArrayOne(arr, size) {
  const totalArray = [];
  let index = 0;
  while (index < arr.length) {
    totalArray.push(arr.slice(index, index + size));
    index += size;
  }
  return totalArray;
}
