import resetIcon from '@assets/images/reset-icon.svg';
import sqrtIcon from '@assets/images/sqrt-icon.svg';
import percentIcon from '@assets/images/percent-icon.svg';
import divideIcon from '@assets/images/divide-icon.svg';
import multiplyIcon from '@assets/images/multiply-icon.svg';
import subtractIcon from '@assets/images/subtract-icon.svg';
import addIcon from '@assets/images/add-icon.svg';
import equalIcon from '@assets/images/equal-icon.svg';
import { CalcControls, CalcTools } from '@calcTypes/index';

import isOperator from './isOperator';
import getLabel from './getLabel';
import calcNumbers from './calcNumbers';
import makeControlElements from './makeControlElements';

const calcTools: CalcControls[] = [
  { area: CalcTools.reset, label: resetIcon },
  { area: CalcTools.sqrt, label: sqrtIcon },
  { area: CalcTools.percent, label: percentIcon },
  { area: CalcTools.divide, label: divideIcon },
  { area: CalcTools.multiply, label: multiplyIcon },
  { area: CalcTools.subtract, label: subtractIcon },
  { area: CalcTools.add, label: addIcon },
  { area: CalcTools.equal, label: equalIcon },
];

export { calcTools, isOperator, getLabel, calcNumbers, makeControlElements };
