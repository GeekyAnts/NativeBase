import { mode, getColorScheme } from '../tools';
import { Platform } from 'react-native';

const baseStyle = (props: Record<string, any>) => {
  let { onTrackColor, offTrackColor, onThumbColor, offThumbColor } = props;
  let colorScheme = getColorScheme(props);

  return {
    offTrackColor:
      offTrackColor ??
      mode(
        Platform.OS !== 'ios' ? 'gray.400' : 'gray.200',
        Platform.OS !== 'ios' ? 'gray.700' : 'gray.600'
      )(props),
    onTrackColor:
      onTrackColor ??
      mode(
        Platform.OS !== 'ios' ? `${colorScheme}.300` : `${colorScheme}.500`,
        Platform.OS !== 'ios' ? `${colorScheme}.700` : `${colorScheme}.500`
      )(props),
    onThumbColor:
      onThumbColor ??
      mode(
        Platform.OS !== 'ios' ? `${colorScheme}.600` : 'white',
        Platform.OS !== 'ios' ? `${colorScheme}.500` : 'white'
      )(props),
    offThumbColor:
      offThumbColor ??
      mode(
        Platform.OS !== 'ios' ? 'gray.100' : 'white',
        Platform.OS !== 'ios' ? 'gray.200' : 'white'
      )(props),
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
