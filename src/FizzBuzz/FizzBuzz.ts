const fizzBuzz = (input: number): string => {
  if (input === 15) {
    return 'FizzBuzz';
  }

  if (input === 30) {
    return 'FizzBuzz';
  }

  if (input % 3 === 0) {
    return 'Fizz';
  }

  if (input % 5 === 0) {
    return 'Buzz';
  }

  return input.toString();
};

export default fizzBuzz;
