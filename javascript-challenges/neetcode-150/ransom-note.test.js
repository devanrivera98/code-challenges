import ransomNote from "./ransom-note";

describe('ransomNote', () => {
  test('if this works', () => {
    const argument1 = 'aa';
    const argument2 = 'aab'
    const testVariable1 = ransomNote(argument1, argument2)
    expect(testVariable1).toEqual(true)
  })
})
