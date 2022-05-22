import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TickerProps, TickerOutput } from '../../types/';
import { CurrencyContext } from '../CurrencyContext';
import { getNextTick, getPercentage } from './helpers';

/**
 * A component wrapper that handles ticker logic
 * @param args.children A visual component that accepts TickerOutput props
 * @param args.duration The original length of time the ticker should run for
 * @param args.valuePerTick The amount of value / money produced per tick
 * @param args.currency The type of currency to increase based on CurrencyContext
 * @param args.speedCalculation A function that takes in a the level and outputs a new duration
 * @param args.level The level of the ticker
 * @returns A visual component wrapped with a ticker logic wrapper
 */
export const Ticker: React.FC<TickerProps> = ({ children, duration, valuePerTick, currency, speedCalculation, level }) => {
  const id = uuid();
  const [nextTick, setNextTick] = useState<Date>(getNextTick(duration));
  const [initalizing, setInitializing] = useState<boolean>(true);
  const [percentage, setPercentage] = useState<number>(0);
  const [loop, setLoop] = useState<NodeJS.Timer>();
  const [calcDuration, setCalcDuration] = useState<number>(duration);

  const { updateCurrency } = useContext(CurrencyContext);

  const onTick = () => {
    return new Promise((resolve) => {
      updateCurrency(currency, valuePerTick);
      setNextTick(getNextTick(calcDuration));
      resolve(true);
    });
  };

  useEffect(() => {
    const run = () => {
      setNextTick(getNextTick(calcDuration));
      setInitializing(false);
    };

    run();
  }, []);

  useEffect(() => {
    if (initalizing) {
      return;
    }

    const runLoop = (inputTick: Date, inputDuration: number) => {
      setPercentage(getPercentage(inputTick, inputDuration));
      const now = new Date();

      if (now > inputTick) {
        onTick().then(() => {
          const timeout = setTimeout(() => {
            if (loop) {
              clearTimeout(loop);
            }
          }, 1000 / 60);

          setLoop(timeout);
        });
      } else {
        if (loop) {
          clearTimeout(loop);
        }
        const timeout = setTimeout(() => {
          runLoop(inputTick, inputDuration);
        }, 1000 / 60);

        setLoop(timeout);
      }

    };

    runLoop(nextTick, calcDuration);

    return () => {
      clearTimeout(loop);
    };
  }, [nextTick, initalizing]);

  useEffect(() => {
    if (level === 0) {
      return;
    }
    if (!speedCalculation) {
      setCalcDuration(calcDuration * 0.9);
      return;
    }

    setCalcDuration(speedCalculation(level));
  }, [level]);

  if (initalizing) {
    return (<></>);
  }

  return (
    <>
      {React.cloneElement(children as React.ReactElement<TickerOutput>, {
        nextTick,
        percentage,
        duration,
        id,
      })}
    </>
  );
};
