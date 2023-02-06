import Calculator from '@components/Calculator/Calculator';
import React, { FC } from 'react';

import classes from './App.module.scss';
import '@globalStyles/index.scss';

const App: FC = () => {
  return (
    <main className={classes.app}>
      <Calculator />
    </main>
  );
};

export default App;
