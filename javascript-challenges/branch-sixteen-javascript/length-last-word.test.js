import lastWord from './length-last-word';

describe('removeduplicate', () => {
  test('if this works', () => {
    const argument1 = '  fly me   to   the moon  ';
    const testOutcome = lastWord(argument1);
    expect(testOutcome).toEqual(4);
  });
});
