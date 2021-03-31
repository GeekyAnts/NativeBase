import { mode } from '../tools';

const sizes = {
  sm: {
    contentSize: {
      width: '60%',
    },
  },
  md: {
    contentSize: {
      width: '75%',
    },
  },
  lg: {
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
    size: 'lg',
    closeOnOverlayClick: true,
  },
};

export const ModalContent = {
  baseStyle: (props: Record<string, any>) => {
    return {
      bg: mode('gray.50', 'gray.700')(props),
      px: 8,
      py: 6,
      shadow: 8,
      rounded: 'md',
    };
  },
};
export const ModalCloseButton = {
  baseStyle: {
    position: 'absolute',
    right: 8,
    top: 5,
    zIndex: 1,
    _icon: {
      size: 'sm',
      color: 'black',
    },
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
    pb: 3,
  },
};
export const ModalFooter = {
  baseStyle: {
    pt: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
