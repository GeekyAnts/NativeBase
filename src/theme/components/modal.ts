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
    modalOverlayStyle: {
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0.5,
      right: 0,
      bottom: 0,
    },
    modalCloseButtonStyle: {
      position: 'absolute',
      right: 8,
      top: 8,
      zIndex: 1,
    },
    modalCloseButtonProps: {
      size: 8,
    },
    modalProps: {
      width: '100%',
      height: '100%',
    },
    modalBodyProps: {
      mb: 3,
      fontSize: '2xl',
    },
    modalContentProps: {
      bg: mode('gray.100', 'gray.700')(props),
      p: 8,
      rounded: 6,
    },
    // NOTE: Now using custom overlay.
    // modalOverlayProps: {
    //   bg: 'black',
    // },
    modalHeaderProps: {
      pb: 3,
    },
    modalFooterProps: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
    },
  };
};

export default { baseStyle, sizes };
