export function classifyStrings(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let countVowels = 0;
  let countConsonants = 0;
  let isConsecutiveVowels = false;
  let isConsecutiveConsonants = false;
  // console.log(s.length);
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (s[i] === '?') {
      console.log(s[i]);
      countVowels++;
      countConsonants++;
    } else if (vowels.includes(s[i])) {
      countVowels++;
      countConsonants = 0;
    } else {
      countVowels = 0;
      countConsonants++;
    }
    if (countVowels >= 3 || countConsonants >= 5) {
      break;
    }
  }
  if (countVowels >= 3) {
    console.log(countVowels);
    isConsecutiveVowels = true;
  }
  if (countConsonants >= 5) {
    isConsecutiveConsonants = true;
  }

  console.log(countVowels);
  if (isConsecutiveConsonants && s.includes('?')) {
    return 'mixed';
  } else if (isConsecutiveVowels && s.includes('?')) {
    return 'mixed';
  } else if (isConsecutiveVowels && isConsecutiveConsonants) {
    return 'bad';
  } else if (isConsecutiveVowels || isConsecutiveConsonants) {
    return 'bad';
  } else {
    return 'good';
  }

  // if (isConsecutiveConsonants && isConsecutiveVowels && s.includes('?')) {
  //   return 'mixed';
  // } else if (isConsecutiveVowels && isConsecutiveConsonants) {
  //   return 'bad';
  // } else if (isConsecutiveVowels || isConsecutiveConsonants) {
  //   return 'bad';
  // } else if (s.includes('?')) {
  //   return 'mixed';
  // } else {
  //   return 'good';
  // }
}
