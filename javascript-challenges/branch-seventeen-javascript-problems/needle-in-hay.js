export default function needInHay(haystack, needle) {
  if (!(haystack.includes(needle))) {
    return -1;
  }

  if (haystack.includes(needle) && haystack[0] === needle[0]) {
    return 0;
  }

  let newHaystack = haystack.split('');
  console.log(newHaystack);
  let startingIndex;
  let increaser;

  for (let i = 0; i < needle.length; i++) {
    if (newHaystack.indexOf(needle[0])) {
      startingIndex = newHaystack.indexOf(needle[0]);
      increaser = newHaystack.indexOf(needle[0]);
      console.log(startingIndex);
      newHaystack = newHaystack.slice(startingIndex);
      console.log('this was removed', newHaystack);
    } else if (needle[i] === haystack.charAt(increaser + 1)) {
      console.log(true, needle[i], newHaystack.indexOf(needle[i]));
      increaser++;
    } else {
      return -1;
    }
  }
  return startingIndex;
}
