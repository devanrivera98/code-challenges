import removeElements from "./remove-element";

describe('removeElements', () => {
  test('if this works', () => {
    const argument1 = [0, 1, 2, 2, 3, 0, 4, 2];
    const argument2 = 2;
    const results = removeElements(argument1, argument2);
  expect(results).toEqual(5)
  })
})
