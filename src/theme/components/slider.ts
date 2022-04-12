export const SliderTrack = {
  baseStyle: ({ isVertical, size }: any) => {
    return {
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
      _light: {
        bg: 'muted.200',
      },
      _dark: {
        bg: 'muted.700',
      },
    };
  },
};

export const SliderThumb = {
  baseStyle: (props: any) => {
    let { colorScheme } = props;
    return {
      borderRadius: 'full',
      zIndex: 999,
      alignItems: 'center',
      justifyContent: 'center',
      scaleOnPressed: 1.2,
      _light: {
        bg: `${colorScheme}.600`,
      },
      _dark: {
        bg: `${colorScheme}.500`,
      },
      shadow: 6,
    };
  },
  defaultProps: {
    colorScheme: 'primary',
  },
};

export const SliderFilledTrack = {
  baseStyle: ({
    orientation,
    isReversed,
    sliderTrackPosition,
    size,
    colorScheme,
  }: any) => {
    return {
      left: orientation !== 'vertical' && !isReversed ? 0 : undefined,
      bottom: orientation === 'vertical' && !isReversed ? 0 : undefined,
      right: orientation !== 'vertical' && isReversed ? 0 : undefined,
      top: orientation === 'vertical' && isReversed ? 0 : undefined,
      style:
        orientation === 'vertical'
          ? { height: sliderTrackPosition, width: size }
          : { width: sliderTrackPosition, height: size },
      _light: {
        bg: `${colorScheme}.600`,
      },
      _dark: {
        bg: `${colorScheme}.500`,
      },
    };
  },
  defaultProps: {
    colorScheme: 'primary',
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
      _disabled: {
        opacity: 0.4,
        _web: {
          cursor: 'not-allowed',
        },
      },
    };
  },
  defaultProps: {
    size: 'sm',
  },
  sizes,
};
