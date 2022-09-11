// Implement a Roman numeral converter.
// The code must be able to take numbers up to 3999
// and convert to their roman equivalent.
// const romanNumeral = romanNumerals(int number).

import romanNumeral from '../../RomanNumerals/RomanNumerals';

describe('Roman numerals', () => {
  test('roman numeral for 1 is "I"', () => {
    expect(romanNumeral(1)).toBe('I');
  });
});
