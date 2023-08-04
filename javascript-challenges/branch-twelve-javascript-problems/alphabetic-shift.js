export function alphabeticShift(inputString) {
  const numericalPlacement = inputString.charCodeAt(0) + 1;
  console.log(numericalPlacement);
  return String.fromCodePoint(numericalPlacement);
}
