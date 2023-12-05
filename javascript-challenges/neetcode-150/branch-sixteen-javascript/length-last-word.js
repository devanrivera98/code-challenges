export default function lastWord(s) {
  // learned you can use trim instead of filter
  // const newArr = s.trim().split(/\s+/)

  const newArr = s.split(/\s+/).filter(word => word !== '');
  console.log(newArr);
  return newArr[newArr.length - 1].length;

}
