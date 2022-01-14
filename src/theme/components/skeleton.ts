import { mode } from '../tools';

// Skeleton
export const Skeleton = {
  baseStyle: (props: Record<string, any>) => {
    return {
      startColor: mode('muted.200', 'muted.600')(props),
      endColor: 'transparent',
      fadeDuration: 0.1,
      speed: 1.0,
      h: '10',
      w: '100%',
    };
  },
};

// SkeletonText
export const SkeletonText = {
  baseStyle: (props: Record<string, any>) => {
    return {
      startColor: mode('muted.200', 'muted.600')(props),
      endColor: 'transparent',
      fadeDuration: 0.1,
      w: '100%',
      speed: 1.0,
      _line: {
        h: 3,
        rounded: 'full',
      },
    };
  },
  defaultProps: {
    lines: 3,
    space: 3,
  },
};
