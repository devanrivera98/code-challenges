export default function ransomNote(ransomNote, magazine) {
  const firstMap = new Map()
  for (let i = 0; i < ransomNote.length; i++) {
    if (firstMap.has(ransomNote[i])) {
      firstMap.set(ransomNote[i], firstMap.get(ransomNote[i]) + 1)
    } else {
      firstMap.set(ransomNote[i], 1)
    }
  }
  console.log(firstMap)

  for (let j = 0; j < magazine.length; j++) {
    if (firstMap.has(magazine[j])) {
      firstMap.set(magazine[j], firstMap.get(magazine[j]) - 1)
    }
  }
  console.log(firstMap)

  let allZeroes = true;
  for (let value of firstMap.values()) {
    if (value > 0) {
      allZeroes = false;
      break;
    }
  }
  return allZeroes
}
