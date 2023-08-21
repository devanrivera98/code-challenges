import firstDigits from './first-digits';

describe('firstDigits', () => {
  test('if this works', () => {
    const argument1 = 'q2q-q';
    const testVariable1 = firstDigits(argument1);
    expect(testVariable1).toEqual('2');

  });
});
