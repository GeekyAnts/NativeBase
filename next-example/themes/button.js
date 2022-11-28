export default {
  sizes: {
    lg: {
      px: 6,
      py: 3,
      _text: {
        fontSize: 'sm',
      },
    },
    sm: {
      px: 4,
      py: 2,
      _text: {
        fontSize: 'sm',
      },
    },
    xs: {
      px: 3,
      py: 2,
      _text: {
        fontSize: '2xs',
      },
    },
  },
  defaultProps: {
    size: 'lg',
  },
  variants: {
    solid: () => {
      return {
        rounded: 'sm',
        _text: {
          color: 'coolGray.50',
        },
        _light: {
          bg: 'primary.900',
          _hover: { bg: 'primary.800' },
          _pressed: { bg: 'primary.700' },
        },
        _dark: {
          bg: 'primary.700',
          _hover: { bg: 'primary.800' },
          _pressed: { bg: 'primary.900' },
        },
      };
    },
    subtle: () => {
      return {
        rounded: 'sm',
        _text: {
          color: 'primary.900',
        },
        _light: {
          bg: 'secondary.100',
          _hover: { bg: 'secondary.200' },
          _pressed: { bg: 'secondary.300' },
        },
        _dark: {
          bg: 'secondary.100',
          _hover: { bg: 'secondary.100' },
          _pressed: { bg: 'secondary.100' },
        },
      };
    },
    outline: () => {
      return {
        rounded: 'sm',
        _light: {
          borderColor: 'primary.700',
          _text: {
            color: 'primary.900',
          },
          _hover: {
            bg: 'primary.300',
            borderColor: 'primary.300',
            _text: {
              color: 'primary.900',
            },
          },
          _pressed: {
            bg: 'primary.400',
            borderColor: 'primary.400',
            _text: {
              color: 'primary.900',
            },
          },
        },
        _dark: {
          borderColor: 'secondary.400',
          _text: {
            color: 'secondary.400',
          },
          _hover: {
            bg: 'secondary.500',
            borderColor: 'secondary.500',
            _text: {
              color: 'coolGray.50',
            },
          },
          _pressed: {
            bg: 'secondary.600',
            borderColor: 'secondary.600',
            _text: {
              color: 'coolGray.50',
            },
          },
        },
      };
    },
  },
};
