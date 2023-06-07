// Create a function that returns true if the first array can be nested inside the second and false otherwise.

function canNest(arr1, arr2) {
  console.log(Math.min(...arr1));
  if ((Math.min(...arr1) > Math.min(...arr2)) && (Math.max(...arr1) < Math.max(...arr2))) {
    return true;
  } else {
    return false;
  }
}
canNest();
