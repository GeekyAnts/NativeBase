export default {
  defaultProps: {
    size: 'md',
  },

  variants: {
    outline: () => {
      return {
        _text: {
          fontWeight: 'normal',
        },

        rounded: 'xs',
        py: '2.5',
        px:'3',
        _dark: {
          borderColor: 'coolGray.700',
          color: 'coolGray.50',
          bg: 'coolGray.800',
          _hover: {
            bg: 'coolGray.800',
          },
          _focus: {
            bg: 'coolGray.800',
          },
        },
        _light: {
          borderColor: 'coolGray.300',
          color: 'coolGray.800',
          bg: 'transparent',
          _hover: {
            bg: 'white',
          },
          _focus: {
            bg: 'white',
          },
        },
      };
    },
  },
};
