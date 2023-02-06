import React, { useEffect, useMemo, useState } from 'react';

import {
  calcTools,
  isOperator,
  calcNumbers,
  makeControlElements,
} from '@utils/index';
import { AreaControl, CalcPanel, CalcTools } from '@calcTypes/index';
import classes from './Calculator.module.scss';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [printRow, setPrintRow] = useState<React.ReactNode[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);
  const [result, setResult] = useState(0);
  const [currentOperator, setCurrentOperator] = useState<CalcTools | null>(
    null
  );

  const calculate = (operator: CalcTools | null, percent?: number): void => {
    if (operator === CalcTools.percent) return;

    const value = percent ?? Number(currentValue);

    if (result !== 0) {
      switch (operator) {
        case CalcTools.add:
          setResult((prev) => prev + value);
          break;
        case CalcTools.subtract:
          setResult((prev) => prev - value);
          break;
        case CalcTools.multiply:
          setResult((prev) => prev * value);
          break;
        case CalcTools.divide:
          setResult((prev) => prev / value);
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (currentOperator === CalcTools.sqrt) {
      setResult((prev) => Math.sqrt(prev));
    }
  }, [currentOperator]);

  useEffect(() => {
    setCurrentValue(`${result}`);
  }, [result]);

  const handleCalcClick = (area: AreaControl, label: string | number) => {
    const computedValue = Object.keys(CalcPanel).includes(area);
    if (computedValue) {
      if (isCalculated) {
        setCurrentValue('');
        setIsCalculated(false);
      }

      setCurrentValue((prev) => {
        if (currentValue === '0' && typeof label === 'number') {
          return `${label}`;
        }

        if (prev === '0' && label === 0) {
          return '0';
        }

        if (prev.includes('.') && area === CalcPanel.comma) {
          return prev;
        }

        if (area === CalcPanel.comma) {
          return `${prev}.`;
        }

        if (area === CalcPanel.doubleZero) {
          if (!prev.includes('.')) {
            return prev;
          }
          return `${prev}00`;
        }

        return `${prev}${label}`;
      });
    } else if (typeof label === 'string') {
      if (isOperator(area)) {
        if (area === CalcTools.equal) {
          calculate(area);
        } else {
          setCurrentOperator(area);
        }

        if (!isCalculated) {
          if (area === CalcTools.percent) {
            const percent = (result * Number(currentValue)) / 100;
            calculate(currentOperator, percent);
          } else {
            calculate(currentOperator);
          }

          if (result === 0) {
            setResult(Number(currentValue));
          }
        }
      }

      setPrintRow((prev) => [
        ...prev,
        <span
          className={classes.printItem}
          key={`${area}${label}${prev.toString()}`}
        >
          {currentValue}{' '}
          {area == CalcTools.equal ? (
            <span>=</span>
          ) : (
            <img className={classes.image} src={label} alt='#' />
          )}
        </span>,
      ]);

      setIsCalculated(true);
    }

    if (area === CalcTools.reset) {
      setCurrentValue('0');
      setPrintRow([]);
      setResult(0);
    }
  };

  const contorlsElements = useMemo(
    () =>
      [calcNumbers, calcTools].map((controls) =>
        makeControlElements(controls, handleCalcClick)
      ),
    [handleCalcClick]
  );

  const printedNum =
    currentValue.length > 14 ? currentValue.slice(0, 14) : currentValue;

  return (
    <div className={classes.container}>
      <div className={classes.calcBackground} />
      <div className={classes.calculator}>
        <div className={classes.divider} />
        <div className={classes.display}>
          <div className={classes.progressCulcContainer}>
            <div className={classes.progressCulc}>{printRow}</div>
          </div>

          <div className={classes.printedNum}>{printedNum}</div>
        </div>
        <div className={classes.controls}>{contorlsElements}</div>
      </div>
    </div>
  );
};

export default Calculator;
