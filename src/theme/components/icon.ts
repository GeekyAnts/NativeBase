import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('muted.800', 'muted.100')(props),
  };
};

const sizes = {
  '2xs': 2,
  'xs': 3,
  'sm': 4,
  'md': 5,
  'lg': 6,
  'xl': 7,
  '2xl': 8,
  '3xl': 9,
  '4xl': 10,
  '5xl': 12,
  '6xl': 16,
};

const defaultProps = { size: 'md' };
export default { baseStyle, sizes, defaultProps };
