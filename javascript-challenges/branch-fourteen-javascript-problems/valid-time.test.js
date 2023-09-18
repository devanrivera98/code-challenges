import validTime from './valid-time';

describe('validTime', () => {
  test('if this works', () => {
    const argument1 = '13:58';
    const testVariable1 = validTime(argument1);
    expect(testVariable1).toEqual(true);
  });
});
