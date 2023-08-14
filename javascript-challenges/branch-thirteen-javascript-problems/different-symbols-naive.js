export default function differentSymbolsNaive(s) {
  let count = 0;
  let newLetters = '';
  for (let i = 0; i < s.length; i++) {
    if (!(newLetters.includes(s[i]))) {
      newLetters = newLetters.concat(s[i]);
      count++;
    }
  }
  return count;
}
