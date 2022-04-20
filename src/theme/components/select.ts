export const Select = {
  baseStyle: () => {
    return {
      _light: {
        customDropdownIconProps: { color: 'muted.500', mr: '3' },
        _hover: {
          borderColor: 'primary.600',
        },
        _focus: {
          borderColor: 'primary.600',
          // bg: transparentize('primary.600', 0.1)(theme),
        },
        _disabled: {
          bg: 'muted.100',
          placeholderTextColor: 'muted.700',
        },
        _invalid: {
          borderColor: 'error.600',
        },
      },

      _dark: {
        customDropdownIconProps: { color: 'muted.400', mr: '3' },
        _hover: {
          borderColor: 'primary.500',
        },
        _focus: {
          borderColor: 'primary.500',
          // bg: transparentize('primary.500', 0.1)(theme),
        },
        _disabled: {
          bg: 'muted.800',
          placeholderTextColor: 'text.50',
        },
        _invalid: {
          borderColor: 'error.500',
        },
      },

      customDropdownIconProps: {
        size: '6',
        p: '1',
      },
      _webSelect: {
        style: {
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0,
          zIndex: 1,
        },
      },
      _web: {
        pointerEvents: 'none',
      },
      _disabled: {
        opacity: '80',
      },
      _actionSheetBody: {
        w: '100%',
      },
      _actionSheetContent: {},
    };
  },
  defaultProps: {
    optimized: true,
  },
};

// SelectIcon - only for custom variant
export const SelectItem = {
  baseStyle: {
    p: '1',
    px: '2',
    borderRadius: '0',
    minH: '0',
  },
};
