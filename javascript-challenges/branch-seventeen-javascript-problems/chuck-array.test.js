import chuckArray from './chuck-array';

describe(('chuck Array'), () => {
  test(('if this works'), () => {
    const argument1 = [1, 2, 3, 4, 5, 6, 4];
    const argument2 = 4;
    const result = chuckArray(argument1, argument2);

    expect(result).toEqual([[1, 2, 3, 4], [5, 6, 4]]);
  });
});
