import { createContext } from 'react';
import { CurrencyContextI } from '../../types';

export const CurrencyContext = createContext<CurrencyContextI>({
  currencies: {},
  updateCurrency: () => true,
});