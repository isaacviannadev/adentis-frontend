export const formatDate = (date: Date): string => {
  date.setHours(date.getHours() + 3);
  const day = date.getDate().toPrecision().padStart(2, '0');
  const month = (date.getMonth() + 1).toPrecision().padStart(2, '0');
  const year = date.getFullYear();

  console.log(day, month, year, date);
  return `${day}/${month}/${year}`;
};
