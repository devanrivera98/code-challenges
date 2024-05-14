import bestTime from "./best-time";

describe('bestTime', () => {
  test('if this works', () => {
    const argument1 = [7, 6, 4, 3, 1];
    const testVariable1 = bestTime(argument1)
    expect(testVariable1).toEqual(0)
  })
})
