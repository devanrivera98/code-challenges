export default function mergeArray(arg1, m, arg2, n) {
  const newArray = [];
  console.log(arg1.slice(0, m));
  newArray.push(...arg1.slice(0, m))
  newArray.push(...arg2.slice(0, n))
  newArray.sort((a, b) => a - b);
  arg1.length = 0
  arg1.push(...newArray)
  return arg1
}
