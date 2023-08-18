import findEmail from './find-email-domain';

describe('differentSymbolsNaive', () => {
  test('if this works', () => {
    const argument1 = 'example-indeed@strange-example.com';
    const testVariable1 = findEmail(argument1);
    expect(testVariable1).toEqual('strange-example.com');
  });
});
