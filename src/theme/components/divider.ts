function baseStyle(props: Record<string, any>) {
  const { orientation, thickness } = props;
  const orientationProps =
    orientation === 'vertical'
      ? {
          width: `${thickness}px`, // handle for web : To be discussed
          height: '100%',
        }
      : {
          width: '100%',
          height: `${thickness}px`,
        };

  return {
    _light: {
      bg: 'muted.300',
    },
    _dark: {
      bg: 'muted.600',
    },
    ...orientationProps,
  };
}

export default {
  baseStyle,
  defaultProps: {
    orientation: 'horizontal',
    thickness: '1',
  },
};
