// Write a function that returns true or false depending
// on whether its input integer is a leap year or not.
// A leap year is defined as one that is divisible by 4,
//but is not otherwise divisible by 100 unless
//it is also divisible by 400.
// For example, 2001 is a typical common year
//and 1996 is a typical leap year,
//whereas 1900 is an atypical common year
//and 2000 is an atypical leap year.

import leapYear from '../../LeapYear/LeapYear';

describe('leap year', () => {
  test('year 1 is not a leap year', () => {
    expect(leapYear(1)).toBe(false);
  });

  test('year 2 is not a leap year', () => {
    expect(leapYear(2)).toBe(false);
  });

  test.each([
    [4, true],
    [8, true],
    [12, true],
  ])(
    'years divisible by 4 are leap years',
    (year: number, isLeapYear: boolean) => {
      expect(leapYear(year)).toBe(isLeapYear);
    }
  );

  test.each([
    [100, false],
    [200, false],
    [300, false],
  ])(
    'years divisible by 100 are not leap years',
    (year: number, isLeapYear: boolean) => {
      expect(leapYear(year)).toBe(isLeapYear);
    }
  );
});
