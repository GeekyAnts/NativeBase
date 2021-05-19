import React from 'react';
import { createIcon } from '../createIcon';
import { G, Polygon } from '../nbSvg';

export const CheckIcon = createIcon({
  viewBox: '0 0 14 14',
  path: (
    <G fill="currentColor">
      <Polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" />
    </G>
  ),
});

export const CheckCircleIcon = createIcon({
  viewBox: '0 0 24 24',
  d:
    'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
});
