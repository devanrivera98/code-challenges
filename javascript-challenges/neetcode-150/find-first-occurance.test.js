import firstOccurance from "./find-first-occurance";

describe('firstOccurance', () => {
  test('if this works', () => {
    const argument1 = "lllleetcode";
    const argument2 = "llleet";
    const testVariable1 = firstOccurance(argument1, argument2)
    expect(testVariable1).toEqual(1)
  })
})
