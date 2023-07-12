export function allLongestStrings(arr) {
  const newArray = arr.sort((a, b) => {
    return b.length - a.length;
  });
  return arr.filter(words => words.length === newArray[0].length);
}
