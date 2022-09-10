const fib = (step: number): number => {
  if (step === 0) {
    return 0;
  }

  if (step === 1) {
    return 1;
  }

  return step - 1;
};

export default fib;
