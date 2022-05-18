import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FCChildren } from '../../types';
import { CurrentContext } from '../CurrencyContext/CurrencyContext';
import { getNextTick, getPercentage } from './helpers';

interface TickerProps extends FCChildren {
  duration: number;
  valuePerTick: number;
  currency: string;
  speedMultiplier: number;
}

export const Ticker: React.FC<TickerProps> = ({ children, duration, valuePerTick, currency }) => {
  const id = uuid();
  const [nextTick, setNextTick] = useState<Date>();
  const [initalizing, setInitializing] = useState<boolean>(true);
  const [percentage, setPercentage] = useState<number>(0);
  const [loop, setLoop] = useState<NodeJS.Timer>();

  const { updateCurrency } = useContext(CurrentContext);

  const onTick = () => {
    return new Promise((resolve) => {
      updateCurrency(currency, valuePerTick);
      setNextTick(getNextTick(duration));
      resolve(true);
    });
  };

  useEffect(() => {
    const run = () => {
      setNextTick(getNextTick(duration));
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

    runLoop(nextTick, duration);

    return () => {
      clearTimeout(loop);
    };
  }, [nextTick, initalizing]);

  if (initalizing) {
    return;
  }

  // TODO: Update the "any" below to props the ticker provides and extended
  return (
    <>
      {React.cloneElement(children as React.ReactElement<any>, {
        nextTick,
        percentage,
        duration,
        tickerId: id,
      })}
    </>
  );
};
