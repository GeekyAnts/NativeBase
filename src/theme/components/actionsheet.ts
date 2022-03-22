// Actionsheet
export const Actionsheet = {
  defaultProps: {
    size: 'full',
    justifyContent: 'flex-end',
    animationPreset: 'slide',
  },
};

// ActionsheetContent
export const ActionsheetContent = {
  baseStyle: () => ({
    alignItems: 'center',
    px: 2,
    py: 2,
    borderRadius: 'none',
    roundedTop: 20,
    _dragIndicator: {
      _light: {
        bg: 'muted.500',
      },
      _dark: {
        bg: 'muted.400',
      },
      height: 1,
      width: 10,
      borderRadius: 2,
    },
    _dragIndicatorWrapper: {
      pt: 3,
      pb: 3,
      mt: -2,
      width: '100%',
      alignItems: 'center',
      collapsable: false,
    },
    _dragIndicatorWrapperOffSet: {
      py: 2,
      collapsable: false,
    },
  }),
};

// ActionsheetItem
export const ActionsheetItem = {
  baseStyle: () => ({
    width: '100%',
    justifyContent: 'flex-start',
    p: 4,
    _text: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    _light: {
      _text: {
        color: 'text.900',
      },
      _hover: {
        bg: 'muted.200',
      },
      _pressed: {
        bg: 'muted.300',
      },
    },
    _dark: {
      _text: {
        color: 'muted.50',
      },
      _hover: {
        bg: 'muted.700',
      },
      _pressed: {
        bg: 'muted.600',
      },
    },
  }),
  defaultProps: {
    variant: 'unstyled',
  },
};
