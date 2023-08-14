import extractEachKth from './extract-each-kth';

describe('extractEachKth', () => {
  test('if this works', () => {
    const argument1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const argument2 = 3;
    const testVariable1 = extractEachKth(argument1, argument2);
    expect(testVariable1).toEqual([1, 2, 4, 5, 7, 8, 10]);

  });
});
