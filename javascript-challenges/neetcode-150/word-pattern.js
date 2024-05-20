export default function wordPattern(pattern, s) {

let firstMap = new Map();
let secondMap = new Map();

let stringArray = s.split(' ');
console.log(stringArray)

for (let i = 0; i < pattern.length; i++) {

  let charP = pattern[i];
  let charS = stringArray[i];


  if (!(firstMap.has(charP))) {
    firstMap.set(charP, charS)
  }

  if (!(secondMap.has(charS))) {
    secondMap.set(charS, charP)
  }

  // would i need a third map for the vowel and the assigned string to the vowel

  console.log(secondMap)
}
}
