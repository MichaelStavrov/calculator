import commaIcon from '@assets/images/comma-icon.svg';
import doubleZeroIcon from '@assets/images/double-zero-icon.svg';
import { AreaControl, CalcPanel } from '@calcTypes/index';

const getLabel = (area: AreaControl, index: number) => {
  switch (area) {
    case CalcPanel.comma:
      return commaIcon;

    case CalcPanel.doubleZero:
      return doubleZeroIcon;

    case CalcPanel.zero:
      return 0;

    default:
      return index + 1;
  }
};

export default getLabel;
