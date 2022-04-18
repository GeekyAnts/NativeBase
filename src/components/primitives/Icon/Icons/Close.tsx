import React from 'react';
import { createIcon } from '../createIcon';
import { Path } from '../nbSvg';

export const CloseIcon = createIcon({
  viewBox: '0 0 24 24',
  d:
    'M12 9.77778L4.22222 2L2 4.22222L9.77778 12L2 19.7778L4.22222 22L12 14.2222L19.7778 22L22 19.7778L14.2222 12L22 4.22222L19.7778 2L12 9.77778Z',
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
