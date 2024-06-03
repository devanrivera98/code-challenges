import isomorphicStrings from "./isomorphic-strings";


describe('isomorphicStrings', () => {
  test('if this works', () => {
    const argument1 = "badc";
    const argument2 = "baba";
    const testVariable1 = isomorphicStrings(argument1, argument2)
    expect(testVariable1).toEqual(false)
  })
})
