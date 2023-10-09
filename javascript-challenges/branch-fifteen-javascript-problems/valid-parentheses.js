export default function validParentheses(s) {
  const regex = /[a-zA-Z0-9]+/g;
  if (regex.test(s) || s.length % 2 !== 0 || (s[0] === ')' || s[0] === ']' || s[0] === '}')) {
    return false;
  }
  let newString = '';
  for (let i = 0; i < s.length; i++) {
    newString += s.slice(i, i + 1);

  }
}
