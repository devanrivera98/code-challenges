import needInHay from './needle-in-hay';

describe(('needInHay'), () => {
  test(('if this works'), () => {
    const argument1 = 'hegnekeepsygs';
    const argument2 = 'keep';
    const result = needInHay(argument1, argument2);

    expect(result).toEqual(5);
  });
});
