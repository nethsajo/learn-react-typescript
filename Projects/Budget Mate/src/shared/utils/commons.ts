export function formatNumber(value: number) {
  return value.toLocaleString('en', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
