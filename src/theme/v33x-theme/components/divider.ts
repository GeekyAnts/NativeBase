import { mode } from '../tools';

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
    bg: mode('coolGray.200', 'gray.600')(props),
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
