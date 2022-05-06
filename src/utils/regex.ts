export const formatDate = (date: Date): string => {
  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  const day = date.getDate().toPrecision().padStart(2, '0');
  const month = (date.getMonth() + 1).toPrecision().padStart(2, '0');
  const year = date.getFullYear();

  console.log(`${day}/${month}/${year}`);

  return `${day}/${month}/${year}`;
};
