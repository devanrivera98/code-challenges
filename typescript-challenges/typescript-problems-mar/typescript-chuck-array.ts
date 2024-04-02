export default function chuckArray(arr: number[], size:number ) {
const newArr: number[][] = []
if (arr.length === 0) {
  return newArr
}

for (let i: number = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, size + i))
}
return newArr
}
