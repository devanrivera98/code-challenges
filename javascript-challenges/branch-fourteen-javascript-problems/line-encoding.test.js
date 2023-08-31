import lineEncoding from './line-encoding';

describe('lineEncoding', () => {
  test('if this works', () => {
    const argument1 = 'aabbbc';
    const testVariable1 = lineEncoding(argument1);
    expect(testVariable1).toEqual('2a3bc');
  });
});
