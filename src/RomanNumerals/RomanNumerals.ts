const romanNumeral = (arabicNumber: number): string | undefined => {
  const arabicToRoman: { [id: number]: string } = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
  };

  if (arabicNumber === 0) {
    return '';
  }

  if (arabicToRoman[arabicNumber] != undefined) {
    return arabicToRoman[arabicNumber];
  }

  if (arabicNumber > 40) {
    return 'XL' + romanNumeral(arabicNumber - 40);
  }

  if (arabicNumber > 10) {
    return 'X' + romanNumeral(arabicNumber - 10);
  }

  if (arabicNumber > 5) {
    return 'V' + romanNumeral(arabicNumber - 5);
  }

  if (arabicNumber > 1) {
    return 'I' + romanNumeral(arabicNumber - 1)!;
  }

  return '';
};

export default romanNumeral;
