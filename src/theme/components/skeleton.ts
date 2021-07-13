import { mode } from '../tools';
import typography from '../base/typography';

const baseStyle = (props: Record<string, any>) => {
  return {
    startColor: mode('muted.200', 'muted.600')(props),
    endColor: 'transparent',
    fadeDuration: 0.1,
    borderRadius: 3,
    speed: 1.0,
  };
};
const baseStyleCircle = (props: Record<string, any>) => {
  return {
    startColor: mode('muted.200', 'muted.600')(props),
    endColor: 'transparent',
    fadeDuration: 0.1,
    borderRadius: 'full',
    speed: 1.0,
  };
};
const baseStyleText = (props: Record<string, any>) => {
  return {
    startColor: mode('muted.200', 'muted.600')(props),
    endColor: 'transparent',
    fadeDuration: 0.1,
    borderRadius: 3,
    speed: 1.0,
  };
};

const defaultProps = {
  isLoaded: false,
};

const fontSizes = {
  ...typography.fontSizes,
};

const lineHeights = {
  ...typography.lineHeights,
};

const defaultPropsText = {
  isLoaded: false,
  noOfLines: 1,
  lineHeight: 3,
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

// SkeletonCircle
export const SkeletonCircle = {
  baseStyle: baseStyleCircle,
  defaultProps,
};
