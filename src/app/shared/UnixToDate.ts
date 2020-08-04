export const UnixToDate = (unixTimestamp: number, sep: string): string => {
  const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(unixTimestamp * 1000);
  // Year
  const year = date.getFullYear();
  // Month
  const month = monthsArr[date.getMonth()];
  //  day
  const day = date.getDate();
  return year === -1 ? `${day}${sep}${month}${sep}` : `${day}${sep}${month}${sep}${year}`;
};

