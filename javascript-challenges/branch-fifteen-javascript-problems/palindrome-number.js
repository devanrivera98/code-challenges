export default function palindromeNumber(x) {
  if (x < 0) return false;
  const numString = x.toString();
  const splitString = numString.split('');
  const reverseString = splitString.reverse();
  const joinString = reverseString.join('');

  return (Number(joinString) === x);

  // if (x < 0) return false;
  // const numString = x.toString();

  // if (Number.isInteger(numString.length / 2)) {
  //   for (let i = 0; i < numString; i++) {
  //     if (numString[i] !== numString[(numString.length - 1) - i]) {
  //       return false;
  //     }
  //   }
  // }

  // if (!Number.isInteger(numString.length / 2)) {
  //   for (let i = 0; i < (Math.floor(numString.length / 2)); i++) {
  //     if (numString[i] !== numString[(numString.length - 1) - i]) {
  //       return false;
  //     }
  //   }
  // }
  // return true;
}
