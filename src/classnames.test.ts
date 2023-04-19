import classnames from './classnames';

describe('The `classnames` method', () => {
  it('returns empty string when argument is not an object', () => {
    // @ts-expect-error check other types
    expect(classnames(undefined)).toBe('');
    // @ts-expect-error check other types
    expect(classnames(null)).toBe('');
    // @ts-expect-error check other types
    expect(classnames('1, 2, 3')).toBe('');
    // @ts-expect-error check other types
    expect(classnames([1, 2, 3])).toBe('');
  });

  it('returns a string with expected classes', () => {
    expect(
      classnames({
        button: true,
        open: true,
        primary: false,
        large: true,
        disabled: false,
      })
    ).toBe('button open large');
  });
});
