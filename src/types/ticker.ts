import { FCChildren } from './';

export interface TickerProps extends FCChildren {
  duration: number;
  valuePerTick: number;
  currency: string;
  speedCalculation?: (level: number) => number;
  level: number;
}

export interface TickerOutput {
  nextTick: Date,
  percentage: number;
  duration: number;
  level: number;
  id: string;
}