import longestWord from './longest-word';

describe('longestWord', () => {
  test('if this works', () => {
    const argument1 = 'ab-CDE-fg_hi';
    const testVariable1 = longestWord(argument1);
    expect(testVariable1).toEqual('CDE');
  });
});
