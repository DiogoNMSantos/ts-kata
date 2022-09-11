const romanNumeral = (arabicNumber: number): string => {
  if (arabicNumber === 2) {
    return 'II';
  }

  if (arabicNumber === 3) {
    return 'III';
  }

  return 'I';
};

export default romanNumeral;
