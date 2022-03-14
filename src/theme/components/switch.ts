// import { mode, getColorScheme } from '../tools';
// import { Platform } from 'react-native';

const baseStyle = (props: Record<string, any>) => {
  const { colorScheme: c } = props;
  //TODO: Use of Platform can be removed
  return {
    _disabled: {
      opacity: 0.4,
    },
    _invalid: {
      borderWidth: 1,
      borderRadius: 16,
    },
    // offTrackColor: mode(
    //   Platform.OS !== 'ios' ? 'gray.400' : 'gray.200',
    //   Platform.OS !== 'ios' ? 'gray.700' : 'gray.600'
    // )(props),
    // onTrackColor: mode(
    //   Platform.OS !== 'ios' ? `${colorScheme}.300` : `${colorScheme}.500`,
    //   Platform.OS !== 'ios' ? `${colorScheme}.700` : `${colorScheme}.500`
    // )(props),
    // onThumbColor: mode(
    //   Platform.OS !== 'ios' ? `${colorScheme}.600` : 'white',
    //   Platform.OS !== 'ios' ? `${colorScheme}.500` : 'white'
    // )(props),
    // offThumbColor: mode(
    //   Platform.OS !== 'ios' ? 'gray.100' : 'white',
    //   Platform.OS !== 'ios' ? 'gray.200' : 'white'
    // )(props),
    onThumbColor: 'muted.50',
    offThumbColor: 'muted.50',
    _light: {
      offTrackColor: 'muted.300',
      onTrackColor: `${c}.600`,
      _hover: {
        offTrackColor: 'muted.400',
        onTrackColor: `${c}.700`,
      },
      _invalid: {
        borderColor: 'error.500',
      },
    },
    _dark: {
      offTrackColor: 'muted.700',
      onTrackColor: `${c}.500`,
      _hover: {
        offTrackColor: 'muted.600',
        onTrackColor: `${c}.400`,
      },
      _invalid: {
        borderColor: 'error.600',
      },
    },
  };
};

const sizes = {
  sm: {
    style: {
      transform: [{ scale: 0.75 }],
    },
  },
  md: {},
  lg: {
    style: {
      transform: [{ scale: 1.25 }],
    },
    margin: 1,
  },
};

const defaultProps = {
  size: 'md',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
