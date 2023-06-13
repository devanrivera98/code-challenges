// Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1, arr2) {
  const arrOneMiddle = arr1.length / 2;
  console.log(arr1.length / 2);
  arr1.splice(arrOneMiddle, 0, ...arr2);
  return arr1;
}

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);
