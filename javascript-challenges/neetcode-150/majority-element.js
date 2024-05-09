export default function majorityElement(nums) {
  let filteredArray = [... new Set(nums)]
  console.log('filtered Nums', filteredArray)

  let majority;
  let highestCount = 0;
  for (let i = 0; i < filteredArray.length; i++) {
    let amount = nums.filter((number) => number === filteredArray[i])
    console.log(amount)
    if (amount.length > highestCount) {
      highestCount = amount.length;
      majority = filteredArray[i]
    }
  }
  return majority;
}
