export const PopoverCloseButton = {
  baseStyle: () => ({
    position: 'absolute',
    right: 3,
    top: 3,
    zIndex: 1,
    _icon: {
      size: 4,
    },
    _light: {
      _icon: {
        color: 'muted.500',
        _hover: {
          bg: 'red.500',
        },
      },
    },
    _dark: {
      _icon: {
        color: 'muted.400',
      },
    },
  }),
};

export const PopoverBody = {
  baseStyle: () => ({
    p: '3',
    shadow: '6',
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
  }),
};

export const PopoverContent = {
  baseStyle: () => ({
    shadow: '6',
    _light: {
      borderColor: 'muted.300',
      _text: {
        color: 'text.900',
      },
    },
    _dark: {
      borderColor: 'muted.700',
      _text: {
        color: 'text.50',
      },
    },
    rounded: 'md',
    overflow: 'hidden',
  }),
};

export const PopoverHeader = {
  baseStyle: () => ({
    shadow: '6',
    _web: {
      accessibilityRole: 'header',
    },
    p: '4',
    borderBottomWidth: '1',
    _text: {
      fontSize: 'md',
      fontWeight: '700',
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
  }),
};

export const PopoverArrow = {
  baseStyle: () => ({
    _light: {
      bg: 'muted.50',
      borderColor: 'muted.300',
    },
    _dark: {
      bg: 'muted.800',
      borderColor: 'muted.700',
    },
  }),
};

export const PopoverFooter = {
  baseStyle: () => {
    return {
      p: '4',
      shadow: '6',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      borderTopWidth: 1,
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
