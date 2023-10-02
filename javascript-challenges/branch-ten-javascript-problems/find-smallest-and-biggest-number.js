// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
  const newArray = [];
  newArray.push(Math.min(...arr));
  newArray.push(Math.max(...arr));
  return newArray;
}
minMax();
