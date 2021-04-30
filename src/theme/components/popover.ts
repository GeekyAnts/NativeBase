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
      borderColor: mode('muted.200', 'muted.500')(props),
      borderTopWidth: 1,
    },
    popoverContentProps: {
      backgroundColor: mode('gray.50', 'gray.600')(props),
      borderColor: mode('gray.200', 'gray.600')(props),
      borderWidth: 1,
      rounded: 'md',
    },
    popoverHeaderProps: {
      p: 3,
      _text: {
        fontWeight: 600,
      },
    },
    popoverArrowProps: {
      borderColor: mode('gray.200', 'gray.600')(props),
    },
    popoverFooterProps: {
      p: 3,
      borderTopWidth: 1,
      borderColor: mode('muted.200', 'muted.500')(props),
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  };
};

export default { baseStyle, sizes };
