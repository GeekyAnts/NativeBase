import Badge from './badge';

const { variants } = Badge;
const baseStyle = {
  _text: {
    fontWeight: 'medium',
    // lineHeight: 1.2,
  },
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  display: 'flex',
};
const sizes = {
  sm: {
    minH: 5,
    minW: 5,
    _text: {
      fontSize: 'xs',
    },
    p: 1,
    borderRadius: 'sm',
  },
  md: {
    minH: 6,
    minW: 6,
    _text: {
      fontSize: 'sm',
    },
    borderRadius: 'md',
    p: 2,
  },
  lg: {
    minH: 8,
    minW: 8,
    _text: {
      fontSize: 'md',
    },
    borderRadius: 'md',
    p: 3,
  },
};

const defaultProps = {
  size: 'md',
  variant: 'subtle',
  colorScheme: 'primary',
};

export default {
  variants,
  baseStyle,
  sizes,
  defaultProps,
};
