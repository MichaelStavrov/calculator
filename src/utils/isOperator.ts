import { AreaControl, CalcTools } from '@calcTypes/index';

const isOperator = (val: AreaControl): val is CalcTools => val in CalcTools;

export default isOperator;
