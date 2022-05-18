import React, { createContext, useState } from 'react';
import { FCChildren } from '../../types';
import { CurrentContextI } from './types';

export const CurrentContext = createContext<CurrentContextI>({
  currencies: {},
  addCurrency: () => true,
});

export const CurrencyContextProvider: React.FC<FCChildren> = ({ children }) => {
  const [currencies, setCurrencies] = useState({});

  /**
   * Creates a new currency in the currency context and returns a boolean of it was successful
   * @param name The name of the currency to be created
   * @param amount The amount the currency should start with
   * @returns A boolean for if the currency was successfully created
   */
  const addCurrency = (name: string, amount: number) => {
    if (currencies[name]) {
      // eslint-disable-next-line no-console
      console.error(`Attempted to register currency ${name} but a currency with that name already exists`);
      return false;
    }

    const newCurrencies = { ...currencies, name: amount };
    setCurrencies(newCurrencies);
    return true;
  };

  return (
    <CurrentContext.Provider value={{
      currencies,
      addCurrency,
    }}>
      {children}
    </CurrentContext.Provider>
  );
};
