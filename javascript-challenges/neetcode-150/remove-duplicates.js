export default function removeDublicates(nums) {
  const duplicates = [];
  let currentIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (!duplicates.includes(nums[i])) {
      nums[currentIndex] = nums[i]
      duplicates.push(nums[i])
      // console.log(duplicates)
      currentIndex++;
    }
  }
  return duplicates.length
}
