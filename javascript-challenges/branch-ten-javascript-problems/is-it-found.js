export function isItFound(s, x) {
  if (s.indexOf(x)) {
    return (s.indexOf(x));
  } else if (s.indexOf(x) === 0) {
    return 0;
  }
}
