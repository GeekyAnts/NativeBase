// Image
const sizes = {
  '2xs': { size: 4 },
  'xs': { size: 6 },
  'sm': { size: 8 },
  'md': { size: 12 },
  'lg': { size: 16 },
  'xl': { size: 24 },
  '2xl': { size: 32 },
  'full': { size: '100%' },
};

export const Image = {
  baseStyle: {
    maxWidth: '100%',
  },
  sizes,
  defaultProps: {
    size: 'full',
  },
};
