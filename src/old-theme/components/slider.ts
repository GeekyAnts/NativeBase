import { mode, getColorScheme } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const simplifiedColorScheme = getColorScheme(props);
  return {
    activeColor: mode(
      `${simplifiedColorScheme}.500`,
      `${simplifiedColorScheme}.200`
    )(props),
    trackColor: mode('gray.200', 'gray.700')(props),
  };
};

const sizes = {
  // sizes mentioned here are used in pxiles.
  lg: { thumbSize: 10, sliderSize: 9 },
  md: { thumbSize: 8, sliderSize: 8 },
  sm: { thumbSize: 6, sliderSize: 6 },
};

const defaultProps = {
  colorScheme: 'default',
  size: 'md',
  min: 0,
  max: 100,
  step: 1,
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};

// SliderThumb
const sliderThumbDefaultProps = {
  shadow: 2,
  borderWidth: 2,
};
export const SliderThumb = {
  defaultProps: sliderThumbDefaultProps,
};
