export function replicateRecursion(times, count) {
  if (times <= 0) {
    return [];
  }

  return [count].concat(replicateRecursion(times - 1, count));
}
