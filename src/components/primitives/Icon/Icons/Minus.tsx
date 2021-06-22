import React from 'react';
import { createIcon } from '../createIcon';
import { G, Rect } from '../nbSvg';

export const MinusIcon = createIcon({
  path: (
    <G fill="currentColor">
      <Rect height="4" width="20" x="2" y="10" />
    </G>
  ),
});
