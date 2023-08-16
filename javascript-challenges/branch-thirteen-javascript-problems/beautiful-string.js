export default function beautifulString(inputString) {
  if (!(inputString.includes('a'))) {
    return false;
  }
  // console.log(inputString[0]);
  const uniqueCharacters = [];
  for (let i = 0; i < inputString.length; i++) {
    console.log(inputString[i]);
    if (!(uniqueCharacters.includes(inputString[i]))) {
      uniqueCharacters.push(inputString[i]);
    }
  }
  uniqueCharacters.sort();
  console.log(uniqueCharacters);
}
