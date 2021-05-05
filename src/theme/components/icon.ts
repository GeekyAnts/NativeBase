import { mode } from './../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('muted.800', 'muted.100')(props),
  };
};

const sizes = {
  'xxs': 2,
  'xs': 4,
  'sm': 6,
  'md': 8,
  'lg': 10,
  'xl': 12,
  '2xl': 16,
  '3xl': 20,
  '4xl': 24,
  '5xl': 32,
  '6xl': 64,
};

const defaultProps = { size: 'md', color: 'primary' };
export default { baseStyle, sizes, defaultProps };
