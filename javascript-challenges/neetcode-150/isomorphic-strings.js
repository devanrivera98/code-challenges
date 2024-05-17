export default function isomorphicStrings(s, t) {
  const firstMap = new Map();
  const secondMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (!(firstMap.has(charS)) && secondMap.has(charT)) {
      return false
    }

    if ((firstMap.has(charS)) && !(secondMap.has(charT))) {
      return false
    }

    if (!(firstMap.has(charS))) {
      firstMap.set(charS, charT)
    }
    if (!(secondMap.has(charT))) {
      secondMap.set(charT, charS)
    }
    if (firstMap.has(charS)) {
      if (firstMap.get(charS) !== charT) {
        return false;
      }
    }
  }
  return true;
  console.log(secondMap)
  console.log(firstMap)

}
