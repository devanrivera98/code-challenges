export default function depositProfit(deposit, rate, threshold) {
  let newtotal = deposit;
  let count = 0;
  while (newtotal < threshold) {
    newtotal += newtotal * (rate / 100);
    // console.log('this is the final total', newtotal);
    count++;
  }
  return count;
}
