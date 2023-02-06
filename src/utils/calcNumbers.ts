import { CalcControls, CalcPanel } from '@calcTypes/index';

import getLabel from './getLabel';

const calcNumbers: CalcControls[] = Object.values(CalcPanel).map(
  (area, index) => ({
    area,
    label: getLabel(area, index),
  })
);

export default calcNumbers;
