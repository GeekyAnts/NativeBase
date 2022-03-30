import React from 'react';
import { createIcon } from '../createIcon';
import { Path } from '../nbSvg';

export const CloseIcon = createIcon({
  viewBox: '0 0 20 20',
  d:
    'M10 7.77778L2.22222 0L0 2.22222L7.77778 10L0 17.7778L2.22222 20L10 12.2222L17.7778 20L20 17.7778L12.2222 10L20 2.22222L17.7778 0L10 7.77778Z',
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
