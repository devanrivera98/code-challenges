export function chunckArrayOne(arr, size) {
  const totalArray = [];
  for (let i = 0; i < size; i++) {
    if (i - (size - 1) === 0) {
      console.log('ok');
    }
    // if the above is true you can end the previous array and make a new one
    // uncomment the belo
    // totalArray.push(arr[i]);
    // console.log(totalArray);
  }
  return totalArray;
}
