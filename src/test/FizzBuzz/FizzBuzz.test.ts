// Write a function that takes numbers from 1 to 100 and outputs them as a string,
// but for multiples of three it returns "Fizz" instead of the number,
// and for multiples of five it returns "Buzz."
// For numbers that are multiples of both three and five, it returns "FizzBuzz."

import fizzBuzz from '../../FizzBuzz/FizzBuzz';

describe('FizzBuzz', () => {
  test('Return string representation of number 1', () => {
    expect(fizzBuzz(1)).toBe('1');
  });
});
