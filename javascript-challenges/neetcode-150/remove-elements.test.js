import removeElement from "./remove-element";

describe('removeElements', () => {
  test('if this works', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2;
    const testVariable1 = removeElement(nums, val)
    expect(testVariable1).toEqual(5)
  })
})
