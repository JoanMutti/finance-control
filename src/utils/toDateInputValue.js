export const toDateInputValue = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear().toString();
  const month = (dateObj.getMonth() + 1).toString();
  const day = dateObj.getDate().toString();
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
