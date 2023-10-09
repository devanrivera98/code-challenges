export default function LongestPrefix(stringArr) {
  if (stringArr === '') return '';
  for (let i = 0; i < stringArr[0].length; i++) {
    if (!stringArr.every((string) => string[i] === stringArr[0][i])) {
      return stringArr[0].slice(0, i);
    }
  }
  return stringArr[0];
}
