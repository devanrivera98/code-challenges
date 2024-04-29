export default function containsDuplicate(nums) {
  const array = [];
  for (let i = 0; i < nums.length; i++) {
    if (array.includes(nums[i])) {
      return true;
    } else {
      array.push(nums[i]);
    }
  }
  return false;
}
