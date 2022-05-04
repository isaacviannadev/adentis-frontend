export const formatDate = (date: Date): string => {
  const day = date.getDate().toPrecision().padStart(2, '0');
  const month = (date.getMonth() + 1).toPrecision().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
