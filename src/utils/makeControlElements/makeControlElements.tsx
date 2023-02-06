import React from 'react';
import cn from 'classnames';

import { AreaControl, CalcControls, CalcTools } from '@calcTypes/index';
import classes from './makeControlElements.module.scss';

const makeControlElements = (
  controls: CalcControls[],
  onClick: (area: AreaControl, label: string | number) => void
): React.ReactNode[] =>
  controls.map(({ area, label }) => (
    <button
      className={cn(classes[area], classes.control, {
        [classes.equalBack]: area === CalcTools.equal,
      })}
      key={area}
      onClick={() => onClick(area, label)}
    >
      <div className={classes.controlBack} />
      {typeof label === 'string' ? <img src={label} alt='#' /> : label}
    </button>
  ));

export default makeControlElements;
