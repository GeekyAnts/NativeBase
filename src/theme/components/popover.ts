import { mode } from '../tools';

export const PopoverCloseButton = {
  baseStyle: (props: any) => ({
    position: 'absolute',
    right: 3,
    top: 3,
    zIndex: 1,
    colorScheme: 'coolGray',
    p: 2,
    _icon: {
      size: 3,
      color: mode('coolGray.600', 'coolGray.100')(props),
    },
  }),
};

export const PopoverBody = {
  baseStyle: (props: any) => ({
    pt: '2',
    p: '3',
    _text: {
      color: mode('coolGray.600', 'coolGray.300')(props),
    },
  }),
};

export const PopoverContent = {
  baseStyle: (props: any) => ({
    backgroundColor: mode('coolGray.50', 'coolGray.600')(props),
    borderColor: mode('coolGray.200', 'coolGray.600')(props),
    borderWidth: 1,
    rounded: 'md',
    overflow: 'hidden',
  }),
};

export const PopoverHeader = {
  baseStyle: {
    py: '4',
    px: '3',
    borderBottomWidth: '1',
    borderColor: 'coolGray.200',
    _text: { fontSize: 'md', fontWeight: 'semibold', color: 'coolGray.800' },
  },
};

export const PopoverArrow = {
  baseStyle: (props: any) => ({
    borderColor: mode('coolGray.200', 'coolGray.600')(props),
  }),
};

export const PopoverFooter = {
  baseStyle: {
    p: '3',
    bg: 'coolGray.100',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
};
