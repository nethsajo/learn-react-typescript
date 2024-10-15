import dayjs from 'dayjs';

export function formatDate(date: string, format: string = 'MMMM MM, YYYY') {
  return dayjs(date).format(format);
}
