import LongestPrefix from './longest-common-prefix';

describe('compose', () => {
  test('if this works', () => {
    const argument1 = ['flower', 'flow', 'flight'];

    const testOutcome = LongestPrefix(argument1);

    expect(testOutcome).toEqual('fl');
  });
});
