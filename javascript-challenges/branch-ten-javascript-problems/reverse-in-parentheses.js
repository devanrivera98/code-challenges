export function reverseParentheses(inputString) {
  while (inputString.includes('(')) {
    const startIndex = inputString.indexOf('(');
    const endIndex = inputString.indexOf(')');

    if (endIndex !== -1) {
      const substring = inputString.substring(startIndex + 1, endIndex);
      const reversedSubstring = [...substring].reverse().join('');

      inputString = inputString.replace(`(${substring})`, reversedSubstring);
    }
  }

  return inputString;
}

// find what characters need to be reversed
// separate those characters
// reverse them
// replace the position that they took
