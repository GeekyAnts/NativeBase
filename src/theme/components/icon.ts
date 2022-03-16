const baseStyle = () => {
  return {
    _light: {
      color: 'muted.500',
    },
    _dark: {
      color: 'muted.400',
    },
  };
};

const sizes = {
  '2xs': 2,
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

const defaultProps = { size: 'xs' };
export default { baseStyle, sizes, defaultProps };
