import { getColorScheme, mode } from '../tools';
export const SliderTrack = {
  baseStyle: (props: any) => {
    const simplifiedColorScheme = getColorScheme(props);
    return {
      bg: `${simplifiedColorScheme}.100`,
      borderRadius: 'lg',
      overflow: 'hidden',
    };
  },
};

export const SliderThumb = {
  baseStyle: (props: any) => {
    const simplifiedColorScheme = getColorScheme(props);
    return {
      _web: { cursor: 'pointer' },
      borderRadius: 99999,
      zIndex: 999,
      alignItems: 'center',
      justifyContent: 'center',
      bg: mode(
        `${simplifiedColorScheme}.600`,
        `${simplifiedColorScheme}.300`
      )(props),
      scaleOnPressed: 1.2,
    };
  },
};

export const SliderFilledTrack = {
  baseStyle: (props: any) => {
    const simplifiedColorScheme = getColorScheme(props);
    return {
      bg: mode(
        `${simplifiedColorScheme}.600`,
        `${simplifiedColorScheme}.300`
      )(props),
    };
  },
};

const sizes = {
  lg: { thumbSize: 6, sliderSize: 6 },
  md: { thumbSize: 5, sliderSize: 5 },
  sm: { thumbSize: 4, sliderSize: 4 },
};

export const Slider = {
  defaultProps: {
    size: 'sm',
  },
  sizes,
};
