export default {
  variants: {
    ghost: () => {
      return {
        _dark: {
          _hover: {
            bg: 'transparent',
          },
          _pressed: {
            bg: 'coolGray.900',
          },
        },
      };
    },
  },
};
