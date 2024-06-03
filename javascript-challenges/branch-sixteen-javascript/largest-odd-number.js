export default function largestOdd(num) {
  let newNum = num;
  for (let i = num.length - 1; i >= 0; i--) {
    if (newNum[i] % 2 === 0) {
      newNum = newNum.slice(0, i);
      console.log('here');
    } else {
      return newNum;
    }
  }
  return '';
}
