export function palindromeRearranging(inputString) {
  const temp = [...inputString].sort();
  let ctr = 0;

  for (let i = 0; i < temp.length; i += 2) {
    if (temp[i] !== temp[i + 1]) {
      i--;
      ctr++;
    }
  }
  return !(ctr > 1);
}
