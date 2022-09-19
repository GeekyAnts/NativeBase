const baseStyle = () => {
  return {
    py: 1,
    px: 2,
    shadow: 6,
    rounded: 'sm',
    _text: {
      fontSize: 'sm',
      color: `text.50`,
    },
    bg: `muted.800`,
    _dark: {
      bg: `muted.50`,
      _text: {
        color: `text.900`,
      },
    },
  };
};

export const Tooltip = {
  baseStyle,
};
