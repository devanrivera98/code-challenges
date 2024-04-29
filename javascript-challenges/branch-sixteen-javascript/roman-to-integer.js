export default function romanInteger(s) {
  const numerals = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };

  let count = 0;
  for (let i = 0; i < s.length;) {
    const index = s[i] + s[i + 1];
    const word = numerals[index] ? index : s[i];
    count += numerals[word];
    i += word.length;
  }
  return count;
}
