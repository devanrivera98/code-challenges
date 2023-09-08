export default function deleteDigit(n) {
  let newNumber = 0;
  const nString = n.toString();
  // console.log(nString);
  for (let i = 0; i < nString.length; i++) {
    const slicedNumber = nString.replace(nString[i], '');
    // console.log('slicedNumber', slicedNumber);
    if (parseInt(slicedNumber) > newNumber) {
      newNumber = parseInt(slicedNumber);
    }
  }
  return parseInt(newNumber);
}
