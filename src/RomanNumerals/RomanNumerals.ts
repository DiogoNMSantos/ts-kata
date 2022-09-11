const romanNumeral = (arabicNumber: number): string | undefined => {
  const arabicToRoman = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
  ];

  if (arabicNumber === 0) {
    return '';
  }

  if (arabicNumber < 4) {
    return 'I' + romanNumeral(arabicNumber - 1)!;
  }

  if (arabicNumber < 9 && arabicNumber > 4) {
    return 'V' + romanNumeral(arabicNumber - 5);
  }

  return arabicToRoman[arabicNumber - 1];
};

export default romanNumeral;
