const romanNumeral = (arabicNumber: number): string | undefined => {
  const arabicToRoman = ['I', 'II', 'III', 'IV'];

  return arabicToRoman[arabicNumber - 1];
};

export default romanNumeral;
