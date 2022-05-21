import React, { useEffect, useState } from 'react';
import { CurrencyChange, CurrencyContextI, CurrencyContextProps } from '../../types';
import { CurrencyContext } from './CurrencyContext';

export const CurrencyContextProvider: React.FC<CurrencyContextProps> = ({ children, currencies: propsCurrencies }) => {
  const [currencies, setCurrencies] = useState(propsCurrencies);
  const [pendingChanges, setPendingChanges] = useState<CurrencyChange[]>([]);

  useEffect(() => {
    if (!pendingChanges.length) {
      return;
    }

    const operation = pendingChanges.shift();

    if (operation) {
      const newCurrencies = { ...currencies };
      newCurrencies[operation.name] = operation.amount + newCurrencies[operation.name];
      setCurrencies(newCurrencies);
    }

    }, [pendingChanges.length]);

  /**
   * Modifies the value of an existing currency
   * @param name The name of the currency to be updated
   * @param amount A positive or negative number to modify the currency by
   */
  const updateCurrency: CurrencyContextI['updateCurrency'] = async (name, amount) => {
    if (currencies?.[name] === undefined) {
      throw new Error(`Attempted to update ${name} currency but currency does not exist`);
    }

    if (amount === 0) {
      return;
    }

    const newPendingChanges = [...pendingChanges, { name, amount }];

    setPendingChanges(newPendingChanges);
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
