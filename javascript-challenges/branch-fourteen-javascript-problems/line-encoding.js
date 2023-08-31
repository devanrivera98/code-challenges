export default function lineEncoding(s) {
  let newString = '';
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        newString += count + s[i];
      } else {
        newString += s[i];
      }
      count = 1;
    }
  }
  return newString;
}
