const fib = (step: number): number => {
  if (step === 0) {
    return 0;
  }

  if (step === 1) {
    return 1;
  }

  return fib(step - 2) + fib(step - 1);
};

export default fib;
