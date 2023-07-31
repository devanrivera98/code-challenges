export function evenDigitsOnly(n) {
  const numString = n.toString();
  for (let i = 0; i < numString.length; i++) {
    // console.log(numString[i]);
    if (Number(numString[i]) % 2 !== 0) {
      return false;
    }
  }
  return true;
}
