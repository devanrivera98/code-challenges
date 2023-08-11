export function alphabeticShift(inputString) {

  let newOutput = '';

  for (let i = 0; i < inputString.length; i++) {
    let numericalPlacement = inputString.charCodeAt(i) + 1;
    if (numericalPlacement > 122) {
      numericalPlacement = 97; // Unicode value for 'a'
    }
    const nextLetter = String.fromCodePoint(numericalPlacement);
    newOutput = newOutput.concat(nextLetter);
  }
  return newOutput;
}
