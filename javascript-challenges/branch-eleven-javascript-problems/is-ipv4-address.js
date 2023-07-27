export function isIpv4Address(inputString) {
  const inputArray = inputString.split('.');
  // console.log(inputArray);
  if (inputArray.length !== 4 || inputArray.includes('') || inputString.match(/[a-z]/g)) {
    return false;
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 255 || (inputArray[i].indexOf('0') === 0 && inputArray[i].length > 1)) {
      return false;
    }
  }
  return true;
}
