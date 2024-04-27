export function runtime(hours: number) {
  const hour = Math.floor(hours / 60);
  const minutes = hours % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hour}:${formattedMinutes}m`;
}
