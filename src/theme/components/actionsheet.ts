import { mode } from '../tools';
// Actionsheet
export const Actionsheet = {
  defaultProps: {
    size: 'full',
  },
};

// ActionsheetContent
export const ActionsheetContent = {
  baseStyle: (props: any) => ({
    alignItems: 'center',
    px: 2,
    py: 2,
    borderRadius: 'none',
    roundedTop: 20,
    _dragIndicator: {
      bg: mode('gray.400', 'gray.400')(props),
      height: 1,
      width: 10,
      borderRadius: 2,
    },
  }),
};

// ActionsheetItem
export const ActionsheetItem = {
  baseStyle: (props: any) => ({
    width: '100%',
    justifyContent: 'flex-start',
    p: 4,
    _text: {
      fontSize: 16,
      fontWeight: 'normal',
      color: mode('coolGray.800', 'warmGray.50')(props),
    },
    _pressed: {
      bg: mode('coolGray.300', 'gray.600')(props),
    },
    _hover: {
      bg: mode('coolGray.200', 'gray.500')(props),
    },
  }),
  defaultProps: {
    variant: 'unstyled',
  },
};
