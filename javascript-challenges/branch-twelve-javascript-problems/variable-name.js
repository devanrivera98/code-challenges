export function variableName(name) {
  const regex = /^[a-zA-Z_]+\w*$/;
  return regex.test(name);
}
