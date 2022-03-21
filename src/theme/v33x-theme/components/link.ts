const baseStyle = (props: Record<string, any>) => {
  const { isUnderlined } = props;
  return {
    _text: {
      textDecorationLine: isUnderlined ? 'underline' : 'none',
    },
    width: 'auto',
    height: 'auto',
  };
};

export default {
  baseStyle,
  defaultProps: {
    isUnderlined: true,
  },
};
