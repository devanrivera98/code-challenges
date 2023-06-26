import { increasingSequence } from './almost-increasing-sequence';

describe('increasingSequence', () => {
  it('test if the sequence increases', () => {
    const testItem1 = [10, 1, 2, 3, 4, 5];
    const testItem2 = [1, 4, 10, 4, 2];
    const testItem3 = [3, 6, 5, 8, 10, 20, 15];
    const resultString1 = increasingSequence(testItem1);
    const resultString2 = increasingSequence(testItem2);
    const resultString3 = increasingSequence(testItem3);
    expect(resultString1).toBe(true);
    expect(resultString2).toBe(false);
    expect(resultString3).toBe(false);
  });
});
