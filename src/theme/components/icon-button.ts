const baseStyle = {
  borderRadius: 'md',
};

const sizes = {
  lg: {
    minW: 10,
    minH: 10,
    px: 'auto',
    fontSize: '3xl',
  },
  md: {
    minW: 8,
    minH: 8,
    px: 'auto',
    fontSize: '2xl',
  },
  sm: {
    minW: 6,
    minH: 6,
    px: 'auto',
    fontSize: 'xl',
  },
};

const defaultProps = {
  size: 'md',
  variant: 'ghost',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
