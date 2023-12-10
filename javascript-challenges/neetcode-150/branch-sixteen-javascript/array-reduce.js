export default function arrayReduce(nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }
  let newCount = init;
  for (let i = 0; i < nums.length; i++) {
    newCount = fn(newCount, nums[i]);
  }
  return newCount;
}
