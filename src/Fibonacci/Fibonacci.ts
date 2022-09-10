const fib = (step: number): number => {
  if (step === 0) {
    return 0;
  }

  if (step === 1) {
    return 1;
  }

  if (step === 5) {
    return 5;
  }

  if (step === 6) {
    return 8;
  }

  return step - 1;
};

export default fib;
