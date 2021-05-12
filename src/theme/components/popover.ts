import { mode } from '../tools';

export const PopoverCloseButton = {
  baseStyle: (props: any) => ({
    size: 'xs',
    p: 2,
    mt: 'auto',
    _icon: {
      size: 3,
      color: mode('gray.800', 'gray.100')(props),
    },
  }),
};

export const PopoverBody = {
  baseStyle: (props: any) => ({
    p: 3,
    borderColor: mode('muted.200', 'muted.500')(props),
    borderTopWidth: 1,
  }),
};

export const PopoverContent = {
  baseStyle: (props: any) => ({
    backgroundColor: mode('gray.50', 'gray.600')(props),
    borderColor: mode('gray.200', 'gray.600')(props),
    borderWidth: 1,
    rounded: 'md',
  }),
};

export const PopoverHeader = {
  baseStyle: {
    p: 3,
    _text: {
      fontWeight: 600,
    },
  },
};

export const PopoverArrow = {
  baseStyle: (props: any) => ({
    borderColor: mode('gray.200', 'gray.600')(props),
  }),
};

export const PopoverFooter = {
  baseStyle: (props: any) => ({
    p: 3,
    borderTopWidth: 1,
    borderColor: mode('muted.200', 'muted.500')(props),
    flexDirection: 'row',
    flexWrap: 'wrap',
  }),
};
