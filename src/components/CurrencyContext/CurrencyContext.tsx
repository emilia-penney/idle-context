import React, { createContext, useState } from 'react';
import { CurrencyContextI, CurrencyContextProps } from '../../types';

export const CurrencyContext = createContext<CurrencyContextI>({
  currencies: {},
  updateCurrency: () => true,
});

export const CurrencyContextProvider: React.FC<CurrencyContextProps> = ({ children, currencies: propsCurrencies }) => {
  const [currencies, setCurrencies] = useState(propsCurrencies);

  /**
   * Modifies the value of an existing currency
   * @param name The name of the currency to be updated
   * @param amount A positive or negative number to modify the currency by
   */
  const updateCurrency: CurrencyContextI['updateCurrency'] = (name, amount) => {
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
    <CurrencyContext.Provider value={{
      currencies,
      updateCurrency,
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};
