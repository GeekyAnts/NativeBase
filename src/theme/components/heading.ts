const baseStyle = () => {
  return {
    _light: {
      color: 'text.900',
    },
    _dark: {
      color: 'text.50',
    },
    fontWeight: 'bold',
    lineHeight: 'sm',
  };
};

const sizes = {
  '4xl': {
    fontSize: ['6xl', null, '7xl'],
    letterSpacing: 'xl',
  },
  '3xl': {
    fontSize: ['5xl', null, '6xl'],
    letterSpacing: 'xl',
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
