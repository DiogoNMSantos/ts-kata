const romanNumeral = (arabicNumber: number): string | undefined => {
  const arabicToRoman: { [id: number]: string } = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
  };

  if (arabicNumber === 0) {
    return '';
  }

  if (arabicToRoman[arabicNumber] != undefined) {
    return arabicToRoman[arabicNumber];
  }

  if (arabicNumber < 4) {
    return 'I' + romanNumeral(arabicNumber - 1)!;
  }

  if (arabicNumber < 9 && arabicNumber > 4) {
    return 'V' + romanNumeral(arabicNumber - 5);
  }

  return '';
};

export default romanNumeral;
