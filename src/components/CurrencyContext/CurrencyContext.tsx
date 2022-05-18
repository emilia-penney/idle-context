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
   */
  const addCurrency: CurrentContextI['addCurrency'] = (name, amount) => {
    if (currencies[name]) {
      throw new Error(`Attempted to register currency ${name} but a currency with that name already exists`);
    }

    const newCurrencies = { ...currencies, name: amount };
    setCurrencies(newCurrencies);
  };

  /**
   * Modifies the value of an existing currency
   * @param name The name of the currency to be updated
   * @param amount A positive or negative number to modify the currency by
   */
  const updateCurrency: CurrentContextI['updateCurrency'] = (name, amount) => {
    if (currencies?.[name] === undefined) {
      throw new Error(`Attempted to update ${name} currency but currency does not exist`);
    }

    if (amount === 0) {
      return;
    }

    const newCurrencies = { ...currencies };
    newCurrencies[name] = newCurrencies[name] + amount;
    setCurrencies(newCurrencies);
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
