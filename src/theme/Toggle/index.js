import React from 'react';
import { func, string } from 'prop-types';

import { MoonIcon } from '../Icons/MoonIcon';
import { SunIcon } from '../Icons/SunIcon';
import { ToggleWrapper } from './style/ToggleWrapper';

export default function Toggle({ theme, toggleTheme }) {
  const isLight = theme === 'light';

  return (
    <ToggleWrapper lightTheme={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleWrapper>
  );
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};