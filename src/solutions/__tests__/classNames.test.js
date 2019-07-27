import classNames from '../../challengeComponents/utilities/classNames';

describe.skip('classNames utility', () => {
  it('creates the right classname', () => {
    expect(
      classNames({
        BaseClassName: true,
        'BaseClassName--modifier': false,
        'BaseClassName--otherModifier': true,
      })
    ).toBe('BaseClassName BaseClassName--otherModifier');
  });
});
