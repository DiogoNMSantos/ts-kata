// Fibonacci number (Fibonacci sequence), named after mathematician
// Fibonacci, is a sequence of numbers that looks like this:
// 0, 1, 1, 2, 3, 5, 8, 13,...
// You get first two starting numbers, 0 and 1,
// and the next number in the sequence is always the sum of the previous
// two numbers. You should write a function fib,
// that takes one parameter steps, and returns a number
// from the Fibonacci sequence,
// For example fib(0) returns 0, fib(4) returns 3, fib(15) returns 610.

import fib from '../../Fibonacci/Fibonacci';

describe('Fibonacci', () => {
  test('number for fibonacci sequence index 0 is 0', () => {
    expect(fib(0)).toBe(0);
  });
});
