import { mode } from '../tools';

const sizes = {
  xs: {
    _width: '40%',
  },
  sm: {
    _width: '48%',
  },
  md: {
    _width: '60%',
  },
  lg: {
    _width: '75%',
  },
  xl: {
    _width: '90%',
  },
  full: {
    _width: '100%',
  },
};

const baseStyle = (props: Record<string, any>) => {
  return {
    popoverCloseButtonProps: {
      size: 'xs',
      p: 2,
      mt: 'auto',
    },
    popoverBodyProps: {
      p: 3,
      borderColor: mode('gray.300', 'gray.700')(props),
      borderTopWidth: 1,
    },
    popoverContentProps: {
      backgroundColor: mode('gray.50', 'gray.600')(props),
      // borderColor: 'gray.300',
      borderColor: mode('gray.300', 'gray.700')(props),
      borderWidth: 1,
      shadow: 1,
      rounded: 'md',
    },
    popoverHeaderProps: {
      p: 3,
    },
    popoverFooterProps: {
      p: 3,
      borderTopWidth: 1,
      borderColor: mode('gray.300', 'gray.700')(props),
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  };
};

export default { baseStyle, sizes };
