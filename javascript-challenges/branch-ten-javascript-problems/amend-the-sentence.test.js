import { amendSentence } from './amend-the-sentence';

describe('amendSentence', () => {
  test('if this works', () => {
    const argument1 = 'CodesignalIsAwesome';
    const testVariable1 = amendSentence(argument1);
    expect(testVariable1).toEqual('codesignal is awesome');
  });
});
