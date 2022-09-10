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
  test.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [15, 610],
  ])(
    'Position %s in the fibonacci sequence is %s',
    (step: number, fibonacciNumber: number) => {
      expect(fib(step)).toBe(fibonacciNumber);
    }
  );
});
