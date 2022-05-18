export const createloop = async (checksPerSecond: number, nextTick: Date, onTick: any) => {
  if (!nextTick) {
    return;
  }

  const now = new Date();

  if (now > this.nextTick) {
    onTick().then(() => {
      setTimeout(() => {
        this.runLoop();
      }, 100);
    });
  } else {
    setTimeout(() => {}, 100);
  }
};