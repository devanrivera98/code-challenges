export default function functionComposition(fn) {
  let isComplete = false;
  let results = 0;
  return (...args) => {
    if (isComplete) {
      return undefined;
    }
    results = fn(...args);
    isComplete = true;
    return results;
  };
}
