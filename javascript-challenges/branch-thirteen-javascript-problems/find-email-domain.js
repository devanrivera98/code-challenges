export default function findEmail(address) {

  const newIndex = address.indexOf('@');
  const removeIndex = address.replace('@', '');
  const secondIndex = removeIndex.indexOf('@');
  if (removeIndex.indexOf('@') > -1) {
    return removeIndex.substring(secondIndex + 1);
  }
  return address.substring(newIndex + 1);
}
