import { mode } from '../tools';
export const Select = {
  baseStyle: (props: Record<string, any>) => {
    return {
      customDropdownIconProps: {
        size: '6',
        p: '1',
        pl: '0',
        color: mode('textColor.500', 'textColor.400')(props),
      },
      _disabled: {
        opacity: '40',
        bg: mode('muted.100', 'muted.700')(props),
      },
      _invalid: {
        borderColor: mode('error.700', 'error.400')(props),
      },
      _focus: {
        borderColor: mode('primary.400', 'primary.500')(props),
        bg: mode('muted.100', 'muted.700')(props),
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
