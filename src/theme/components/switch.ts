import get from 'lodash/get';
import { mode, getColorScheme } from '../tools';

function baseStyleTrack(props: Record<string, any>) {
  const { colorScheme, theme, offTrackColor } = props;
  const simplifiedColorScheme = getColorScheme(props);
  return colorScheme && colorScheme !== 'default'
    ? {
        false: offTrackColor
          ? mode(
              theme.colors[offTrackColor][400],
              theme.colors[offTrackColor][100]
            )(props)
          : mode(theme.colors.light[100], theme.colors.dark[50])(props),
        true: mode(
          theme.colors[simplifiedColorScheme][500],
          theme.colors[simplifiedColorScheme][200]
        )(props),
      }
    : undefined;
}
function baseStyleThumb(props: Record<string, any>) {
  return props.checked
    ? props.onColor
      ? get(props.theme.colors, props.onColor)
      : undefined
    : props.offColor
    ? get(props.theme.colors, props.offColor)
    : undefined;
}

const baseStyle = (props: Record<string, any>) => ({
  trackColor: baseStyleTrack(props),
  thumbColor: baseStyleThumb(props),
});

const sizes = {
  sm: {
    transform: [{ scale: 0.75 }],
  },
  md: {},
  lg: {
    transform: [{ scale: 1.25 }],
    margin: 1,
  },
};

const defaultProps = {
  size: 'md',
  colorScheme: 'default',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
