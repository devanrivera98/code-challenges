import { fibonacciSequence } from './fibonacci-sequence';

describe(('chuck Array'), () => {
  test(('if this works'), () => {
    const argument1 = 5;
    const result = fibonacciSequence(argument1);

    expect(result).toEqual([0, 1, 1, 2, 3]);
  });
});
