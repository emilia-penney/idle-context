<div align='center'>
  <h1>React Idle Components</h1>
</div>

# What is React Idle Components?
RIC is a component first solution to building idle games in React and React Native. It comes out of the box with currency and ticker management, all you have to provide is the visuals!

# Getting Started

## Installing
npm: `npm i react-idle-components`
yarn:  `yarn add react-idle-components`

## Basic Usage

```tsx
import React from 'react';
import {CurrencyContextProvider, Ticker, TickerOutput} from 'react-idle-components';

const VisualPercentage: React.FC<TickerOutput> = ({ percentage }) => {
  return (
    <>{percentage}</>
  );
};

const ExampleComponent = () => {
  return (
    <CurrencyContextProvider currencies={{main: 0}}>
      <Ticker duration={3} valuePerTick={5} level={0} currency='main'>
        <VisualPercentage />
      </Ticker>
      <Ticker duration={5} valuePerTick={1} level={0} currency='main'>
        <VisualPercentage />
      </Ticker>
    </CurrencyContextProvider>
  );
}
```