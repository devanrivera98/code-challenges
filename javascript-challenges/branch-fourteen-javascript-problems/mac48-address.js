export default function macAddress(inputString) {
  const charA = 'A';
  const charF = 'F';
  const numberZero = '0';
  const numberNine = '9';

  const unicodeA = charA.charCodeAt(0);
  const unicodeF = charF.charCodeAt(0);
  const unicodeZero = numberZero.charCodeAt(0);
  const unicodeNine = numberNine.charCodeAt(0);

  const inputSplitArray = inputString.split('-');

  if (inputSplitArray.length !== 6) {
    return false;
  }

  for (let i = 0; i < inputSplitArray.length; i++) {
    if (inputSplitArray[i].length !== 2) {
      return false;
    }
    for (let j = 0; j < inputSplitArray[i].length; j++) {
      const charCode = inputSplitArray[i].charCodeAt(j);

      if ((charCode >= unicodeA && charCode <= unicodeF) ||
        (charCode >= unicodeZero && charCode <= unicodeNine)) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}
