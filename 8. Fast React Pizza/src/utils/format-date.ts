import dayjs from 'dayjs';

export function formatDate(date: Date | string, format: string = 'MMMM DD, YYYY') {
  return dayjs(date).format(format);
}
