import containsDuplicate from './contains-duplicate';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const testOutcome = containsDuplicate(argument1);
    expect(testOutcome).toEqual(true);
  });
});
