export default function bestTime(prices) {

  if (prices.length < 2) {
    return 0; //
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      let potentialProfit = price - minPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
    }
  }

  return maxProfit > 0 ? minPrice : maxProfit;
}
