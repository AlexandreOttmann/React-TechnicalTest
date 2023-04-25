// return number to locals formating (10000 => 10 000 in fr)
export const NumberToLocal = (number: number) =>
  new Intl.NumberFormat().format(number);
