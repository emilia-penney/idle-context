export const getNextTick = (baseDuration: number) => {
    const now = new Date();
    const seconds = now.getSeconds() + 1;
    const flooredSeconds = Math.ceil(seconds / baseDuration) * baseDuration;
    now.setSeconds(flooredSeconds);
    return now;
};