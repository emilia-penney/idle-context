import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Ticker, CurrencyContextProvider } from '../';
import { TickerOutput } from '../../types';

const TestComp: React.FC<TickerOutput> = ({percentage}) => {
  return (
    <div>{percentage}</div>
  );
};

export default {
  title: 'Example/Ticker',
  component: Ticker,
} as ComponentMeta<typeof Ticker>;

export const Primary: React.FC = () => {
  return (
    <CurrencyContextProvider currencies={{
      main: 0,
    }}>
      <Ticker duration={0.5} valuePerTick={1} level={0} currency='main'>
        <TestComp />
      </Ticker>
      <Ticker duration={2} valuePerTick={1} level={0} currency='main'>
        <TestComp />
      </Ticker>
      <Ticker duration={3} valuePerTick={1} level={0} currency='main'>
        <TestComp />
      </Ticker>
      <Ticker duration={4} valuePerTick={1} level={0} currency='main'>
        <TestComp />
      </Ticker>
      <Ticker duration={5} valuePerTick={1} level={0} currency='main'>
        <TestComp />
      </Ticker>
      <Ticker duration={6} valuePerTick={1} level={0} currency='main'>
        <TestComp />
      </Ticker>
    </CurrencyContextProvider>
  );
};