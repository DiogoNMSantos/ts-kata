// Write a function that takes numbers from 1 to 100 and outputs them as a string,
// but for multiples of three it returns "Fizz" instead of the number,
// and for multiples of five it returns "Buzz."
// For numbers that are multiples of both three and five, it returns "FizzBuzz."

import fizzBuzz from '../../FizzBuzz/FizzBuzz';

describe('FizzBuzz', () => {
  test.each([
    [1, '1'],
    [2, '2'],
    [4, '4'],
    [7, '7'],
  ])(
    'Fizzbuzz of %s should be "%s"',
    (input: number, expectedValue: string) => {
      expect(fizzBuzz(input)).toBe(expectedValue);
    }
  );

  test.each([
    [3, 'Fizz'],
    [6, 'Fizz'],
    [9, 'Fizz'],
  ])(
    'Fizzbuzz of %s should be "%s"',
    (input: number, expectedValue: string) => {
      expect(fizzBuzz(input)).toBe(expectedValue);
    }
  );

  test('FizzBuzz of 5 should be "Buzz"', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
});
