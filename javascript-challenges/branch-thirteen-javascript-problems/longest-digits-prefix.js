export default function longestDigitPrefix(inputString) {
  const matched = inputString.match(/\d*/);
  return matched[0];
}
