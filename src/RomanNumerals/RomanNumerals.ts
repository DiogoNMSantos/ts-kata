const romanNumeral = (arabicNumber: number): string | undefined => {
  const arabicToRoman: Map<number, string> = new Map<number, string>([
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
    [90, 'XC'],
    [100, 'C'],
    [400, 'CD'],
    [500, 'D'],
    [900, 'CM'],
    [1000, 'M'],
  ]);

  if (arabicNumber === 0) {
    return '';
  }

  for (const [arabic, roman] of new Map(Array.from(arabicToRoman).reverse())) {
    if (arabicNumber >= arabic) {
      return roman + romanNumeral(arabicNumber - arabic);
    }
  }

  return '';
};

export default romanNumeral;
