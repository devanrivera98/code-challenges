import { makeArrayConsecutive } from './make-array-consecutive';

describe('makeArrayConsecutive', () => {
  it('returns the array in lowest to greatest order', () => {
    const testArray = [6, 2, 3, 8];
    const resultNumber = makeArrayConsecutive(testArray);
    expect(resultNumber).toEqual(3);
  });
});
