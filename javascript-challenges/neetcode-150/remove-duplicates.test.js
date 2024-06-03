import removeDublicates from "./remove-duplicates";

describe('removeElements', () => {
  test('if this works', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const testVariable1 = removeDublicates(nums)
    expect(testVariable1).toEqual(5)
  })
})
