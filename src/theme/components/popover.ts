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
    popoverCloseButtonStyle: {
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1,
    },
    popoverCloseButtonProps: {
      size: 'md',
      p: 0,
    },
    popoverProps: {
      // backgroundColor: 'gray.100',
      backgroundColor: mode('gray.100', 'gray.600')(props),
      // borderColor: 'gray.300',
      borderColor: mode('gray.300', 'gray.700')(props),
      borderWidth: 1,
    },
    popoverBodyProps: {
      mb: 3,
      pt: 3,
      px: 3,
      borderTopWidth: 1,
    },
    popoverContentProps: {
      height: 'auto',
      size: 'md',
    },
    popoverHeaderProps: {
      pt: 2,
      pb: 3,
      px: 3,
    },
    popoverFooterProps: {
      px: 3,
      pb: 3,
      pt: 3,
      borderTopWidth: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  };
};

export default { baseStyle, sizes };
