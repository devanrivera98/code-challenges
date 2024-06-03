import ransomNote from "./ransom-note";

describe('ransomNote', () => {
  test('if this works', () => {
    const argument1 = "fihjjjjei";
    const argument2 = "hjibagacbhadfaefdjaeaebgi"
    const testVariable1 = ransomNote(argument1, argument2)
    expect(testVariable1).toEqual(false)
  })
})
