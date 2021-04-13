import { mode } from '../tools/colors';
// custom
const customSelectBaseStyle = (props: Record<string, any>) => {
  return {
    type: 'custom',
    pl: 2,
    pr: 0,
    border: 1,
    borderColor: mode('gray.600', 'gray.400')(props),
    _isDisabled: {
      opacity: 0.4,
    },
    _isInvalid: {
      borderColor: mode('danger.600', 'danger.200')(props),
    },
    _hover: {
      borderColor: 'primary.500',
    },
  };
};
export const CustomSelect = {
  baseStyle: customSelectBaseStyle,
};

// native
const nativeSelectBaseStyle = (props: Record<string, any>) => {
  return {
    type: 'native',
    androidIconColor: mode('darkText', 'lightText')(props),
    color: mode('darkText', 'lightText')(props),
    _android: {
      p: 3,
    },
    _ios: {},
    _web: {
      bg: 'transparent',
      borderRadius: 'md',
      borderColor: 'muted.500',
      p: 3,
    },
    _hover: {
      borderColor: 'primary.500',
    },
  };
};

export const NativeSelect = {
  baseStyle: nativeSelectBaseStyle,
};

// Select
export const Select = {
  defaultProps: {
    variant: 'filled',
    type: 'custom',
  },
};

// SelectIcon - only for custom variant
export const SelectItem = {
  baseStyle: {
    p: 1,
    px: 2,
    borderRadius: 0,
    minH: 0,
  },
};
