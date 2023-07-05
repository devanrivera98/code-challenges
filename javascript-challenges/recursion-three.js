export function replicateRecursion(amount, count) {
  const newArray = [];
  if (amount < 0) {
    return newArray;
  }
  if (amount === 0) {
    return newArray;
  }

  return replicateRecursion(amount - 1, count) + newArray.push(count);
}
