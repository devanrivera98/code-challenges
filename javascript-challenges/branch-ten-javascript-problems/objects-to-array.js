// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(obj) {
  const newArray = [];
  for (const [key, value] of Object.entries(obj)) {
    newArray.push([`${key}`, value]);
  }
  return newArray;
}

toArray();
