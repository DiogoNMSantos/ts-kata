// Implement a Roman numeral converter.
// The code must be able to take numbers up to 3999
// and convert to their roman equivalent.
// const romanNumeral = romanNumerals(int number).

import romanNumeral from '../../RomanNumerals/RomanNumerals';

describe('Roman numerals', () => {
  test.each([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
  ])(
    'roman numeral for %s is %s',
    (arabicNumber: number, expectedRomanNumeral: string) => {
      expect(romanNumeral(arabicNumber)).toBe(expectedRomanNumeral);
    }
  );
});
