const leapYear = (year: number): boolean => {
  if (year === 400 || year === 800) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }

  return year % 4 === 0;
};

export default leapYear;
