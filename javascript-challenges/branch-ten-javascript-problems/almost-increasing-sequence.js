export function increasingSequence(sequence) {
  let tooMuch = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (i >= 1 && sequence[i] <= sequence[i - 1]) {
      tooMuch++;
      if (tooMuch > 1) {
        return false;
      }
    }
    if (i >= 2 && sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
      return false;
    }
  }
  return true;
}
// if I remove an index from the sequence will the sequence be strictly increasing
// how would I compare the numbers in the array once I remove the index only once
