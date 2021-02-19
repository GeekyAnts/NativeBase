import { mode } from '../tools/colors';

// Select
export const Select = {
  baseStyle: {
    pl: 2,
    pr: 0,
    _hover: {
      bg: 'teal.400',
    },
  },
};

// Picker
export const Picker = {
  baseStyle: (props: Record<string, any>) => {
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
      _isInvalid: {
        borderColor: mode('danger.600', 'danger.200')(props),
      },
    };
  },
};

// SelectItem
export const SelectItem = {};

// SelectIcon
export const SelectIcon = {};
