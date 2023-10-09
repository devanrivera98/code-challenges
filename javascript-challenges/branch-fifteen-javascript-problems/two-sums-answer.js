export default function twoSum(nums, target) {
  const map1 = new Map();
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (map1.has(difference)) {
      // console.log(map1.get(difference));
      // console.log([nums.indexOf(difference), nums.indexOf(nums[i])]);
      return [map1.get(target - nums[i]), i];
    } else {
      map1.set(nums[i], i);
    }
  }
}
