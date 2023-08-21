export default function firstDigits(inputString) {
  const matched = inputString.match(/[0-9]/);

  return matched[0];
}
