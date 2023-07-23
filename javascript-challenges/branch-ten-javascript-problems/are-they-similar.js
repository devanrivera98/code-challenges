export function areTheySimilar(a, b) {

  let swapCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      swapCount++;
    }
  }
  a.sort();
  b.sort();
  // console.log(a);
  // console.log(b);
  return a.toString() === b.toString() && swapCount < 3;
}
// }
