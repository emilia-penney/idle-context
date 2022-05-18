import { FCChildren } from './react';

export interface CurrencyContextI {
  currencies: { [key: string]: number; }
  updateCurrency: (name: string, amount: number) => void;
}

export interface CurrencyContextProps extends FCChildren {
  currencies: { [key: string]: number; }
}