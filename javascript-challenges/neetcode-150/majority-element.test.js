import majorityElement from "./majority-element";

describe('majorityElement', () => {
  test('if this works', () => {
    const argument1 = [2, 2, 1, 1, 1, 2, 2];
    const testVariable1 = majorityElement(argument1)
    expect(testVariable1).toEqual(2)
  })
})
