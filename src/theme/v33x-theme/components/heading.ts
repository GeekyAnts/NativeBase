import { mode } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  return {
    color: mode('muted.700', 'white')(props),
    fontWeight: 'bold',
    lineHeight: 'sm',
  };
};

const sizes = {
  '4xl': {
    fontSize: ['6xl', null, '7xl'],
  },
  '3xl': {
    fontSize: ['5xl', null, '6xl'],
  },
  '2xl': {
    fontSize: ['4xl', null, '5xl'],
  },
  'xl': {
    fontSize: ['3xl', null, '4xl'],
  },
  'lg': {
    fontSize: ['2xl', null, '3xl'],
  },
  'md': { fontSize: 'xl' },
  'sm': { fontSize: 'md' },
  'xs': { fontSize: 'sm' },
};

const defaultProps = {
  size: 'lg',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
