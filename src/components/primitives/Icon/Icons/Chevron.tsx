import React from 'react';
import { createIcon } from '../createIcon';
import { G, Path } from '../nbSvg';

export const ChevronDownIcon = createIcon({
  viewBox: '0 0 24 24',
  path: [
    <G transform="translate(24) rotate(90)">
      <Path d="M0,0H24V24H0Z" fill="none" />
      <Path d="M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z" />
    </G>,
  ],
});

export const ChevronLeftIcon = createIcon({
  viewBox: '0 0 24 24',
  d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z',
});

export const ChevronRightIcon = createIcon({
  viewBox: '0 0 24 24',
  d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
});

export const ChevronUpIcon = createIcon({
  viewBox: '0 0 24 24',
  d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z',
});
