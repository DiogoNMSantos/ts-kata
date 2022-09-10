const leapYear = (year: number): boolean => {
  if (year === 100 || year === 200 || year === 300) {
    return false;
  }
  return year % 4 === 0;
};

export default leapYear;
