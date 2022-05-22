import { getNextTick } from '../getNextTick';

describe('Get Next Tick', () => {
  const epoch = 1653189389;
  const date = new Date(epoch);
  const offset = 5;

  it('Give the correct offset', () => {
    expect(getNextTick(offset, date).getTime()).toBe(epoch + (offset * 1000));
  });
});