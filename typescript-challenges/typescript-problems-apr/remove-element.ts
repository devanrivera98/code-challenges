export default function removeElements(nums: number[], val:number): number {
  console.log(nums.filter(num => num != val))
  return nums.filter(num => num != val).length
}
