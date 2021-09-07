import { Dimensions } from 'react-native';
import { mode } from '../tools';

const sizes = {
  xs: {
    contentSize: {
      width: '55%',
      maxWidth: '280',
    },
  },
  sm: {
    contentSize: {
      width: '60%',
      maxWidth: '320',
    },
  },
  md: {
    contentSize: {
      width: '75%',
      maxWidth: '380',
    },
  },
  lg: {
    contentSize: {
      width: '80%',
      maxWidth: '520',
    },
  },
  xl: {
    contentSize: {
      width: '90%',
      maxWidth: '580',
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
    size: 'md',
    closeOnOverlayClick: true,
  },
};

export const ModalContent = {
  baseStyle: (props: Record<string, any>) => {
    return {
      bg: mode('white', 'gray.700')(props),
      shadow: 1,
      rounded: 'lg',
      maxHeight: `${Dimensions.get('window').height - 150}px`,
      overflow: 'hidden',
    };
  },
};
export const ModalCloseButton = {
  baseStyle: (props: Record<string, any>) => {
    return {
      position: 'absolute',
      right: 3,
      top: 3,
      zIndex: 1,
      colorScheme: 'coolGray',
      p: 2,
      _icon: {
        size: 3,
        color: mode('gray.400', 'gray.100')(props),
      },
    };
  },
};
export const ModalHeader = {
  baseStyle: {
    p: '3',
    px: '4',
    borderBottomWidth: '1',
    borderColor: 'coolGray.100',
    _text: { fontSize: 'md', fontWeight: 'semibold', color: 'coolGray.800' },
  },
};
export const ModalBody = {
  baseStyle: (props: Record<string, any>) => {
    return {
      p: '3',
      px: '4',
      _text: {
        color: mode('coolGray.600', 'coolGray.300')(props),
      },
    };
  },
};
export const ModalFooter = {
  baseStyle: {
    p: '3',
    bg: 'coolGray.100',
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
