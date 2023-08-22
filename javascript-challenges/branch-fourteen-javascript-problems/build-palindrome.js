export default function buildPalindrome(str) {
  const reverseString = str.split('').reverse().join('');
  console.log(reverseString);
  if (str === reverseString) {
    return str;
  }

}
