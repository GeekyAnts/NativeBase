import React from 'react';
import { G, Path, Circle } from '../nbSvg';

export const questionOutlineIconPath = (
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
);
