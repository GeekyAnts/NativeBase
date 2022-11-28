export default {
  defaultProps: {
    _dark: {
      bg: 'coolGray.800',
      borderColor: 'coolGray.500',
      _checked: {
        bg: 'primary.900',
        borderColor: 'primary.900',
        _icon: { color: 'white' },
      },
      rounded: 'sm',
    },
    _light: {
      _checked: {
        bg: 'primary.700',
        borderColor: 'primary.700',
        _icon: { color: 'white' },
      },
    },
  },
};
