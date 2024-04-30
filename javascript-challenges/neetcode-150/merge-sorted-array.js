export default function mergeArray(arg1, m, arg2, n) {
  // const newArray = [];
  // console.log(arg1.slice(0, m));
  // newArray.push(...arg1.slice(0, m))
  // newArray.push(...arg2.slice(0, n))
  // newArray.sort((a, b) => a - b);
  // arg1.length = 0
  // arg1.push(...newArray)
  // return arg1
  
  for (let i = m, j = 0; j < n; i++, j++) {
    arg1[i] = arg2[j];
    console.log(arg1)
  }
  arg1.sort((a,b) => a -b)
  return arg1
}
