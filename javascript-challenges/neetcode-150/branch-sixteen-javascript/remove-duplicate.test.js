import removeDuplicate from './remove-duplicates';

describe('removeduplicate', () => {
  test('if this works', () => {
    const argument1 = [1, 1, 2];
    const testOutcome = removeDuplicate(argument1);
    expect(testOutcome).toEqual([1, 2]);
  });
});
