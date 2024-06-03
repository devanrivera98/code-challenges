import mergeArray from "./merge-sorted-array";

describe('mergeArray', () => {
  test('if this works', () => {
    const argument1 = [1,2,3,0,0,0];
    const m = 3
    const argument2 = [2,5,6];
    const n = 3
    const testVariable1 = mergeArray(argument1, m, argument2, n)
    expect(testVariable1).toEqual([1,2,2,3,5,6])
  })
})
