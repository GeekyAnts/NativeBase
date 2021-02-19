import { mode } from '../tools/colors';

// Select
export const styled = (props: Record<string, any>) => {
  return {
    pl: 2,
    pr: 0,
    border: 1,
    borderColor: mode('gray.600', 'gray.400')(props),
    _isInvalid: {
      borderColor: mode('danger.600', 'danger.200')(props),
    },
    _hover: {
      borderColor: 'default.500',
    },
  };
};

// Picker
export const native = (props: Record<string, any>) => {
  return {
    _android: {
      p: 2,
      color: mode('gray.800', 'gray.50')(props),
    },
    _ios: {},
    _web: {
      bg: 'transparent',
      borderRadius: 'md',
      borderColor: 'default.500',
      color: mode('gray.800', 'gray.50')(props),
      p: 3,
    },
    _hover: {
      borderColor: 'default.500',
    },
  };
};

const variants = {
  styled: styled,
  native: native,
};

export const Select = {
  variants,
  defaultProps: {
    variant: 'native',
  },
};
// SelectItem
export const SelectItem = {};

// SelectIcon
export const SelectIcon = {};
