const romanNumeral = (arabicNumber: number): string | undefined => {
  const arabicToRoman = ['I', 'II', 'III', 'IV', 'V'];

  return arabicToRoman[arabicNumber - 1];
};

export default romanNumeral;
