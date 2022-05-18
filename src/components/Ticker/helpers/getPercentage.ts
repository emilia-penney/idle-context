export const getPercentage = (nextTick: Date, duration: number) => {
  if (!nextTick) {
    throw new Error('Attempted to get percentage but nextTick is not set');
  }

  const nowTime = new Date().getTime();
  const nextTickTime = nextTick.getTime();

  const diff = 1 - (((nextTickTime - nowTime) / 1000) / duration);

  const output = parseInt((diff * 100).toFixed(0));

  if (output < 0) {
    return 0;
  }

  return parseInt((diff * 100).toFixed(0));
};
