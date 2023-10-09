export default function reduceTransform(nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }
  let total = init;
  for (let i = 0; i < nums.length; i++) {
    total = fn(total, nums[i]);
  }
  return total;
}
