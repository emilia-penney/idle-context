import { useContext } from 'react';
import { IdleContext } from '../../components/IdleContext/IdleContext';

export const useCurrency = (name: string, amount = 0) => {
  const { currency, createCurrency } = useContext(IdleContext);

  if (!currency[name]) {
    createCurrency(name, amount);
  }

  // TODO: Return a currency object with methods to update the currency

  return currency;
};
