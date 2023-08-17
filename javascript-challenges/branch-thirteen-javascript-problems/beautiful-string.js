export default function beautifulString(inputString) {
  if (!(inputString.includes('a'))) {
    return false;
  }
  // console.log(inputString[0]);
  const uniqueCharacters = [];
  for (let i = 0; i < inputString.length; i++) {
    if (!(uniqueCharacters.includes(inputString[i]))) {
      uniqueCharacters.push(inputString[i]);
    }
  }
  uniqueCharacters.sort();
  // console.log(uniqueCharacters);

  let count = inputString.match(new RegExp(uniqueCharacters[0], 'g')).length;
  for (let i = 1; i < uniqueCharacters.length; i++) {
    const newCount = inputString.match(new RegExp(uniqueCharacters[i], 'g')).length;
    if ((uniqueCharacters[i].charCodeAt() - 1) !== (uniqueCharacters[i - 1].charCodeAt())) {
      return false;
    } else if (newCount <= count) {
      count = newCount;
    } else {
      return false;
    }
    // console.log('this is', uniqueCharacters[i].charCodeAt());
  }
  return true;
}
