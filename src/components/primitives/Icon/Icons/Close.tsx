import React from 'react';
import { createIcon } from '../createIcon';
import { Path } from '../nbSvg';

export const CloseIcon = createIcon({
  viewBox: '0 0 16 16',
  d:
    'M8 6.66667L3.33333 2L2 3.33333L6.66667 8L2 12.6667L3.33333 14L8 9.33333L12.6667 14L14 12.6667L9.33333 8L14 3.33333L12.6667 2L8 6.66667Z',
});

export const SmallCloseIcon = createIcon({
  viewBox: '0 0 16 16',
  path: (
    <Path
      d="M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z"
      fillRule="evenodd"
      fill="currentColor"
    />
  ),
});
