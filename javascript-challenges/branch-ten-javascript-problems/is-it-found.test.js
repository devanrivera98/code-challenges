import { isItFound } from './is-it-found';

describe('isItFound', () => {
  test('if this works', () => {
    const argument1 = 'CodefightsIsAwesome';
    const argument2 = 'IsA';
    const testVariable1 = isItFound(argument1, argument2);
    expect(testVariable1).toEqual(10);
  });
});
