import { spacing } from './space';

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
  'container.sm': '640px',
  'container.md': '768px',
  'container.lg': '1024px',
  'container.xl': '1280px',
};

export type Sizes = typeof sizes;

export default sizes;
