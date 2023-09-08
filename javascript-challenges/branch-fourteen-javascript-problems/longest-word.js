export default function longestWord(text) {
  const patt = /[^a-z^A-Z]/;

  text = text.split(patt);

  const longest = text.reduce(function (a, b) { return a.length > b.length ? a : b; });

  return longest;
}
