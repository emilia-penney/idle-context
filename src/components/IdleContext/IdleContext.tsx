import React, { createContext } from 'react';

interface IdleContextProps {
  currency: {
    [key: string]: number;
  };
  createCurrency: (currency: string) => void;
  updateCurrency: (currency: string, amount: number) => void;
}

export const IdleContext = createContext<IdleContextProps>({
  currency: {},
  createCurrency: () => {},
  updateCurrency: () => {},
});

interface IdleContextProviderProps {
  children: React.ReactNode;
}

export const IdleProvider: React.FC<IdleContextProviderProps> = ({ children }) => {
  const [currency, setCurrency] = React.useState<IdleContextProps['currency']>({});

  const createCurrency = (name: string) => {
    setCurrency((currency) => ({ ...currency, [name]: 0 }));
  };

  const updateCurrency = (name: string, amount: number) => {
    setCurrency((currency) => ({ ...currency, [name]: amount }));
  };

  return (
    <IdleContext.Provider
      value={{
        currency,
        createCurrency,
        updateCurrency,
      }}
    >
      {children}
    </IdleContext.Provider>
  );
};
