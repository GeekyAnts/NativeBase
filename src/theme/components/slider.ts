export const SliderTrack = {
  baseStyle: () => {
    return {
      borderRadius: 'lg',
      overflow: 'hidden',
      _pressable: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      _light: {
        bg: 'muted.200',
      },
      _dark: {
        bg: 'muted.700',
      },
    };
  },

  variants: {
    horizontal: {
      px: '3',
      width: '100%',
      height: 1,
      _pressable: {
        height: 1,
        width: '100%',
      },
    },
    vertical: {
      py: '3',
      height: '100%',
      width: 1,
      _pressable: {
        height: '100%',
        width: 1,
      },
    },
  },
};

export const SliderThumb = {
  baseStyle: (props: any) => {
    const { colorScheme } = props;
    const { primary } = props.theme.colors;
    return {
      borderRadius: 'full',
      zIndex: 999,
      alignItems: 'center',
      justifyContent: 'center',
      scaleOnPressed: 1,
      _interactionBox: {
        position: 'absolute',
        borderRadius: 'full',
        zIndex: -1,
      },
      _stack: {
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // space: 2,
      },
      _light: {
        bg: `${colorScheme}.600`,
        _hover: {
          _web: {
            outlineWidth: '4px',
            outlineColor: primary[300],
            outlineStyle: 'solid',
          },
        },
        _focus: {
          _web: {
            outlineWidth: '2px',
            outlineColor: primary[400],
            outlineStyle: 'solid',
          },
        },
        _pressed: {
          _interactionBox: {
            borderWidth: '8',
            borderColor: `${colorScheme}.300`,
          },
        },
      },
      _dark: {
        bg: `${colorScheme}.500`,
        _hover: {
          _web: {
            outlineWidth: '4px',
            outlineColor: primary[800],
            outlineStyle: 'solid',
          },
        },
        _focus: {
          _web: {
            outlineWidth: '2px',
            outlineColor: primary[400],
            outlineStyle: 'solid',
          },
        },
        _pressed: {
          _interactionBox: {
            borderWidth: '8',
            borderColor: `${colorScheme}.800`,
          },
        },
      },
      // shadow: 6,
      _web: {
        cursor: 'pointer',
      },
    };
  },
  defaultProps: {
    colorScheme: 'primary',
  },
  sizes: {
    lg: {
      _interactionBox: { p: '3' },
    },
    md: {
      _interactionBox: { p: '2.5' },
    },
    sm: {
      _interactionBox: { p: '2' },
    },
  },
};

export const SliderFilledTrack = {
  baseStyle: ({ colorScheme }: any) => {
    return {
      // style:
      //   orientation === 'vertical'
      //     ? { height: sliderTrackPosition, width: size }
      //     : { width: sliderTrackPosition, height: size },
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

const sliderSizes = {
  lg: { thumbSize: 6, sliderTrackHeight: 6 },
  md: { thumbSize: 5, sliderTrackHeight: 5 },
  sm: { thumbSize: 4, sliderTrackHeight: 4 },
};

const variants = {
  vertical: () => {
    return {
      height: '100%',

      _sliderFilledTrack: {
        style: {
          // height: sliderTrackPosition,
          // width: size,
        },
        bottom: 0,
        _reversed: {
          top: 0,
        },
      },
    };
  },
  horizontal: () => {
    return {
      width: '100%',
      _sliderFilledTrack: {
        // style: {
        //   width: sliderTrackPosition,
        // },
        height: `4px`,
        left: 0,
        // bottom: undefined,
        // top: undefined,
        // right: undefined,
        _reversed: {
          right: 0,
        },

        // left: orientation !== 'vertical' && !isReversed ? 0 : undefined,
        // bottom: orientation === 'vertical' && !isReversed ? 0 : undefined,
        // right: orientation !== 'vertical' && isReversed ? 0 : undefined,
        // top: orientation === 'vertical' && isReversed ? 0 : undefined,
      },
    };
  },
};

export const Slider = {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    _disabled: {
      opacity: 0.4,
      _web: {
        cursor: 'not-allowed',
      },
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'horizontal',
    colorScheme: 'primary',
  },
  sizes: sliderSizes,
  variants,
};
