import { alphabeticShift } from './alphabetic-shift';

describe('alphabeticShift', () => {
  test('if this works', () => {
    const argument1 = 'crazy';
    const testVariable1 = alphabeticShift(argument1);
    expect(testVariable1).toEqual('dsbaz');

  });
});
