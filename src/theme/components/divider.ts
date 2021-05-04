import { mode } from '../tools';

function baseStyle(props: Record<string, any>) {
  const { orientation, size } = props;
  const orientationProps =
    orientation === 'vertical'
      ? {
          width: size,
          height: '100%',
        }
      : {
          width: '100%',
          height: size,
        };

  return {
    bg: mode('muted.200', 'muted.500')(props),
    ...orientationProps,
  };
}

export default {
  baseStyle,
  defaultProps: {
    orientation: 'horizontal',
    size: '1px',
  },
};
