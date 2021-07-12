import { getColor } from '../tools/colors';
import { mode } from '../tools';
import typography from '../base/typography';

const baseStyle = (props: Record<string, any>) => {
  let { startColor, endColor, theme } = props;
  let skeletonColor = getColor(
    theme,
    startColor,
    mode(theme.colors.muted[200], theme.colors.muted[600])(props)
  );
  let baseColor = getColor(theme, endColor, 'transparent');
  return {
    skeletonColor,
    baseColor,
  };
};
const baseStyleText = (props: Record<string, any>) => {
  let { startColor, theme } = props;
  let skeletonColor = getColor(
    theme,
    startColor,
    mode(theme.colors.muted[200], theme.colors.muted[600])(props)
  );
  let baseColor = 'transparent';
  return {
    skeletonColor,
    baseColor,
  };
};

const defaultProps = {
  fadeDuration: 0.1,
  speed: 1.0,
  isLoaded: false,
};

const fontSizes = {
  ...typography.fontSizes,
};

const lineHeights = {
  ...typography.lineHeights,
};

const defaultPropsText = {
  fadeDuration: 0.1,
  speed: 1.0,
  isLoaded: false,
  noOfLines: 1,
  lineHeight: 12,
};

// SkeletonText
export const SkeletonText = {
  baseStyle: baseStyleText,
  fontSizes,
  lineHeights,
  defaultProps: defaultPropsText,
};

// Skeleton
export const Skeleton = {
  baseStyle,
  defaultProps,
};
