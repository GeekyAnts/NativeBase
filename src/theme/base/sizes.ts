import { spacing } from './space';

const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

const sizes = {
  ...spacing,
  ...{
    '3xs': '224px',
    '2xs': '256px',
    'xs': '320px',
    'sm': '384px',
    'md': '448px',
    'lg': '512px',
    'xl': '576px',
    '2xl': '672px',
  },
  container,
};

export type Sizes = typeof sizes;

export default sizes;
