import React from 'react';
import { createIcon } from '../createIcon';
import { G, Path, Circle } from '../nbSvg';

export const QuestionIcon = createIcon({
  viewBox: '0 0 24 24',
  d:
    'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.917,1,1,0,1,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.255a1,1,0,1,1-2,0,4,4,0,1,1,5.6,3.666Z',
});

export const QuestionOutlineIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <G stroke="currentColor" strokeWidth="1.5">
      <Path
        strokeLinecap="round"
        fill="none"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      />
      <Path
        fill="none"
        strokeLinecap="round"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      />
      <Circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </G>
  ),
});
