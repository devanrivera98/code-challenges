export default function isomorphicStrings(s, t) {
  const firstMap = new Map()

  for (let i = 0; i < s.length; i++) {
    if (!(firstMap.has(s[i]))) {
      firstMap.set(t[i], s[i])
    }
  }
console.log(firstMap)


  for (let j = 0; j < t.length; j++) {
    console.log(t[j])
    console.log(firstMap.get(t[j]))
    if (s[j] !== firstMap.get(t[j])) {
      return false
    }
  }
  return true
  console.log(firstMap)
}
