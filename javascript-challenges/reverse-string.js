// reverse a string that is passed as the argument

export function FirstReverse(str) {

  // code goes here
  let reverseString = '';
  for (let i = 1; i <= str.length; i++) {
    reverseString += str[str.length - i];
  }
  return reverseString;
}
