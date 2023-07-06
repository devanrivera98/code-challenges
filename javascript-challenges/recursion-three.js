export function replicateRecursion(times, count) {
  if (amount <= 0) {
    return [];
  }

  return [count].concat(replicateRecursion(times - 1, count));
}
