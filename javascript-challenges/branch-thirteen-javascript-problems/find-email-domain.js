export default function findEmail(address) {
  const newIndex = address.indexOf('@');
  return address.substring(newIndex + 1);
}
