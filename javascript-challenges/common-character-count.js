export function commonCharacters(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) !== -1) {
      s2 = s2.replace(s1[i], '');
      // console.log(s2);
      count++;
    }
  }
  // console.log(s2);
  return count;
}
