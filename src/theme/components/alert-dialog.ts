import { Dimensions } from 'react-native';

const sizes = {
  xs: {
    contentSize: {
      width: '60%',
      maxWidth: '280',
    },
  },
  sm: {
    contentSize: {
      width: '65%',
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

export const AlertDialog = {
  baseStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    _web: { pointerEvents: 'box-none' },
    _backdropFade: { exitDuration: 150, entryDuration: 200 },
    _fade: { exitDuration: 100, entryDuration: 200 },
    _slide: { duration: 200, overlay: false },
  },
  sizes,
  defaultProps: {
    size: 'md',
    closeOnOverlayClick: true,
  },
};

export const AlertDialogContent = {
  baseStyle: () => {
    return {
      shadow: 1,
      rounded: 'lg',
      maxHeight: `${Dimensions.get('window').height - 150}px`,
      overflow: 'hidden',
      _light: {
        bg: 'muted.50',
        _text: {
          color: 'text.900',
        },
      },
      _dark: {
        bg: 'muted.800',
        color: 'text.50',
      },
    };
  },
};
export const AlertDialogCloseButton = {
  baseStyle: () => {
    return {
      position: 'absolute',
      right: '3',
      top: '3',
      zIndex: '1',
      p: '2',
      bg: 'transparent',
      borderRadius: 'sm',
      _web: {
        outlineWidth: 0,
        cursor: 'pointer',
      },
      _icon: {
        size: '4',
      },
      _light: {
        _icon: {
          color: 'muted.500',
        },
        _hover: {
          bg: 'muted.200',
        },
        _pressed: {
          bg: 'muted.300',
        },
      },
      _dark: {
        _icon: {
          color: 'muted.400',
        },
        _hover: {
          bg: 'muted.700',
        },
        _pressed: {
          bg: 'muted.600',
        },
      },
    };
  },
};
export const AlertDialogHeader = {
  baseStyle: () => {
    return {
      p: '4',
      borderBottomWidth: '1',
      _text: {
        fontSize: 'md',
        fontWeight: 'semibold',
        lineHeight: 'sm',
      },
      _light: {
        bg: 'muted.50',
        borderColor: 'muted.300',
        _text: {
          color: 'text.900',
        },
      },
      _dark: {
        bg: 'muted.800',
        borderColor: 'muted.700',
        _text: {
          color: 'text.50',
        },
      },
    };
  },
};
export const AlertDialogBody = {
  baseStyle: () => {
    return {
      p: '4',
      _light: {
        bg: 'muted.50',
        _text: {
          color: 'text.900',
        },
      },
      _dark: {
        bg: 'muted.800',
        _text: {
          color: 'text.50',
        },
      },
    };
  },
};
export const AlertDialogFooter = {
  baseStyle: () => {
    return {
      p: '4',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      borderTopWidth: '1',
      _light: {
        bg: 'muted.50',
        borderColor: 'muted.300',
      },
      _dark: {
        bg: 'muted.800',
        borderColor: 'muted.700',
      },
    };
  },
};
export const AlertDialogOverlay = {
  baseStyle: {
    position: 'absolute',
    left: '0',
    top: '0',
    opacity: '50',
    right: '0',
    bottom: '0',
  },
};
