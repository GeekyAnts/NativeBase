import { getColorScheme, mode } from '../tools';
export const SliderTrack = {
  baseStyle: ({ isVertical, size, ...props }: any) => {
    const simplifiedColorScheme = getColorScheme(props);
    return {
      bg: `${simplifiedColorScheme}.100`,
      borderRadius: 'lg',
      overflow: 'hidden',
      style: {
        height: isVertical ? '100%' : size,
        width: !isVertical ? '100%' : size,
      },
      _pressable: {
        alignItems: 'center',
        justifyContent: 'center',
        height: isVertical ? '100%' : size,
        width: !isVertical ? '100%' : size,
        py: !isVertical ? '3' : undefined,
        px: isVertical ? '3' : undefined,
      },
    };
  },
};

export const SliderThumb = {
  baseStyle: (props: any) => {
    const simplifiedColorScheme = getColorScheme(props);
    return {
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
  baseStyle: ({
    orientation,
    isReversed,
    sliderTrackPosition,
    size,
    ...props
  }: any) => {
    const simplifiedColorScheme = getColorScheme(props);
    return {
      bg: mode(
        `${simplifiedColorScheme}.600`,
        `${simplifiedColorScheme}.300`
      )(props),
      left: orientation !== 'vertical' && !isReversed ? 0 : undefined,
      bottom: orientation === 'vertical' && !isReversed ? 0 : undefined,
      right: orientation !== 'vertical' && isReversed ? 0 : undefined,
      top: orientation === 'vertical' && isReversed ? 0 : undefined,
      style:
        orientation === 'vertical'
          ? { height: sliderTrackPosition, width: size }
          : { width: sliderTrackPosition, height: size },
    };
  },
};

const sizes = {
  lg: { thumbSize: 6, sliderSize: 6 },
  md: { thumbSize: 5, sliderSize: 5 },
  sm: { thumbSize: 4, sliderSize: 4 },
};

export const Slider = {
  baseStyle: (props: any) => {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      height: props.orientation === 'vertical' ? '100%' : undefined,
      width: props.orientation !== 'vertical' ? '100%' : undefined,
    };
  },
  defaultProps: {
    size: 'sm',
  },
  sizes,
};
