import React, { createContext } from 'react';

interface IdleContextProps {
  currency: {
    [key: string]: number;
  };
  createCurrency: (currency: string, amount: number) => void;
}

export const IdleContext = createContext<IdleContextProps>({
  currency: {},
  createCurrency: () => {},
});

interface IdleContextProviderProps {
  children: React.ReactNode;
}

export const IdleProvider: React.FC<IdleContextProviderProps> = ({ children }) => {
  const [currency, setCurrency] = React.useState({});

  const createCurrency = (name: string, amount: number) => {
    setCurrency((currency) => ({ ...currency, [name]: amount }));
  };

  return (
    <IdleContext.Provider
      value={{
        currency,
        createCurrency,
      }}
    >
      {children}
    </IdleContext.Provider>
  );
};
