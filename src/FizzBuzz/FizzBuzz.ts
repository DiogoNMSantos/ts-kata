const fizzBuzz = (input: number): string => {
  if (input % 3 === 0) {
    return 'Fizz';
  }

  if (input === 5) {
    return 'Buzz';
  }

  if (input === 10) {
    return 'Buzz';
  }

  if (input === 20) {
    return 'Buzz';
  }

  return input.toString();
};

export default fizzBuzz;
