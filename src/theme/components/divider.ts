function baseStyle(props: Record<string, any>) {
  const { orientation, size } = props;
  const orientationProps =
    orientation === 'vertical'
      ? {
          width: `${size}px`,
          height: '100%',
        }
      : {
          width: '100%',
          height: `${size}px`,
        };

  return {
    bg: 'muted.200',
    ...orientationProps,
  };
}

export default {
  baseStyle,
  defaultProps: {
    orientation: 'horizontal',
    size: 1,
  },
};
