import arrayReduce from './array-reduce';

describe('arrayReduce', () => {
  test('if this works', () => {
    const arg1 = [1, 2, 3, 4];
    const arg2 = (accum, curr) => {
      return accum + curr * curr;
    };
    const arg3 = 100;
    const testOutcome = arrayReduce(arg1, arg2, arg3);
    expect(testOutcome).toEqual(130);
  });
});
