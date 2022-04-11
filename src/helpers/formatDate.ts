export const formatDate_dddDMMM = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-us', {weekday: 'short'}) + ', ' + date.toLocaleDateString('en-us', {day: 'numeric'}) + ' ' + date.toLocaleDateString('en-us', {month: 'short'});
};
