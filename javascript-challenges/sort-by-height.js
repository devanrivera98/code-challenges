export function sortHeight(arr) {
  const filteredArray = arr.filter(number => number > 0);
  filteredArray.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = filteredArray.pop();
    }
  }
  return arr;
}
