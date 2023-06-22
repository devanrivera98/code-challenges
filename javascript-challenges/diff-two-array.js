// export function diffArray(arr1, arr2) {
//   const newArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!(arr2.includes(arr1[i]))) {
//       console.log(arr1.length);
//       newArray.push(arr1[i]);
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (!(arr1.includes(arr2[i]))) {
//       console.log('this is arr2', arr2.length);
//       newArray.push(arr2[i]);
//     }
//   }
//   console.log('this is the new array', newArray);
//   console.log(arr2[3]);
//   return newArray;
// }

export function diffArray(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  return combinedArray.filter(index => !arr1.includes(index) || !arr2.includes(index));
}
