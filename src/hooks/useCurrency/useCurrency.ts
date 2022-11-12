import { useContext } from 'react';
import { IdleContext } from '../../components/IdleContext/IdleContext';

export const useCurrency = (name: string) => {
  const { currency, createCurrency, updateCurrency } = useContext(IdleContext);

  const currencyExists = Object.keys(currency).includes(name);

  if (!currencyExists) {
    createCurrency(name);
  }

  const set = (amount: number) => {
    updateCurrency(name, amount);
  };

  return [currency[name], set];
};
