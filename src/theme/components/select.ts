import { mode } from '../tools';
export const Select = {
  baseStyle: (props: Record<string, any>) => {
    return {
      customDropdownIconProps: {
        size: '6',
        p: '1',
        pl: '0',
        color: 'trueGray.400',
      },
      _disabled: {
        opacity: '80',
        bg: mode('muted.100', 'muted.700')(props),
      },
      _invalid: {
        borderColor: mode('danger.600', 'danger.300')(props),
      },
      _focus: {
        borderColor: mode('primary.400', 'primary.500')(props),
      },
      _hover: {
        bg: mode('gray.100', 'gray.700')(props),
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
