import { FCChildren } from './';

export interface TickerProps extends FCChildren {
  duration: number;
  valuePerTick: number;
  currency: string;
  speedMultiplier: number;
}

export interface TickerOutput {
  nextTick: Date,
  percentage: number;
  duration: number;
  id: string;
}