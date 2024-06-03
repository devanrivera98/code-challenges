export default function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
      // digits[i - 1] += 1;
      console.log(digits[i]);
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
}
