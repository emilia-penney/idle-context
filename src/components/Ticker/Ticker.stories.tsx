import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Ticker, CurrencyContextProvider } from '../';

interface TempStuff {
  percentage?: number;
}

const TestComp: React.FC<TempStuff> = ({percentage}) => {
  return (
    <div>{percentage}</div>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Ticker',
  component: Ticker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Ticker>;

export const Primary: React.FC = () => {
  return (
    <CurrencyContextProvider currencies={{
      main: 0,
    }}>
      <Ticker duration={1} valuePerTick={1} level={1} currency='main'>
        <TestComp />
      </Ticker>
      <Ticker duration={2} valuePerTick={1} level={1} currency='main'>
        <TestComp />
      </Ticker>
      <Ticker duration={3} valuePerTick={1} level={1} currency='main'>
        <TestComp />
      </Ticker>
      <Ticker duration={4} valuePerTick={1} level={1} currency='main'>
        <TestComp />
      </Ticker>
      <Ticker duration={5} valuePerTick={1} level={1} currency='main'>
        <TestComp />
      </Ticker>
      <Ticker duration={6} valuePerTick={1} level={1} currency='main'>
        <TestComp />
      </Ticker>
    </CurrencyContextProvider>
  );
};