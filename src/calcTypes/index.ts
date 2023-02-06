export type AreaControl = CalcPanel | CalcTools;

export type CalcControls = {
  area: AreaControl;
  label: number | string;
};

export enum CalcPanel {
  one = 'one',
  two = 'two',
  three = 'three',
  four = 'four',
  five = 'five',
  six = 'six',
  seven = 'seven',
  eight = 'eight',
  nine = 'nine',
  comma = 'comma',
  doubleZero = 'doubleZero',
  zero = 'zero',
}

export enum CalcTools {
  reset = 'reset',
  sqrt = 'sqrt',
  percent = 'percent',
  divide = 'divide',
  multiply = 'multiply',
  subtract = 'subtract',
  add = 'add',
  equal = 'equal',
}
