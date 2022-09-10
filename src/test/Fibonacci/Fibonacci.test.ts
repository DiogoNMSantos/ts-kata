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
  test('Position 0 in the fibonacci sequence is 0', () => {
    expect(fib(0)).toBe(0);
  });

  test('Position 1 in the fibonacci sequence is 1', () => {
    expect(fib(1)).toBe(1);
  });

  test('Position 2 in the fibonacci sequence is 1', () => {
    expect(fib(2)).toBe(1);
  });
});
