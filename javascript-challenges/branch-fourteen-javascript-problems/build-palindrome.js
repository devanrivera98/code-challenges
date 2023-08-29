export default function buildPalindrome(st) {
  if (isPalindrome(st)) return st;
  for (let i = 0; i < st.length; i++) {
    if (isPalindrome(st.slice(i, st.length))) {
      return st + Array.from(st.slice(0, i)).reverse().join('');
    }
  }
}

function isPalindrome(string) {
  console.log(Array.from(string).reverse().join(''));
  return string === Array.from(string).reverse().join('');
}
