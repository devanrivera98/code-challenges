export default function depositProfit(deposit, rate, threshold) {
  let newtotal = deposit;
  let count = 0;
  while (newtotal < threshold) {
    newtotal *= rate;
    count++;
  }
  return count;
}
