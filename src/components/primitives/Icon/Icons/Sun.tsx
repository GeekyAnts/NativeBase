import React from 'react';
import { createIcon } from '../createIcon';
import { G, Path, Circle } from '../nbSvg';

export const SunIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <G
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      fill="none"
      stroke="currentColor"
    >
      <Circle cx="12" cy="12" r="5" />
      <Path d="M12 1v2" />
      <Path d="M12 21v2" />
      <Path d="M4.22 4.22l1.42 1.42" />
      <Path d="M18.36 18.36l1.42 1.42" />
      <Path d="M1 12h2" />
      <Path d="M21 12h2" />
      <Path d="M4.22 19.78l1.42-1.42" />
      <Path d="M18.36 5.64l1.42-1.42" />
    </G>
  ),
});
