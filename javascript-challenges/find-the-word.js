// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:The wanted word is in lowercase.The crowd of letters is all in uppercase.

function detectWord(str) {
  let newWord = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase() && newWord.length === 0) {
      newWord = str[i];
    } else if (str[i] === str[i].toLowerCase() && newWord.length >= 1) {
      newWord += str[i];
    }
  }
  return newWord;
}

detectWord('UcUNFYGaFYFYGtNUH');
