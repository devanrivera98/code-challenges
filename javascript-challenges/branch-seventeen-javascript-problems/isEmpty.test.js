import isEmpty from './isEmpty';

describe(('chuck Array'), () => {
  test(('if this works'), () => {
    const argument1 = {};
    const result = isEmpty(argument1);

    expect(result).toEqual(false);
  });
});
