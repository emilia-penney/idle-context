/**
 * Calculates the percentage of time completed towards the next tick event
 * @param nextTick The DateTime of the next tick event
 * @param duration The duration used to calculate the offset till the next tick event
 * @returns A percentage of completion till the next tick event
 */
export const getPercentage = (nextTick: Date, duration: number) => {
  if (!nextTick) {
    throw new Error('Attempted to get percentage but nextTick is not set');
  }

  const nowTime = new Date().getTime();
  const nextTickTime = nextTick.getTime();

  const diff = 1 - (((nextTickTime - nowTime) / 1000) / duration);

  const output = parseInt((diff * 100).toFixed(0));

  /**
   * This is used to compensate for any drift the JS engine has
   * as during testing it was giving negative percentages
   * due to the system processing faster or slow than expected
   */
  if (output < 0) {
    return 0;
  }

  return output;
};
