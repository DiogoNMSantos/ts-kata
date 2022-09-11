const romanNumeral = (arabicNumber: number): string | undefined => {
  const arabicToRoman: Map<number, string> = new Map<number, string>([
    [1, 'I'],
    [4, 'IV'],
    [5, 'V'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [50, 'L'],
  ]);

  if (arabicNumber === 0) {
    return '';
  }

  if (arabicToRoman.has(arabicNumber)) {
    return arabicToRoman.get(arabicNumber);
  }

  for (let [arabic, roman] of new Map(Array.from(arabicToRoman).reverse())) {
    if (arabicNumber > arabic) {
      return roman + romanNumeral(arabicNumber - arabic);
    }
  }

  return '';
};

export default romanNumeral;
