/**
 * Calculates the time for the next tick event
 * @param duration The number in seconds till the next tick event
 * @returns The DateTime of the next tick event
 */
export const getNextTick = (duration: number) => {
  const now = new Date();
  const durationInMilliseconds = duration * 1000;
  now.setMilliseconds(now.getMilliseconds() + durationInMilliseconds);
  return now;
};