export function powerRecursion(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return powerRecursion(base, exponent - 1) * (base);
}
