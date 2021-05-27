import { Dimensions } from 'react-native';
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
    justifyContent: 'center',
    alignItems: 'center',
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
      pl: 6,
      pt: 6,
      shadow: 3,
      rounded: 'lg',
      maxHeight: `${Dimensions.get('window').height - 150}px`,
    };
  },
};
export const ModalCloseButton = {
  baseStyle: (props: Record<string, any>) => {
    return {
      position: 'absolute',
      right: 4,
      top: 4,
      zIndex: 1,
      size: 9,
      _icon: {
        size: 4,
        color: mode('gray.500', 'gray.100')(props),
      },
    };
  },
};
export const ModalHeader = {
  baseStyle: {
    pb: 3,
    pr: 6,
    _text: { fontSize: 'xl', fontWeight: 'bold' },
  },
};
export const ModalBody = {
  baseStyle: (props: Record<string, any>) => {
    return {
      pb: 7,
      pr: 6,
      _text: { fontSize: 'md', color: mode('gray.600', 'gray.300')(props) },
    };
  },
};
export const ModalFooter = {
  baseStyle: {
    py: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    pr: 2,
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
