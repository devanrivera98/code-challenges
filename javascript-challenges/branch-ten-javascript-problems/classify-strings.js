export function classifyStrings(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let countVowels = 0;
  let countConsonants = 0;
  let isConsecutiveVowels = false;
  let isConsecutiveConsonants = false;
  console.log(s.length);

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '?') {
      countVowels++;
      countConsonants++;
    }
    if (vowels.includes(s[i])) {
      countVowels++;
      countConsonants = 0;
    }
    if (!(vowels.includes(s[i]))) {
      countVowels = 0;
      countConsonants++;
    }
  }
  if (countVowels >= 3) {
    isConsecutiveVowels = true;
  }
  if (countConsonants >= 5) {
    isConsecutiveConsonants = true;
  }

  if (isConsecutiveVowels && isConsecutiveConsonants) {
    return 'bad';
  } else if (isConsecutiveVowels || isConsecutiveConsonants) {
    return 'bad';
  }
}
