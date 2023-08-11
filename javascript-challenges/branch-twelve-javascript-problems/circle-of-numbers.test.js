import circleOfNumbers from './circle-of-numbers';

describe('circleOfNumbers', () => {
  test('if this works', () => {
    const argument1 = 12;
    const argument2 = 10;
    const argument3 = 10;
    const argument4 = 2;
    const testVariable1 = circleOfNumbers(argument1, argument2);
    const testVariable2 = circleOfNumbers(argument3, argument4);
    expect(testVariable1).toEqual(4);
    expect(testVariable2).toEqual(7);

  });
});
