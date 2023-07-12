export function chunckArrayOne(arr, size) {
  const totalArray = [];
  for (let i = 0; i < arr.length; i++) {
    const newArray = [];
    const counter = 1;
    if (counter === size) {
      newArray.push(arr[i]);
      console.log(arr[i]);
      totalArray.push(newArray);
    }
    console.log(totalArray);
  }
  return totalArray;
}
