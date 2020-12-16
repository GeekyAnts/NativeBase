import Badge from './badge';

const { variants } = Badge;
const baseStyle = {
  fontWeight: 'medium',
  lineHeight: 1.2,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  display: 'flex',
};
const sizes = {
  sm: {
    minH: 5,
    minW: 5,
    fontSize: 'xs',
    px: 1,
    borderRadius: 'sm',
  },
  md: {
    minH: 6,
    minW: 6,
    fontSize: 'sm',
    borderRadius: 'md',
    px: 2,
  },
  lg: {
    minH: 8,
    minW: 8,
    fontSize: 'md',
    borderRadius: 'md',
    px: 3,
  },
};

const defaultProps = {
  size: 'md',
  variant: 'subtle',
  colorScheme: 'gray',
};

export default {
  variants,
  baseStyle,
  sizes,
  defaultProps,
};
