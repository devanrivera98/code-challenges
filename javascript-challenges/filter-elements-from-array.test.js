import { filterElements } from './filter-elements-from-array';

describe('function to filter with parameter function', () => {
  it('will see if the function works', () => {
    const testParameter1 = [-2, -1, 0, 1, 2];
    const testParameter2 = function plusOne(n) {
      return n + 1;
    };
    const testResults = filterElements(testParameter1, testParameter2);
    // falsey values such as 0 should be filtered out
    expect(testResults).toEqual([-2, 0, 1, 2]);
  });
});
