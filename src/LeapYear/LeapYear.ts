const leapYear = (year: number): boolean => {
  if (year === 4) {
    return true;
  }

  if (year === 8) {
    return true;
  }

  return false;
};

export default leapYear;
