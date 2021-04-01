function baseStyle(props: Record<string, any>) {
  const { orientation } = props;
  return {
    borderTopWidth: orientation === 'vertical' ? 0 : 1,
    borderLeftWidth: orientation === 'vertical' ? 1 : 0,
    bg: 'muted.200',
  };
}

export default {
  baseStyle,
  defaultProps: {
    orientation: 'horizontal',
  },
};
