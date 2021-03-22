import { mode } from '../tools/colors';

// styled
const styled = (props: Record<string, any>) => {
  return {
    variant: 'styled',
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

// native
const native = (props: Record<string, any>) => {
  return {
    variant: 'native',
    androidIconColor: mode('darkText', 'lightText')(props),
    color: mode('darkText', 'lightText')(props),
    _android: {
      p: 2,
    },
    _ios: {},
    _web: {
      bg: 'transparent',
      borderRadius: 'md',
      borderColor: 'primary.500',
      p: 3,
    },
    _hover: {
      borderColor: 'primary.500',
    },
  };
};

const variants = {
  styled: styled,
  native: native,
};

// Select
export const Select = {
  variants,
  defaultProps: {
    variant: 'native',
  },
};

// SelectIcon - only for styled variant
export const SelectItem = {
  baseStyle: {
    p: 1,
    px: 2,
    borderRadius: 0,
    minH: 0,
  },
};
