//@ts-ignore
import { unstable_createElement } from 'react-native-web';
import { forwardRef } from 'react';

export const Svg = forwardRef((props: any, ref: any) =>
  unstable_createElement('svg', { ...props, ref })
);
export const G = forwardRef((props: any, ref: any) =>
  unstable_createElement('g', { ...props, ref })
);
export const Path = forwardRef((props: any, ref: any) =>
  unstable_createElement('path', { ...props, ref })
);
export const Polygon = forwardRef((props: any, ref: any) =>
  unstable_createElement('polygon', { ...props, ref })
);
export const Line = forwardRef((props: any, ref: any) =>
  unstable_createElement('line', { ...props, ref })
);
export const Circle = forwardRef((props: any, ref: any) =>
  unstable_createElement('circle', { ...props, ref })
);
export const Rect = forwardRef((props: any, ref: any) =>
  unstable_createElement('rect', { ...props, ref })
);
