import wordPattern from "./word-pattern";

describe('wordPattern', () => {
  test('if this works', () => {
    const argument1 = "abba";
    const argument2 = "dog cat cat fish";
    const testVariable1 = wordPattern(argument1, argument2)
    expect(testVariable1).toEqual(false)
  })
})
