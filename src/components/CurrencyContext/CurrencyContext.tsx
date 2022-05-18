import React, { createContext, useState } from 'react';
import { FCChildren, CurrentContextI } from '../../types';

export const CurrentContext = createContext<CurrentContextI>({
  currencies: {},
  addCurrency: () => true,
  updateCurrency: () => true,
});

export const CurrencyContextProvider: React.FC<FCChildren> = ({ children }) => {
  const [currencies, setCurrencies] = useState({});

  /**
   * Creates a new currency in the currency context and returns a boolean of it was successful
   * @param name The name of the currency to be created
   * @param amount The amount the currency should start with
   * @returns A boolean for if the currency was successfully created
   */
  const addCurrency: CurrentContextI['addCurrency'] = (name, amount) => {
    if (currencies[name]) {
      throw new Error(`Attempted to register currency ${name} but a currency with that name already exists`);
    }

    const newCurrencies = { ...currencies, name: amount };
    setCurrencies(newCurrencies);
    return true;
  };

  const updateCurrency: CurrentContextI['updateCurrency'] = (name, amount) => {
    if (amount === 0) {
      return true;
    }

    if (currencies?.[name] === undefined) {
      throw new Error(`Attempted to update ${name} currency but currency does not exist`);
    }

    const newCurrencies = { ...currencies };
    newCurrencies[name] = newCurrencies[name] + amount;
    setCurrencies(newCurrencies);
    return true;
  };

  return (
    <CurrentContext.Provider value={{
      currencies,
      addCurrency,
      updateCurrency,
    }}>
      {children}
    </CurrentContext.Provider>
  );
};
