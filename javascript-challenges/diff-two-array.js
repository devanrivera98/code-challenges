export function diffArray(arr1, arr2) {
  const newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr2.includes(arr1[i]))) {
      console.log('ok');
      newArray.push(arr1[i]);
    }
  }
  return newArray;
}
