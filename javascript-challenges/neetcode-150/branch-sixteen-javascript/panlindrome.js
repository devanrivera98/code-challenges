export default function panlindrome(x) {
  const numString = x.toString();
  let start;
  if (numString.length % 2 === 0) {
    start = numString.length / 2;
  } else {
    start = Math.ceil(numString.length / 2);
  }

  for (let i = 0; i < start; i++) {
    if (numString[i] !== numString[numString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
