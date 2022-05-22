import { getPercentage } from '../getPercentage';
import { getNextTick } from '../getNextTick';

describe('Get Next Tick', () => {
  const epoch = 1653189389;
  const date = new Date(epoch);
  const offset = 5;

  const now = new Date(epoch + ((offset / 2) * 1000));

  it('Give the correct offset', () => {
    expect(getPercentage(getNextTick(offset, date), offset, now)).toBe(50);
  });
});