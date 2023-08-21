import longestDigitPrefix from './longest-digits-prefix';

describe('longestDigitPrefix', () => {
  test('if this works', () => {
    const argument1 = '123aal';
    const testVariable1 = longestDigitPrefix(argument1);
    expect(testVariable1).toEqual('123');
  });
});
