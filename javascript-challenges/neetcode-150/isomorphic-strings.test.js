import isomorphicStrings from "./isomorphic-strings";


describe('isomorphicStrings', () => {
  test('if this works', () => {
    const argument1 = "foo";
    const argument2 = "bar"
    const testVariable1 = isomorphicStrings(argument1, argument2)
    expect(testVariable1).toEqual(false)
  })
})
