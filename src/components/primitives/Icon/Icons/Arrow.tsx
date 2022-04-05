import React from 'react';
import { createIcon } from '../createIcon';
import { G, Path } from '../nbSvg';

export const ArrowUpIcon = createIcon({
  viewBox: '0 0 20 20',
  path: (
    <G>
      <Path
        d="M18.2362 11.0666L11.6036 4.43395L10.75 3.58039V4.7875L10.75 19.5H9.25L9.25 4.7875V3.58192L8.39676 4.43363L1.76282 11.0557L0.707108 10L10 0.707107L19.2941 10.0012L18.2362 11.0666Z"
        stroke="currentColor"
      />
    </G>
  ),
});

export const ArrowDownIcon = createIcon({
  viewBox: '0 0 20 20',
  path: (
    <G>
      <Path
        d="M1.76375 8.93336L8.39645 15.5661L9.25 16.4196V15.2125L9.25 0.5H10.75L10.75 15.2125V16.4181L11.6032 15.5664L18.2372 8.94429L19.2929 10L10 19.2929L0.70586 9.99875L1.76375 8.93336Z"
        stroke="currentColor"
      />
    </G>
  ),
});

export const ArrowForwardIcon = createIcon({
  viewBox: '0 0 20 20',
  path: (
    <G>
      <Path
        d="M8.93336 1.76375L15.5661 8.39645L16.4196 9.25H15.2125H0.5V10.75H15.2125H16.4181L15.5664 11.6032L8.94429 18.2372L10 19.2929L19.2929 10L9.99875 0.70586L8.93336 1.76375Z"
        stroke="currentColor"
      />
    </G>
  ),
});

export const ArrowBackIcon = createIcon({
  viewBox: '0 0 20 20',
  path: (
    <G>
      <Path
        d="M11.0666 1.76375L4.43395 8.39645L3.58039 9.25H4.7875H19.5V10.75H4.7875H3.58192L4.43363 11.6032L11.0557 18.2372L10 19.2929L0.707107 10L10.0012 0.70586L11.0666 1.76375Z"
        stroke="currentColor"
      />
    </G>
  ),
});
