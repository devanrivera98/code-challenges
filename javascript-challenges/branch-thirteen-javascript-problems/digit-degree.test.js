import digitDegree from './digit-degree';

describe('digitDegree', () => {
  test('if this works', () => {
    const argument1 = '91';
    const testVariable1 = digitDegree(argument1);
    expect(testVariable1).toEqual(2);
  });
});
