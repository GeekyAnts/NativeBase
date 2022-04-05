const baseStyle = () => {
  return {
    // roundedLeft: '4',
    p: '2',
    borderWidth: '1',
    borderRightWidth: '0',
    borderLeftRadius: 'sm',
    _text: {
      fontWeight: 400,
    },
    alignItems: 'center',
    justifyContent: 'center',
    _light: {
      bg: 'muted.50',
      borderColor: 'muted.300',
      _text: {
        color: 'text.900',
      },
    },
    _dark: {
      bg: 'muted.800',
      borderColor: 'muted.700',
      _text: {
        color: 'text.50',
      },
    },
  };
};

export default { baseStyle };
