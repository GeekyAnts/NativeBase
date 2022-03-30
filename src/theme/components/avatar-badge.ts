function baseStyle() {
  return {
    borderRadius: 'full',
    borderWidth: 2,
    bg: 'success.600',
    size: 3,
    position: 'absolute',
    right: 0,
    bottom: 0,
    _light: {
      borderColor: 'muted.50',
    },
    _dark: {
      borderColor: 'muted.900',
    },
  };
}

export default { baseStyle };
