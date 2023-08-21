export default function findEmail(address) {

  const newIndex = address.indexOf('@');
  console.log(newIndex);
  const removeIndex = address.replace('@', '');
  const secondIndex = removeIndex.indexOf('@');
  console.log(secondIndex);
  if (removeIndex.indexOf('@') > -1) {
    return removeIndex.substring(secondIndex + 1);
  }
  // console.log(removeIndex, newIndex);
  return address.substring(newIndex + 1);
}
