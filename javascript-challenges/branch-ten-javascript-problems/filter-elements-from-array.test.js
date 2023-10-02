import { filterElements } from './filter-elements-from-array';

describe('function to filter with parameter function', () => {
  it('will see if the function works', () => {
    const testParameter1 = [-2, -1, 0, 1, 2];
    const testParameter3 = [1, 2, 3];
    const testParameter2 = function plusOne(n) {
      return n + 1;
    };
    const testParameter4 = function firstIndex(n, i) {
      return i === 0;
    };
    const testResults = filterElements(testParameter1, testParameter2);
    const testResults2 = filterElements(testParameter3, testParameter4);
    // falsey values such as 0 should be filtered out
    expect(testResults).toEqual([-2, 0, 1, 2]);
    expect(testResults2).toEqual([1]);
  });
});
