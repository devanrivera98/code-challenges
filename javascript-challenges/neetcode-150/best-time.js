export default function bestTime(prices) {

  let currentPrice = prices[0];
  let profit = 0;

  for (let price of prices) {
    if (price < currentPrice) {
      currentPrice = price;
    } else {
      let reducedPrice = price - currentPrice
      profit = Math.max(profit, reducedPrice)
    }
  }

  if (profit < 0) {
    return currentPrice
  } else {
    return profit
  }

  // second attempt

  // let left = 0;
  // let right = 1;
  // let biggestProfit = 0;

  // while (right < prices.length) {
  //   if (prices[left] > prices[right]) {
  //     left = right
  //   } else {
  //     biggestProfit = Math.max(biggestProfit, prices[right] - prices[left])
  //   }
  //   right++
  // }
  // return biggestProfit;
}
