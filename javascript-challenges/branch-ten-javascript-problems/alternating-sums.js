export function alternatingSums(arr) {
  console.log(arr);
  let indexOne = 0;
  let indexTwo = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      indexOne += arr[i];
    } else {
      indexTwo += arr[i];
    }
  }
  const newArray = [indexOne, indexTwo];
  return newArray;
}
