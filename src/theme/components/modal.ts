import { mode } from '../tools';

const sizes = {
  xs: {
    contentSize: {
      width: '40%',
    },
  },
  sm: {
    contentSize: {
      width: '48%',
    },
  },
  md: {
    contentSize: {
      width: '60%',
    },
  },
  lg: {
    contentSize: {
      width: '75%',
    },
  },
  xl: {
    contentSize: {
      width: '90%',
    },
  },
  full: {
    contentSize: {
      width: '100%',
    },
  },
};

export const Modal = {
  baseStyle: {
    width: '100%',
    height: '100%',
    // border: 1,
  },
  sizes,
  defaultProps: {
    size: 'md',
    closeOnOverlayClick: true,
  },
};

export const ModalContent = {
  baseStyle: (props: Record<string, any>) => {
    return {
      bg: mode('gray.100', 'gray.700')(props),
      p: 8,
      rounded: 'lg',
    };
  },
};
export const ModalCloseButton = {
  baseStyle: {
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 1,
  },
  defaultProps: {
    size: 8,
  },
};
export const ModalHeader = {
  baseStyle: {
    pb: 3,
  },
};
export const ModalBody = {
  baseStyle: {
    mb: 3,
    fontSize: '2xl',
  },
};
export const ModalFooter = {
  baseStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
};
export const ModalOverlay = {
  baseStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    right: 0,
    bottom: 0,
  },
};
