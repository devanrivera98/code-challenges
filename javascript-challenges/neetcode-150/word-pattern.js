export default function wordPattern(pattern, s) {

let firstMap = new Map();
let secondMap = new Map();

let stringArray = s.split(' ');

if (pattern.length !== stringArray.length) {
  return false
}

for (let i = 0; i < pattern.length; i++) {

  let charP = pattern[i];
  let charS = stringArray[i];


  if (!(firstMap.has(charP))) {
    firstMap.set(charP, charS)
  }

  if (!(secondMap.has(charS))) {
    secondMap.set(charS, charP)
  }

  if (firstMap.has(charP) && !(secondMap.has(charS))) {
    if (firstMap.get(charP) != charS) {
      return false
    }
  }

  if (secondMap.has(charS) && !(firstMap.has(charP))) {
    if (secondMap.get(charS) !== charP) {
      return false
    }
  }

  if (firstMap.has(charP) && secondMap.has(charS)) {
    if (firstMap.get(charP) !== charS) {
      return false
    }
    if (secondMap.get(charS) !== charP) {
      return false
    }
  }
}
return true
}
