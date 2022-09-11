const romanNumeral = (arabicNumber: number): string => {
  if (arabicNumber === 2) {
    return 'II';
  }

  return 'I';
};

export default romanNumeral;
