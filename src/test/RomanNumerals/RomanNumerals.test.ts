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
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [15, 'XV'],
    [29, 'XXIX'],
    [39, 'XXXIX'],
    [40, 'XL'],
    [41, 'XLI'],
    [49, 'XLIX'],
    [50, 'L'],
    [54, 'LIV'],
  ])(
    'roman numeral for %s is %s',
    (arabicNumber: number, expectedRomanNumeral: string) => {
      expect(romanNumeral(arabicNumber)).toBe(expectedRomanNumeral);
    }
  );
});
