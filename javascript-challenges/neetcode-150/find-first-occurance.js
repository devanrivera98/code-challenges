export default function firstOccurance(haystack, needle) {
  let startIndex = 0;
  let i = 0;
  let j = 0;


  while (i <= haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else if (haystack[i] !== needle[j]) {
      startIndex = startIndex + 1
      i = startIndex
      j = 0
    }

    if (j === needle.length) {
      return startIndex
    }
  }
  return -1
}
