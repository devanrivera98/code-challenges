export function isLucky(n) {
  const stringNumber = n.toString();
  const halfLength = stringNumber.length / 2 - 1;
  let firstHalf = 0;
  let secondHalf = 0;
  for (let i = 0; i <= halfLength; i++) {
    firstHalf += Number(stringNumber[i]);
  }
  for (let j = (halfLength + 1); j < stringNumber.length; j++) {
    secondHalf += Number(stringNumber[j]);
  }
  if (firstHalf === secondHalf) {
    return true;
  } else {
    return false;
  }
}
