const baseStyle = () => {
  return {
    color: 'text.900',
    _dark: {
      color: 'text.50',
    },
    fontWeight: 'bold',
    lineHeight: 'sm',
  };
};

const sizes = {
  '4xl': {
    fontSize: { base: '6xl', md: '7xl' },
    letterSpacing: 'xl',
  },
  '3xl': {
    fontSize: { base: '5xl', md: '6xl' },
    letterSpacing: 'xl',
  },
  '2xl': {
    fontSize: { base: '4xl', md: '5xl' },
  },
  'xl': {
    fontSize: { base: '3xl', md: '4xl' },
  },
  'lg': {
    fontSize: { base: '2xl', md: '3xl' },
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
