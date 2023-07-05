export function replicateRecursion(amount, count) {
  if (amount <= 0) {
    return [];
  }

  return [count].concat(replicateRecursion(amount - 1, count));
}
