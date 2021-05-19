import React from 'react';
import {
  Svg as RnSvg,
  G as RnG,
  Path as RnPath,
  Polygon as RnPolygon,
  Line as RnLine,
  Circle as RnCircle,
  Rect as RnRect,
} from 'react-native-svg';

export const Svg = ({ style, ...props }: any) => (
  <RnSvg {...props} style={[{ tabIndex: false }, style]} />
);
export const G = ({ style, ...props }: any) => (
  <RnG {...props} style={[{ tabIndex: false }, style]} />
);
export const Path = ({ style, ...props }: any) => (
  <RnPath {...props} style={[{ tabIndex: false }, style]} />
);
export const Polygon = ({ style, ...props }: any) => (
  <RnPolygon {...props} style={[{ tabIndex: false }, style]} />
);
export const Line = ({ style, ...props }: any) => (
  <RnLine {...props} style={[{ tabIndex: false }, style]} />
);
export const Circle = ({ style, ...props }: any) => (
  <RnCircle {...props} style={[{ tabIndex: false }, style]} />
);
export const Rect = ({ style, ...props }: any) => (
  <RnRect {...props} style={[{ tabIndex: false }, style]} />
);
