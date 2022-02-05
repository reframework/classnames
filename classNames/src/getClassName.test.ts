import { getClassName } from './getClassName';

describe('The `getClassName` method', () => {
  it('returns empty string when argument is not an object', () => {
    // @ts-expect-error check other types
    expect(getClassName(undefined)).toBe('');
    // @ts-expect-error check other types
    expect(getClassName(null)).toBe('');
    // @ts-expect-error check other types
    expect(getClassName('1, 2, 3')).toBe('');
    // @ts-expect-error check other types
    expect(getClassName([1, 2, 3])).toBe('');
  });

  it('returns a string with expected classes', () => {
    expect(
      getClassName({
        button: true,
        open: true,
        primary: false,
        large: true,
        disabled: false,
      })
    ).toBe('button open large');
  });
});
