export function addBorder(picture) {
  const width = picture[0].length + 2;

  return [
    '*'.repeat(width),
    ...picture.map(line => '*' + line + '*'),
    '*'.repeat(width)
  ];
}
