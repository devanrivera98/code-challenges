import { sumAll } from './sum-all-nums';

describe('sumAll', () => {
  it('retuns the sum of from one number til it reaches the next', () => {
    const testArray = [5, 10];
    const resultFunction = sumAll(testArray);
    expect(resultFunction).toEqual(45);
  });
});
