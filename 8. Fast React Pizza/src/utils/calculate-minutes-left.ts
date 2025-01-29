export function calculateMinutesLeft(date: Date | string) {
  const currentTime = new Date().getTime();
  const targetTime = new Date(date).getTime();

  return Math.round((currentTime - targetTime) / 60000);
}
