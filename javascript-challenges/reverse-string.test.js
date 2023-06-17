import { FirstReverse } from './reverse-string';

describe('firstReverse', () => {
  it('returns the string in reverse', () => {
    const testString = 'I Love Code';
    const resultString = FirstReverse(testString);
    expect(resultString).toEqual('edoC evoL I');
  });
});
